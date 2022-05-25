terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}
resource "aws_elastic_beanstalk_application" "tftest" {
  name        = "nodeapp"
  description = "nodeapp"
}

resource "aws_elastic_beanstalk_environment" "tfenvtest" {
  name                = "nodeenv"
  application         = aws_elastic_beanstalk_application.tftest.name
}
