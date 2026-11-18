# Remote state so the ACS connection string and SWA deploy key never live in a
# plaintext tfstate on an operator's laptop. Uses the shared state account.
#
# One-time setup before `terraform init`:
#   az storage container create --account-name stterraformstate5ntotxmx \
#     --name terraform-state-website --auth-mode login
# Then: terraform init  (add -migrate-state if you had local state).
terraform {
  backend "azurerm" {
    resource_group_name  = "rg-terraform-state"
    storage_account_name = "stterraformstate5ntotxmx"
    container_name       = "terraform-state-website"
    key                  = "wabicare-website.tfstate"
  }
}
