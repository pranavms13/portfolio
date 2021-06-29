import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import QRCode from "qrcode.react";

class Sponsor extends React.Component {
  constructor(props){
    super(props)
    this.upistring = "upi://pay?pa=pranavms@fbl&pn=Pranav&cu=INR";
    this.pay = this.pay.bind(this);
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
  pay(){
    console.log(this.upistring)
    if(this.isMobile()){
      window.location.replace(this.upistring)
    }
  }
  render() {
    return (
          <Container className="home-content" style={{textAlign: 'center', height: '95vh'}}>
            <h1 className="project-heading">
              Buy me a <strong className="purple">Coffee</strong> <span className="wave">☕</span>
            </h1>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <Col md={3} className="home-header">
                <QRCode value={this.upistring} fgColor="#c770f0" bgColor="rgba(255,0,0,0.0)" renderAs="svg" size={256} level="H" onClick={() => {this.pay()}}/>
              </Col>
            </Row>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
              <h3 className="project-heading" onClick={() => {this.pay()}}>
                pranavms@<strong className="purple"><span className="wave">fdl</span></strong>
              </h3>
              
            </Row>
            {this.isMobile() ?
              <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <small onClick={() => {this.pay()}}>Click to Pay</small>
              </Row>
              : ""
            }
          </Container>
    );
  }
}

export default Sponsor;
