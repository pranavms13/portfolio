import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Pranav.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Full Stack Developer [ Intern ]"
              date="Aug 2020 - Sep 2020"
              content={[
                "Worked as a front-end developer at Scholarly Science",
              ]}
            />
            <Resumecontent
              title="ML Developer [ Intern ]"
              date="Jul 2019 - Aug 2019"
              content={[
                "Worked on 2 project for Credit Card Fraud Detection and Chat Intent Identification",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Web Developer [ Volunteer ]"
              date="Jan 2020 - Mar 2020"
              content={[
                "Developed (https://bestbengalurusouth.in/) Bengaluru South Education Social Transformation website",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Computer Science Engineering [ KSIT, Bangalore ] "
              date="2018 - Present"
              content={[`CGPA: 7 (Till 6th Sem)`]}
            />
            <Resumecontent
              title="2nd PU [ MVJ Pre-University College, Bangalore ]"
              date="2016 - 2018"
              content={["Precentage: 72%"]}
            />
            <Resumecontent
              title="10TH CBSE BOARD [ JSS Public School, Bangalore ] "
              date="2006 - 2016"
              content={["Precentage: 70%"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                "Winner Of HackBout 2.0"
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
