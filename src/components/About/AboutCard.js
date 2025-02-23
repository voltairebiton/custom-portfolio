import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Voltaire John Biton </span>
            from <span className="purple"> Iloilo, Philippines.</span>
            <br />
            I am currently employed as a DevOps Engineer at Nathan Digital, Dubai UAE.
            <br />
            I have completed Bachelor of Science in Information Technology and currently preparing for AWS Certified DevOps Engineer Certification
            <br />
            <br />
            Apart from DevOps and Coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Tinkering with Arduino and IOT
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Anime
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Manga
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Voltaire</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
