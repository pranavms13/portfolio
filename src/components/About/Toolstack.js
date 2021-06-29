import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiJupyter,
  SiPostman,
  SiHeroku,
  SiSwagger
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <div className="purple" style={{fontSize: '25px'}}>Linux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div className="purple" style={{fontSize: '25px'}}>VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
        <div className="purple" style={{fontSize: '25px'}}>Jupyter</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <div className="purple" style={{fontSize: '25px'}}>Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <div className="purple" style={{fontSize: '25px'}}>Heroku</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSwagger />
        <div className="purple" style={{fontSize: '25px'}}>Swagger</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
