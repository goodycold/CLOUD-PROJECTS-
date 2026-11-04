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

REGION: EUROPE(STOCKHOLM)

VPC NAME : PROJECT-SPIRIT

Availability zone:

Availability Zones are distinct, physically separated data centers within a cloud region that provide redundancy and high availability by ensuring your applications remain operational even if one zone fails. For this project, two availability zones would be required for fault tolerance and high availability.

AVAILABILITY ZONES : FIRST : eun1-az1 (eu-north-1a) SECOND : eun1-az2 (eu-north-1b)

### SUBNETS
A subnet (subnetwork) is a smaller, logical segment of a network within a VPC that helps organize and control how resources communicate with each other. 

2 PUBLIC FOR COMMUNICATING WITH THE INTERNET 
4 PRIVATE FOR isolating resources APP+ DATABASE from public access for enhanced security.

NAT GATEWAY : In a VPC, a NAT Gateway acts as a bridge that lets private subnet resources like databases initiate outbound connections to the internet while keeping them unreachable from the public internet.



<img width="2522" height="935" alt="AdobeExpressPhotos_a587ba54f24c40f2a4ebba1a6a2f4f3c_CopyEdited" src="https://github.com/user-attachments/assets/26b6bc88-fa09-49f0-96cd-7429b6189657" />


<img width="2543" height="933" alt="AdobeExpressPhotos_f21b029aace743a2b37fdddbe8c681ba_CopyEdited" src="https://github.com/user-attachments/assets/10c33f26-0847-4059-a7d0-5e07077b9c68" />


<img width="2524" height="928" alt="AdobeExpressPhotos_cceac0fcba9242959e477ce9baea6fd4_CopyEdited" src="https://github.com/user-attachments/assets/f7cdd99b-e309-4831-b4f8-b8873cd9b9bd" />


VPC SUCCESSFULLY CREATED

<img width="2531" height="921" alt="AdobeExpressPhotos_1a5b8659a3e8405289a981d1d4e5f30e_CopyEdited" src="https://github.com/user-attachments/assets/ee97baaa-8476-40b7-9eb1-a1cf21637dc4" />



### . CREATING AN S3 BUCKET

An S3 bucket is a cloud storage container in AWS used to store, organize, and manage data such as files, images, and backups securely.

<img width="2535" height="939" alt="AdobeExpressPhotos_df8145b6b2f84f19868a090e5ebb0042_CopyEdited" src="https://github.com/user-attachments/assets/44be9e1b-750c-4c78-be17-547c10a2e0f1" />


<img width="2513" height="931" alt="AdobeExpressPhotos_845ad36272fd4e6292b57a8b30506db3_CopyEdited" src="https://github.com/user-attachments/assets/c7ff4a10-909d-423d-860e-6297435aa7b9" />

<img width="2518" height="928" alt="AdobeExpressPhotos_985039269ebe4d6cb98104f79cd3d400_CopyEdited" src="https://github.com/user-attachments/assets/b26512c4-9d74-4687-81e3-686d5134caef" />

<img width="2519" height="931" alt="AdobeExpressPhotos_7e4f86674ac342e79a0ead96394a9480_CopyEdited" src="https://github.com/user-attachments/assets/3085cf43-866e-4159-bc89-ac5bfb0b19b0" />
