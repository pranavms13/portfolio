import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import BlogCard from "./BlogsCards";
import Particle from "../Particle";

import evac from "../../Assets/Projects/evac_logo.png";

import nn_advanced from "../../Assets/courses/nn-advance.jpeg";
import reactcert from "../../Assets/courses/react.jpg";
import jsbasic from "../../Assets/courses/js-basic.png";
import cbasic from "../../Assets/courses/c-basic.png";
import cintermediate from "../../Assets/courses/c-intermediate.png";
import cadvanced from "../../Assets/courses/c-advanced.png";
import pybasic from "../../Assets/courses/python-basic.png";
import nn_basic from "../../Assets/courses/nn-basic.jpeg";
import mtacert from "../../Assets/courses/MTA.jpg";
import bcessentials from "../../Assets/courses/bcessentials.PNG";
import cppsolo from "../../Assets/courses/cppsolo.jpg";
import python_bc from "../../Assets/courses/python.jpg";
import frontend_cert from "../../Assets/courses/frontend.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://recoal.github.io/assets/img/logo/recl_tg.png"
              isCourse={false}
              title="ReCoal"
              description="ReCoal is a private, secure, untraceable, decentralised digital
              currency upgrade for BitCoal which gives absolute control
              over funds to the user, with the option for complete privacy
              with traceless transactions thus allowing censorship resistant
              access to services and data across the world."
              link="https://github.com/recoal/recoal"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png"
              isCourse={false}
              title="Whatsapp Bot API"
              description="Developing a NodeJS Bot for WhatsApp. Open Sourced at Github."
              link="https://github.com/pranavms13/whatsapp-node-api"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={evac}
              isCourse={false}
              title="EVAC Video Meeting"
              description="EVAC is a WebRTC JavaScript based peer-to-peer application with features like screen sharing, audio/video conferencing, file sharing, media streaming etc."
              link="https://evac.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://static.thenounproject.com/png/1892412-200.png"
              isCourse={false}
              title="Facial Training and Recognition"
              description="Simple Python Code for Facial Training and Recognition using OpenCV. Open Sourced at Github."
              link="https://github.com/pranavms13/facial-training-and-recognition"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://assets.devfolio.co/hackathons/989af9cc2fda4361913b70a67a6e5b17/projects/2c0c421c7a014677b2dbbc974ad19b1c/1d9a65c3-68a6-43fc-bc31-ab93e7a49211.png"
              isCourse={false}
              title="FundN'GO"
              description="A secure funding platform for the donors to ensure that all of their money reaches the right cause.
              Blockchain has consistently proven its potential to disrupt and bring about a positive change in streamlining complex processes.
              Blockchain resolves issues with the features such as Transparency, Immutability, Speed, Security, and Trust."
              link="https://devfolio.co/submissions/fundngo-5f89"
            />
          </Col>

        </Row>

        <h1 className="project-heading">
          My <strong className="purple">Courses </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some <span className="purple">courses</span> i took up.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nn_advanced}
              isCourse={true}
              title="Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization"
              description=""
              link="https://www.coursera.org/verify/LZK5MUSQTANZ"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reactcert}
              isCourse={true}
              title="The Complete React Developer Course (w/ Hooks and Redux)"
              description=""
              link="https://www.udemy.com/certificate/UC-b54a332c-986b-46b9-b797-932e8fdaa568/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jsbasic}
              isCourse={true}
              title="Javascript (Basic)"
              description=""
              link="https://www.hackerrank.com/certificates/1def19f36b81"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cbasic}
              isCourse={true}
              title="C (Basic)"
              description=""
              link="https://www.hackerrank.com/certificates/6d080865b51a"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cintermediate}
              isCourse={true}
              title="C (Intermediate)"
              description=""
              link="https://www.hackerrank.com/certificates/fc4c38d31d24"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cadvanced}
              isCourse={true}
              title="C (Advanced)"
              description=""
              link="https://www.hackerrank.com/certificates/d6014e861f94"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pybasic}
              isCourse={true}
              title="Python (Basic)"
              description=""
              link="https://www.hackerrank.com/certificates/2360ed8b4e6d"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nn_basic}
              isCourse={true}
              title="Neural Networks and Deep Learning"
              description=""
              link="https://www.coursera.org/verify/APDTKG39P6FL"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mtacert}
              isCourse={true}
              title="Microsoft Technology Associate - Python Programming"
              description=""
              link="https://portal.certiport.com/Portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=395&cvid=p1xsySM2JntkeZ42Zi4EEA=="
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bcessentials}
              isCourse={true}
              title="Blockchain Essentials"
              description=""
              link="https://courses.cognitiveclass.ai/certificates/613371c6b10e4243bb18f15ba885ccbe"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cppsolo}
              isCourse={true}
              title="C++ Course"
              description=""
              link="https://www.sololearn.com/Certificate/1051-16465583/jpg/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={python_bc}
              isCourse={true}
              title="Python - The Practical Guide"
              description=""
              link="https://ude.my/UC-HBKHNW96/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={frontend_cert}
              isCourse={true}
              title="Front-End Web UI Frameworks and Tools: Bootstrap 4"
              description=""
              link="https://www.coursera.org/verify/J699W4LJ3VG9"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
