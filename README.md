# PROJECT SPIRIT
## Secure AWS Three-Tier Architecture with HTTPS

### Project Overview

Project Spirit is a hands-on cloud engineering project focused on building and deploying a secure three-tier web application on Amazon Web Services (AWS).

The application allows users to submit information through a web interface, store records in a MySQL database and retrieve previously saved records.

The project demonstrates cloud infrastructure design, network segmentation, compute deployment, load balancing, database connectivity and secure HTTPS communication.

### Application Architecture

**Application Stack**

- **Frontend:** HTML, CSS and Vanilla JavaScript
- **Web Server:** Apache HTTP Server
- **Backend:** Python and Flask
- **Database:** Amazon RDS for MySQL

**Planned AWS Infrastructure**

- **Networking:** Amazon VPC, public and private subnets across multiple Availability Zones
- **Frontend Compute:** Amazon EC2
- **Backend Compute:** Amazon EC2
- **Public Load Balancer:** Internet-facing Application Load Balancer
- **Internal Load Balancer:** Internal Application Load Balancer
- **Database:** Amazon RDS for MySQL
- **SSL/TLS Certificate:** AWS Certificate Manager (ACM)
- **DNS:** Amazon Route 53

### Application Request Flow

The planned request flow is:

```text
Internet / User Browser
          |
          | HTTPS
          v
   Public Application
      Load Balancer
          |
          v
    Frontend EC2
   Apache Web Server
          |
          | API Requests
          v
   Internal Application
      Load Balancer
          |
          v
     Backend EC2
      Python Flask
          |
          v
    Amazon RDS
       MySQL
```

Apache will serve the frontend files and forward API requests to the internal load balancer. The backend will communicate with the RDS database.

### Core Application Features

- Submit and save text records.
- Retrieve previously saved records.
- Store application data in a MySQL database.
- Communicate between the frontend and backend through REST API endpoints.

### Project Objectives

- Build a functional three-tier web application.
- Design and deploy an AWS VPC across multiple Availability Zones.
- Configure public and private subnets.
- Deploy frontend and backend EC2 instances.
- Implement public and internal Application Load Balancers.
- Configure secure connectivity between application tiers.
- Deploy and connect an Amazon RDS MySQL database.
- Enable HTTPS using AWS Certificate Manager.
- Configure DNS using Amazon Route 53.
- Apply AWS security and access management controls.

### Implementation Phases

1. Application Development
2. AWS VPC and Networking
3. Security Configuration
4. Compute Deployment
5. Database Deployment
6. Load Balancer Configuration
7. Domain and HTTPS Configuration
8. Integration and Testing
9. Documentation and Final Review

### Repository Structure

```text
project-spirit/
├── README.md
├── DOCUMENTATION.md
├── .gitignore
├── frontend/
├── backend/
├── database/
├── infrastructure/
├── screenshots/
└── diagrams/
```

### Current Project Status

**Local Application Development: Completed**

- Frontend interface created.
- Flask backend implemented.
- MySQL database and records table configured.
- Python-to-MySQL connectivity verified.
- POST and GET API endpoints tested.
- Frontend successfully integrated with the backend.
- Local record submission and retrieval verified.

**AWS Infrastructure: Pending**

AWS networking, EC2 deployment, load balancing, RDS deployment, DNS and HTTPS configuration will be implemented in subsequent phases.

### Technologies

HTML | CSS | JavaScript | Python | Flask | MySQL | Apache | AWS

### Project Purpose

This project is designed to demonstrate practical cloud engineering skills through the development, deployment and security of a three-tier application on AWS.
