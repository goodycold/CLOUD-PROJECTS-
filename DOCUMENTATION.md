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
| 1 | IAM USER ADMIN CREATION |
| 2 | Application Development | Completed locally |
| 3 | VPC and Networking | Pending |
| 4 | Security Configuration | Pending |
| 5 | EC2 Deployment | Pending |
| 6 | RDS Deployment | Pending |
| 7 | Load Balancing | Pending |
| 8 | HTTPS and DNS | Pending |
| 9 | Integration and Testing | Pending |

### . Deployment Evidence

Screenshots, configuration details, architecture diagrams and test results will be added as each implementation phase is completed



