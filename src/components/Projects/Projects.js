import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import BlogCard from "./BlogsCards";
import Particle from "../Particle";

import evac from "../../Assets/Projects/evac_logo.png";


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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://assets.devfolio.co/hackathons/c9ec4910652e474b87915718343b68e6/projects/d950106c73c04eb6a9fb19bc363647ba/2da22733-af80-4a56-a2d1-5a313be78b73.png"
              isCourse={false}
              title="DeBuilds"
              description="A Decentralized Software Marketplace for devs/users to sell or buy software with NFT License."
              link="https://devfolio.co/submissions/debuilds-e369"
            />
          </Col>  
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
