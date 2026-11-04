# PROJECT SPIRIT
## Technical Documentation

### . Project Description

Project Spirit is a hands-on AWS cloud engineering project focused on deploying a secure,  available three-tier web application with HTTPS.

The application enables users to submit and retrieve records through a web interface, with data stored in a MySQL database.

### . Technology Stack

| Component | Technology |
|---|---|
| Frontend | HTML, CSS, Vanilla JavaScript |
| Web Server | Apache HTTP Server |
| Backend | Python, Flask |
| Database | MySQL / Amazon RDS |
| Compute | Amazon EC2 |
| Networking | Amazon VPC |
| Load Balancing | Application Load Balancer |
| SSL/TLS | AWS Certificate Manager |
| DNS | Amazon Route 53 |

### . Application Components

**Frontend**

Provides the user interface for submitting and viewing records. Built with HTML, CSS and Vanilla JavaScript.

**Backend**

A Python Flask application exposing REST API endpoints:

- `POST /api/records` – Creates a new record.
- `GET /api/records` – Retrieves saved records.

**Database**

MySQL stores application records in the `records` table.




### . Planned AWS Deployment

The application will be deployed using the following components:

- Amazon VPC with public and private subnets.
- Frontend and backend EC2 instances.
- Internet-facing Application Load Balancer.
- Internal Application Load Balancer.
- Amazon RDS for MySQL.
- AWS Certificate Manager.
- Amazon Route 53.

### . Implementation Progress

| Phase | Description | Status |
|---|---|---|
| 1 | Application Development | Completed locally |
| 2 | IAM USER ADMIN CREATION |
| 3 | VPC and Networking | Pending |
| 4 | Security Configuration | Pending |
| 5 | EC2 Deployment | Pending |
| 6 | RDS Deployment | Pending |
| 7 | Load Balancing | Pending |
| 8 | HTTPS and DNS | Pending |
| 9 | Integration and Testing | Pending |

### . Deployment Evidence

Screenshots, configuration details, architecture diagrams and test results will be added as each implementation phase is completed

###  . CREATING AN IAM USER AND ASSIGNING PRIVILEGES

 An IAM user in AWS is an entity you create to securely control access to your AWS resources, with its own credentials and permissions.

Navigate to AIM > users>create user

<img width="2513" height="924" alt="AdobeExpressPhotos_c1afc46a374f4176b1fd9475c6c2ea4c_CopyEdited" src="https://github.com/user-attachments/assets/2a8a25c0-cfe5-41b0-9c26-ed2e22c9aae0" />

<img width="2526" height="934" alt="AdobeExpressPhotos_f8756325ca6d43ab914ff90e1d582544_CopyEdited" src="https://github.com/user-attachments/assets/7ef6d230-ff35-4050-ab0d-3d47bbcf3c09" />


### . CREATING A VPC

A VPC (Virtual Private Cloud) is a securely isolated section of a cloud provider’s network where you can launch and manage resources like servers and databases within your own private virtual network. 

