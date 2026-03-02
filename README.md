# AWS Cloud Resume Project

Resume: https://www.stephanosant.com/cloudresume

Back-End Repo: https://github.com/stephanosant97/CloudChallenge-Terraform-Backend

![Screenshot 2024-03-04 101845](https://github.com/stephanosant97/CloudChallenge-CICD-Frontend/assets/135358869/6f139bdc-a44a-4975-bd87-bf3967b672a8)


This repository is my front-end AWS infrastructure implemented with CI/CD using Github Actions for the Cloud Resume Challenge, inspired by Forrest Brazeal. I've completed this challenge using AWS cloud services. You can find the detailed steps for the challenge on Forrest's website. Additionally, I'll be sharing my experience and insights in a blog post, which I'll link here once it's ready.

## Technologies Utilized

AWS: S3, Route53, Certificate Manager, CloudFront, API Gateway, Lambda, DynamoDB

Infrastructure as Code: Terraform, GitHub Actions

Programming Languages: Python (Boto3), HTML, CSS, JavaScript

## Project Highlights
● Automated the backend and frontend infrastructure creation using Terraform to streamline AWS resource configuration.

● Styled HTML resume using CSS with a Bootstrap framework for a polished appearance.

● Deployed HTML resume as an Amazon S3 static website with HTTPS security via Amazon CloudFront.

● Integrated a visitor counter using JavaScript, storing data in Amazon DynamoDB.

● Built an API with AWS API Gateway and Lambda services to interact with DynamoDB.

● Utilized Python Boto3 and Lambda for DynamoDB automation and integration with API Gateway.

## Future Plans

Blog post on the Cloud Resume Challenge journey:
https://www.linkedin.com/pulse/my-experience-converting-cloud-resume-challenge-iac-using-santos-jgdye/

For official instructions and guidelines, visit the Cloud Resume Challenge Official Website.

---

## Redesign — February 2026

Fully redesigned the frontend with a custom "Aurora Dark" theme:

- Replaced static HTML/CSS with a SvelteKit component architecture
- Replaced video background with animated CSS gradient blobs (orange, purple, blue) on a dark background
- Consolidated navigation into a shared layout with a responsive mobile hamburger menu
- Redesigned all pages (Home, About, Projects, Cloud Resume) with consistent typography, fade-in animations, and glassmorphism-inspired styling
- Added full resume content: experience, certifications, skills, and education
- Updated CI/CD pipeline (GitHub Actions) to include Node.js install and SvelteKit build step before S3 sync

**Stack update:** SvelteKit + Tailwind CSS + Flowbite Svelte

---

## Update — March 2026

Further design and content updates:

- **Typography overhaul** — replaced Poppins/Open Sans with a distinctive three-font system: Fraunces (serif display), Space Mono (monospace labels/nav), Outfit (body text)
- **Constellation background** — replaced static grid overlay with a live canvas animation: 85 drifting nodes with dynamic connecting lines and pulsing orange "hot" nodes, layered above the aurora blobs
- **Custom cursor** — replaced OS cursor with a glowing orange dot + lagging ring that expands on hover over interactive elements
- **Scroll-aware navbar** — nav gains glassmorphism (backdrop-blur) after scrolling 40px
- **Content updated for Cyber Analyst focus** — about page and resume rewritten to reflect security operations experience (SentinelOne EDR, Microsoft Defender, ProofPoint, KnowBe4, PowerShell automation)
- **Skills updated** — removed Terraform, added PowerShell, Active Directory, Microsoft Defender, SentinelOne EDR, Azure, Linux
- **Fontainebleau responsibilities** updated with current security-focused duties

---

## AWS Honeypot Project — March 2026

Added a live honeypot project showcase and real-time attack dashboard:

- **`/honeypot`** — Project overview page covering architecture (EC2 → Cowrie → Lambda → DynamoDB → API Gateway), capture categories (SSH brute-force, port scans, shell commands, malware downloads), and tech stack
- **`/honeypot/dashboard`** — Live attack dashboard powered by real Cowrie honeypot data on AWS EC2:
  - **D3 world map** — canvas-rendered base map (geoNaturalEarth1 projection) with an SVG overlay showing attack origin dots sized by hit count, a pulsing green honeypot target (Ohio / us-east-2), and CSS ping-ring animations on new attacks
  - **Stat overlay** — Total Attacks, Unique IPs, Countries, and Top Password displayed as a HUD strip above the map
  - **Live attack feed** — scrollable event log showing timestamp, source IP, country, event type, credentials tried, and shell commands executed
  - **Top tables** — Top attacking IPs, most-tried passwords, most-tried usernames, and top source countries
  - Auto-refreshes every 30 seconds via AWS API Gateway + Lambda + DynamoDB backend

**Stack:** AWS EC2, Cowrie, AWS Lambda, API Gateway, DynamoDB, Python, SvelteKit, d3-geo, topojson-client
