import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import QRCode from "qrcode.react";

class Sponsor extends React.Component {
  constructor(props){
    super(props)
    this.upistring = "upi://pay?pa=pranavms@fdl&pn=Pranav&cu=INR"
  }
  isMobile(){
    if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i) 
    || navigator.userAgent.match(/iPad/i) 
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)) {
      return true;
    } else {
      return false;
    }
  }
  componentDidMount(){
    if(this.isMobile()){
      window.location.replace(this.upistring)
      // window.open(this.upistring, "_blank")
    }
  }
  render() {
    return (
      <section>
        <Container fluid className="home-section" id="home" style={{height: '95vh'}}>
          <Particle />
          <Container className="home-content" style={{textAlign: 'center'}}>
            <h1 className="project-heading">
              Buy me a <strong className="purple">Coffee</strong> <span className="wave">☕</span>
            </h1>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <Col md={3} className="home-header">
                <QRCode value={this.upistring} fgColor="#c770f0" bgColor="rgba(255,0,0,0.0)" renderAs="svg" size={256} level="H"/>
              </Col>
            </Row>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <h3 className="project-heading">
                pranavms@<strong className="purple"><span className="wave">fdl</span></strong>
              </h3>
            </Row>
          </Container>
        </Container>
      </section>
    );
  }
}

export default Sponsor;
