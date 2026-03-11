📝 Project Documentation: Simple Dockerized API
1. Project Overview
A Node.js Express API containerized with Docker, automated via GitHub Actions (CI/CD), and deployed live on Railway. [3, 4]
2. Tech Stack
Backend: Node.js / Express [5]
Containerization: Docker [6]
CI/CD: GitHub Actions [7]
Registry: Docker Hub [8]
Hosting: Railway.app [9]
3. How the Pipeline Works (CI/CD)
Push to GitHub: Code is pushed to the main branch. [10]
GitHub Action: Automatically builds a Docker image using the Dockerfile. [11]
Docker Hub: The image is pushed to fathiyya71/my-express-api:latest. [12]
Railway Deployment: Railway detects the new image on Docker Hub, pulls it, and redeploys the API. [13, 14]
4. Critical Fixes Log (Lessons Learned)
Port Binding: Changed app.listen(PORT) to app.listen(PORT, '0.0.0.0') so the cloud network could find the container. [15]
Network Config: Fixed Railway's Service Port to match the EXPOSE 3000 in the Dockerfile. [16]
Syntax: Fixed broken strings in server.js that caused "Crashed" status on startup. [17]
Workflow Cleanup: Removed duplicate .yml files to prevent conflicting build processes. [18]
How to add this to your project:
In your code editor, create a new file named README.md. [19]
Paste the text above into it. [20]
Push it to GitHub:
powershell
git add README.md
git commit -m "docs: add project documentation"
git push origin main
