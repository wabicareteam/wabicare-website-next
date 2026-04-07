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
  description = "Azure subscription ID"
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
  sku_tier            = "Free"
  sku_size            = "Free"

  tags = {
    project     = var.project_name
    environment = "production"
    managed_by  = "terraform"
  }
}

output "static_web_app_url" {
  description = "Default URL of the static web app"
  value       = azurerm_static_web_app.website.default_host_name
}

output "static_web_app_api_key" {
  description = "API key for deploying to the static web app"
  value       = azurerm_static_web_app.website.api_key
  sensitive   = true
}

output "resource_group_name" {
  description = "Resource group name"
  value       = azurerm_resource_group.website.name
}
