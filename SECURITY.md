# Security posture — wabicare.com

Trust is priority one. This summarizes how the marketing site is built and what
reviewers should know. The site is a **Next.js static export** served by **Azure
Static Web Apps** (on the sponsored/credits subscription), fronted by Cloudflare,
with a single managed **Azure Function** (`api/contact`) for demo/newsletter leads.

## What runs in production
- **Static files only.** The deployed artifact is pre-rendered HTML/CSS/JS on the
  CDN — `node_modules` does **not** run in production. There is no server runtime
  except the one function below.
- **`api/contact`** (anonymous POST) — delivers leads and newsletter signups by
  email via Azure Communication Services. No PHI; prospect contact details only.

## Controls in place
### Secrets
- No secrets or credentials are committed. Verified: no `.env`/tfstate/keys tracked,
  no hardcoded connection strings or tokens in source.
- Runtime config comes only from **Static Web App application settings**
  (`AZURE_COMMUNICATION_CONNECTION_STRING`, `AZURE_EMAIL_SENDER`, `LEADS_EMAIL`).
- Terraform uses a **remote azurerm backend** so state (which contains the ACS
  connection string and SWA key) never sits in a plaintext local file; sensitive
  outputs are marked `sensitive`.

### Lead endpoint (`api/contact`)
- Input is validated and length-capped; the email regex is ReDoS-safe.
- All user input is **HTML-escaped** before it enters the notification email.
- The recipient is a **fixed** server-side address — the endpoint cannot be used
  as an open relay or to redirect mail.
- A **honeypot** field drops bot submissions silently (200, no send).
- Errors are generic (no stack traces); an unconfigured deployment fails closed
  (503) rather than faking success.

### Transport & headers
- HTTPS enforced; HSTS, `Referrer-Policy`, and `X-Content-Type-Options` are set
  (Cloudflare), plus a `staticwebapp.config.json` baseline adding
  `X-Frame-Options: DENY`, CSP `frame-ancestors 'none'`, `object-src 'none'`,
  `base-uri 'self'`, and a restrictive `Permissions-Policy`.

### CI/CD
- Deploy runs on **push to `main`** (not `pull_request_target`), so forked/untrusted
  PRs never receive secrets.
- Workflow permissions are least-privilege (`contents: read`); the deploy token is
  passed to the action and never echoed.

## Known / accepted items
- **`npm audit`** reports advisories in **`sharp`**, an optional transitive dep of
  Next. It is **never invoked in a static export**, cannot be patched via npm
  (bundled binaries), and bumping increases the count. Since `node_modules` does
  not run in production and the only server code (`api/contact`) audits clean,
  runtime exposure is effectively nil. Tracked for a future clean Next release.

## Recommended next steps (low urgency)
- Add a **full content-CSP** (`script-src`/`connect-src`) in report-only, then
  enforce after tuning (static-export Next needs `'unsafe-inline'` or hashes).
- Enable **Dependabot** and pin GitHub Actions to commit SHAs.
- Add **rate limiting** to `api/contact` if abuse appears (honeypot covers bots today).
- Set a **budget alert** on the sponsored subscription so credits never run dry.

## Reporting a vulnerability
Email **info@wabicare.com**. Please allow time to remediate before public disclosure.
