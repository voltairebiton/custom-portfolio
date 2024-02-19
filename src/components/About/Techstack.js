import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiVu
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiDigitalocean,
  SiAmazonaws,
  SiPrometheus,
  SiGrafana,
  SiDocker,
  SiMysql,
  SiUbuntu,
  SiShell,
  SiAwslambda,
  SiBitbucket,
  SiGithub,
  SiJenkins
  
} from "react-icons/si";
import { TbBrandGolang, TbBrandNuxt, TbBrandTerraform   } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDigitalocean />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandTerraform />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPrometheus  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGrafana  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAwslambda />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUbuntu  />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBitbucket />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandNuxt />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;
