METHOD 1 — Deploy Flask + Express on a Single EC2 Instance (Without Docker)
This is the simplest approach where both applications run on one EC2 machine.
Steps:
Launch a single EC2 instance (Amazon Linux / Ubuntu).
Install Python, Flask, Node.js, and Express on the same instance.
Create folders for backend and frontend inside the EC2 machine.
Start the Flask backend on port 5000.
Start the Express frontend on port 3000.
Update Security Group to allow inbound traffic on ports 5000 and 3000.
Frontend sends form data to the backend using the backend’s EC2 public IP.
Both applications run together on one instance using the instance’s public IP.

METHOD 2 — Deploy Flask + Express on Two Separate EC2 Instances
Here backend and frontend run on two different EC2 servers.
Steps:
Launch two EC2 instances: one for Flask backend, one for Express frontend.
Configure the backend instance and install Python + Flask.
Configure the frontend instance and install Node.js + Express.
Run Flask backend on port 5000 in Backend EC2.
Run Express frontend on port 3000 in Frontend EC2.
Update Backend EC2’s Security Group to allow port 5000 from anywhere.
Update Frontend EC2’s Security Group to allow port 3000 from anywhere.

METHOD 3 — Dockerise Flask + Express and Deploy Using AWS ECR + ECS Fargate
This is the cloud-native, container-based approach.
Steps:
Create two ECR repositories: one for the backend and one for the frontend.
Build Docker images locally for Flask and Express.
Push both images to their respective ECR repositories.
Create an ECS Cluster using the Fargate launch type under the default VPC.
Create Fargate Task Definitions for backend and frontend with proper container ports.
Create Backend Service (Fargate) with public subnet and public IP enabled.
Create Frontend Service (Fargate) without a load balancer and with public IP enabled.
Update frontend code to call the backend using the Backend Task’s public IP.
Rebuild and push updated frontend image to ECR if changes were made.
Perform “Force New Deployment” in ECS to pull the latest image.
Final deployment:
Backend runs on its own public IP (port 5000).
Frontend runs on its own public IP (port 3000).
Frontend successfully sends data to the backend.

Author: Mosharib Ahmad Hashmi
Solutions Architect|DevOps Specialist
+91 7349089231
Linkedin: https://www.linkedin.com/in/hashmi98

Update frontend code to call backend using Backend EC2 public IP.

Test the form — data flows from frontend EC2 → backend EC2 successfully.
