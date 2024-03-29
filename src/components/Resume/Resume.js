import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
// import pdf from "../../Assets/Pranav.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href="/resume.pdf" target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Blockchain/Web3 Developer [ Intern ]"
              date="Jan 2022 - Jul 2022"
              content={[
                `Working as a Blockchain Developer at Avalor Investments. `,
              ]}
            />
            <Resumecontent
              title="Blockchain/Web3 Developer [ Intern ]"
              date="Aug 2021 - Oct 2021"
              content={[
                `Worked as a Blockchain Developer at BearTax. `,
              ]}
            />
            <Resumecontent
              title="Full Stack Developer [ Intern ]"
              date="Aug 2020 - Sep 2020"
              content={[
                "Worked as a front-end developer at Scholarly Science",
              ]}
            />
            <Resumecontent
              title="ML Developer [ Intern ]"
              date="Aug 2019 - Sep 2019"
              content={[
                "Worked on 2 projects - Credit Card Fraud Detection and Chat Intent Identification",
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
              content={[`CGPA: 7`]}
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
              date="Aug 2022"
              content={[
                "Winner Of Smart India Hackathon 2022 organised by AICTE India",
              ]}
            />
            <Resumecontent
              title=""
              date="Oct 2021"
              content={[
                "Winner Of Aadhaar Hackathon 2021 organised by UIDAI",
              ]}
            />
            <Resumecontent
              title=""
              date="Aug 2021"
              content={[
                "Winner Of ETHOdyssey organised by ETHIndia"
              ]}
            />
            <Resumecontent
              title=""
              date="July 2021"
              content={[
                "Winner Of HackBout 2.0 organised by NMIT"
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href="/resume.pdf" target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
