import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/volt-modified.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A QUICK INSIGHT INTO <span className="purple"> WHO I AM </span>
            </h1>
            <p className="home-about-body">
              I am your two-way Engineer, masterful in 
              <i>
                <b className="purple"> Software Development and Devops </b>
              </i>
              <br />
              <br />I dwell in the realm of 
              <i>
                <b className="purple"> AWS </b>
              </i>
               and possess proficiency in 
              <i>
                <b className="purple"> JavaScript, Go, and C# </b>
              </i>
              <br />
              <br />
              I specialize in constructing &nbsp;
              <i>
                <b className="purple">efficient applications </b>
                and devising {" "}
                <b className="purple">
                architectural solutions for servers.
                </b>
              </i>
              <br />
              <br />
              I am an engineer with a conservative mindset, prioritizing
              <i>
                <b className="purple">
                  {" "}
                   cost optimization, performance efficiency, and robust security
                </b>
              </i>
              &nbsp;  in all aspects of my work.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" width={300} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/voltairebiton"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/voltaire-john-biton-545430132"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
