import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import { SiTensorflow, SiFirebase, SiJavascript, SiCplusplus } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus />
        <div className="purple" style={{fontSize: '25px'}}>C++</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript />
        <div className="purple" style={{fontSize: '25px'}}>Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <div className="purple" style={{fontSize: '25px'}}>Node.JS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <div className="purple" style={{fontSize: '25px'}}>React.JS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <div className="purple" style={{fontSize: '25px'}}>MongoDB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <div className="purple" style={{fontSize: '25px'}}>Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
        <div className="purple" style={{fontSize: '25px'}}>Tensorflow</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <div className="purple" style={{fontSize: '25px'}}>Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <div className="purple" style={{fontSize: '25px' }}>Firebase</div>
      </Col>
    </Row>
  );
}

export default Techstack;
