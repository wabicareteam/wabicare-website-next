terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 4.0"
    }
  }
  required_version = ">= 1.0"
}

provider "azurerm" {
  features {}
  subscription_id = var.subscription_id
}

variable "subscription_id" {
  description = "Azure subscription ID (the one holding the startup credits)"
  type        = string
}

variable "location" {
  description = "Azure region"
  type        = string
  default     = "eastus2"
}

variable "project_name" {
  description = "Project name for resource naming"
  type        = string
  default     = "wabicare-website"
}

# NOTE ON STATE / IMPORT
# The live resources (rg-wabicare-website, the Static Web App, and — once added —
# ACS) were originally created by hand. Before the first `terraform apply`, import
# the existing objects so Terraform adopts rather than recreates them, e.g.:
#   terraform import azurerm_resource_group.website \
#     /subscriptions/<sub>/resourceGroups/rg-wabicare-website
#   terraform import azurerm_static_web_app.website \
#     /subscriptions/<sub>/resourceGroups/rg-wabicare-website/providers/Microsoft.Web/staticSites/wabicare-website
# Run `terraform plan` and confirm there are no destroys before applying.

resource "azurerm_resource_group" "website" {
  name     = "rg-${var.project_name}"
  location = var.location

  tags = {
    project     = var.project_name
    environment = "production"
    managed_by  = "terraform"
  }
}

resource "azurerm_static_web_app" "website" {
  name                = var.project_name
  resource_group_name = azurerm_resource_group.website.name
  location            = var.location
  # Standard matches the live resource (the Free block was drift).
  sku_tier = "Standard"
  sku_size = "Standard"

  tags = {
    project     = var.project_name
    environment = "production"
    managed_by  = "terraform"
  }
}

# ──────────────────────────────────────────────────────────────────────────
# Email delivery for leads + newsletter (api/contact → Azure Communication
# Services). Mirrors the clinical backend's ACS email path.
# ──────────────────────────────────────────────────────────────────────────

resource "azurerm_communication_service" "website" {
  name                = "acs-${var.project_name}"
  resource_group_name = azurerm_resource_group.website.name
  data_location       = "United States"

  tags = {
    project     = var.project_name
    environment = "production"
    managed_by  = "terraform"
  }
}

resource "azurerm_email_communication_service" "website" {
  name                = "email-${var.project_name}"
  resource_group_name = azurerm_resource_group.website.name
  data_location       = "United States"

  tags = {
    project     = var.project_name
    environment = "production"
    managed_by  = "terraform"
  }
}

# Azure-managed sending domain — works immediately (sender is
# DoNotReply@<guid>.azurecomm.net). To send from a branded wabicare.com
# address, add an azurerm_email_communication_service_domain with
# domain_management = "CustomerManaged" and verify SPF/DKIM/DMARC in DNS.
resource "azurerm_email_communication_service_domain" "managed" {
  name              = "AzureManagedDomain"
  email_service_id  = azurerm_email_communication_service.website.id
  domain_management = "AzureManaged"
}

resource "azurerm_communication_service_email_domain_association" "website" {
  communication_service_id = azurerm_communication_service.website.id
  email_service_domain_id  = azurerm_email_communication_service_domain.managed.id
}

# ── Outputs ────────────────────────────────────────────────────────────────

output "static_web_app_url" {
  description = "Default URL of the static web app"
  value       = azurerm_static_web_app.website.default_host_name
}

output "static_web_app_api_key" {
  description = "Deployment token — set as the AZURE_STATIC_WEB_APPS_API_TOKEN GitHub secret"
  value       = azurerm_static_web_app.website.api_key
  sensitive   = true
}

# Set as the Static Web App application setting AZURE_COMMUNICATION_CONNECTION_STRING
output "acs_connection_string" {
  description = "ACS connection string for api/contact (AZURE_COMMUNICATION_CONNECTION_STRING)"
  value       = azurerm_communication_service.website.primary_connection_string
  sensitive   = true
}

# The sender domain; set AZURE_EMAIL_SENDER to DoNotReply@<this-domain>
output "acs_sender_domain" {
  description = "Managed sending domain; sender address is DoNotReply@<domain>"
  value       = azurerm_email_communication_service_domain.managed.mail_from_sender_domain
}

output "resource_group_name" {
  description = "Resource group name"
  value       = azurerm_resource_group.website.name
}
