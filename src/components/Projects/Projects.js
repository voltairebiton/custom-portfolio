import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import devops from "../../Assets/Projects/devops.png";
import shutdown from "../../Assets/Projects/cost-optimization.webp";
import apm from "../../Assets/Projects/apm.png";
import backup from "../../Assets/Projects/db-backup.png";
import ticket from "../../Assets/Projects/devops-ticketing.png";
import cloudfront from "../../Assets/Projects/cloudfront-and-websites.jpg";
import cms from "../../Assets/Projects/cms.png";
import jane from "../../Assets/Projects/jane.png";
import df from "../../Assets/Projects/df.png";

import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few modules and projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={devops }
              isBlog={false}
              title="Devops Central"
              description="A portal to manage devops related services such as provisioning servers, managing resource access such as database, repository etc., server and application monitoring using prometheus, a customized VPN using wireguard as an entrypoint to gain access to private resources and many more. It was a very ambitious project built in microservice architecture and it took nearly 6 months to finish with 3 people working on it. I designed the VPC architecture of the project and was the project lead and did most of the development using node.js, lambda, sqs, kafka, shellscripting with some terraforming and ansible scripts. With this project, we were able to monitor cost incurred by a certain client and track user access of any team member to each project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shutdown}
              isBlog={false}
              title="Server Rotational Shutdown"
              description="A small project with the goal of reducing cost by turning off EC2 instances in Dev, Staging and UAT environment during off peak hours around 9pm to 6am and should allow designated team members to start the server at any moment of time if resource is needed. Tools that were used were lambda, amazon event bridge, Application Load Balancer, a few pipeline changes and some development. The project has saved nearly 4000$ of cost to the company."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apm}
              isBlog={false}
              title="Application Performance Monitoring (APM)"
              description="Using Prometheus, Grafana and Loki, and a bit of go programming, i created an APM which will monitor servers and applications under the company. The alert system was also configured to be smart as it will not only alert the designated team member of the status of the server or application, but it will also notify the team of some irregular activity happening such as high volume of database or http calls on the system than normal. The project also displays application logs like number of http calls, database calls and total cron jobs executed and its durations"
              ghLink="https://github.com/voltairebiton/Editor.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cloudfront}
              isBlog={false}
              title="CloudFront and Websites"
              description="With the goal of reducing cost,  I led a project where I assisted the Design Team to convert 11 websites into SPA and thereafter deploy these applications in s3 and fronted them with CloudFront. In this way, the company saved 500$ of monthly cost and improved the speed of the applications"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ticket}
              isBlog={false}
              title="DevOps Ticketing System"
              description="A portal to manage tickets for the internal Devops Team. It uses microservice architecture separating authentication, notifications, logs on a separate service. The project was built using node.js v20 and docker."
              ghLink="https://github.com/voltairebiton/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={backup}
              isBlog={false}
              title="MongoDB Atlas Scheduled Backup"
              description="A serverless application that runs and stores a backup of all database in the mongodb atlas every 4 hours for production. Application was built using lambda with node.js, mongodb atlas api, event bridge and S3."
              ghLink="https://github.com/voltairebiton/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={df}
              isBlog={false}
              title="Dynamic Freelancer"
              description="A freelancing platform based in UAE wherein it will assist a freelancer during the onboarding process such as visa processing, and once onboarded will be able to leverage useful features such as client invoicing and many more. It was written in node 16, nuxt 3 and Flutter 3.0 for Mobile Application. The portal currently has 5000 users and logs on average 10 database activity every second making it the most highly utilized project I ever had in my career."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jane}
              isBlog={false}
              title="Jane - Facility Management"
              description="An application that offers multiple services such as Visitor, Agent, Hospitality, Meeting Room and Inventory Management. Project was single handedly coded by yours truly. The application is written in node.js 12, nuxt 2 and Flutter for mobile application."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cms}
              isBlog={false}
              title="Content Management System"
              description="A project built for websites. The goal is to easily update the content of a certain website without any Developer help. The project will have a separate admin panel and from there, a user can select which website to open and update each and every content such as home page, blogs, services etc. The service has accomodated 6 out of 11 website of the company. Project was built in node 12 and nuxt 2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cms}
              isBlog={false}
              title="HR Direct"
              description="An HRMS application that manages leaves, letters, attendance, claims, and many other hr related processes. I am involve in the mobile and api side using Flutter 2+ and Node v.14"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
