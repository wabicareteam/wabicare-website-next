# Deploying wabicare.com

The marketing site is a Next.js static export served by **Azure Static Web Apps**,
with a managed **Azure Function** (`api/contact`) that delivers demo requests and
newsletter signups by email via **Azure Communication Services (ACS)**.

Everything below runs against the subscription that holds the startup credits:

```
SUB=11ef19a6-5fa3-471e-b149-8d8fdb2b1246   # "Azure subscription 1" (credits)
RG=rg-wabicare-website
SWA=wabicare-website                        # Static Web App (Standard SKU), eastus2
```

Prerequisites: `az login` into the account above, and `gh` authenticated as a
user with **admin** on `wabicareteam/wabicare-website-next` (needed to set secrets).

---

## 1. Connect GitHub Actions to the Static Web App

The deploy workflow (`.github/workflows/deploy.yml`) authenticates with the SWA
deployment token. Set it once as a repo secret (piped directly so it never prints):

```bash
gh secret set AZURE_STATIC_WEB_APPS_API_TOKEN -R wabicareteam/wabicare-website-next --body "$(az staticwebapp secrets list --name wabicare-website -g rg-wabicare-website --subscription 11ef19a6-5fa3-471e-b149-8d8fdb2b1246 --query 'properties.apiKey' -o tsv)"
```

## 2. Provision the email backend (ACS) with Terraform

`infra/main.tf` defines the SWA + ACS. The live resources were created by hand, so
**import them first** or Terraform will try to recreate them. Confirm `terraform plan`
shows **no destroys** before applying.

```bash
cd infra
terraform init

# Adopt the existing hand-created resources (skip any already in state):
terraform import azurerm_resource_group.website \
  "/subscriptions/$SUB/resourceGroups/$RG"
terraform import azurerm_static_web_app.website \
  "/subscriptions/$SUB/resourceGroups/$RG/providers/Microsoft.Web/staticSites/$SWA"

terraform plan   -var subscription_id=$SUB   # review: expect only ACS adds, no destroys
terraform apply  -var subscription_id=$SUB
```

This creates `acs-wabicare-website` (Communication Service), `email-wabicare-website`
(Email Communication Service), and an Azure-managed sending domain.

Grab the values you need for step 3:

```bash
terraform output -raw acs_connection_string   # -> AZURE_COMMUNICATION_CONNECTION_STRING
terraform output -raw acs_sender_domain        # sender is DoNotReply@<this-domain>
```

> **Branded sender (optional, better deliverability):** to send from a wabicare.com
> address instead of the managed `*.azurecomm.net` domain, add an
> `azurerm_email_communication_service_domain` with `domain_management = "CustomerManaged"`,
> then verify the SPF/DKIM/DMARC records it generates in Cloudflare DNS. (Relevant given
> the domain's prior SPF/DKIM deliverability work.)

## 3. Configure the Static Web App application settings

The `api/contact` function reads these at runtime (none are committed):

```bash
az staticwebapp appsettings set --name $SWA -g $RG --subscription $SUB --setting-names \
  AZURE_COMMUNICATION_CONNECTION_STRING="<from terraform output acs_connection_string>" \
  AZURE_EMAIL_SENDER="DoNotReply@<from terraform output acs_sender_domain>" \
  LEADS_EMAIL="info@wabicare.com"
```

| Setting | Purpose |
|---|---|
| `AZURE_COMMUNICATION_CONNECTION_STRING` | ACS connection string (required) |
| `AZURE_EMAIL_SENDER` | Verified ACS sender address (required) |
| `LEADS_EMAIL` | Where leads/signups are delivered (defaults to info@wabicare.com) |

If the first two are missing, the function returns 503 and the site shows its
`mailto:info@wabicare.com` fallback — it never fakes success.

## 4. Deploy

`main` currently lags the live site. Bring it to parity and ship:

```
Merge this PR  ->  restore/live-parity
Merge          restore/live-parity  ->  main   (owner approval — prod release)
```

The push to `main` triggers `.github/workflows/deploy.yml`, which builds the static
export and uploads it (plus the `api/` function) to the Static Web App. First
deploy takes a few minutes.

## 5. Verify after deploy

```bash
SITE=https://wabicare.com
curl -s -o /dev/null -w "%{http_code}\n" $SITE/faq      # 200
curl -s -o /dev/null -w "%{http_code}\n" $SITE/hipaa    # 200
# lead pipeline (should be 200 once ACS settings are in place):
curl -s -o /dev/null -w "%{http_code}\n" -X POST $SITE/api/contact \
  -H 'content-type: application/json' \
  -d '{"email":"you@example.com","source":"newsletter"}'
```

Then submit the demo wizard and the newsletter form once each and confirm the email
lands at **info@wabicare.com**. (Make sure that inbox is monitored — a contact
address that bounces is worse than none.)

---

### Notes
- **Static Web App SKU:** Terraform is set to **Standard** to match the live resource
  (the original `Free` block was drift). Importing before apply avoids a recreate.
- **Secrets:** no connection strings or tokens live in the repo — only in the SWA
  application settings and the GitHub Actions secret.
