import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";

import { withAlert } from "react-alert";

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading: false
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.alert = this.props.alert;
    }
    onSubmit(e){
        e.preventDefault();
        this.setState({loading: true})
        var name = e.target.elements.formName.value;
        var email = e.target.elements.formEmail.value;
        var subject = e.target.elements.formSubject.value;
        var message = e.target.elements.formMessage.value;

        var data ={ name, email, subject, message }

        axios.post('https://pranavmsml-bot-git-master-pranavms13.vercel.app/', data )
            .then(async (response) => {
                if(response.data.m==="success"){
                    this.setState({loading : false})
                    this.alert.success("Message Sent !");
                    window.location.reload()
                }else{
                    this.alert.error("Error : " + response.data.details)
                }
                console.log(response);
            }).catch((error) => {
                console.log(error);
                this.alert.error("Error : " + error)
            }
        );

       
    }
    render(){
        return(
            <Row id="contact" style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col
                    md={6}
                    style={{
                    justifyContent: "center",
                    paddingTop: "30px",
                    paddingBottom: "50px",
                    }}
                >
                    <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" className="purple" style={{ background: 'rgba(0,0,0,0.2)' , border: 'none'}}/>
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" className="purple" style={{ background: 'rgba(0,0,0,0.2)' , border: 'none' }}/>
                    </Form.Group>

                    <Form.Group controlId="formSubject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" placeholder="Enter Subject" className="purple" style={{ background: 'rgba(0,0,0,0.2)' , border: 'none'}}/>
                    </Form.Group>

                    <Form.Group controlId="formMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control rows={5} as="textarea" placeholder="Enter Message" className="purple" style={{ background: 'rgba(0,0,0,0.2)' , border: 'none'}}/>
                    </Form.Group>


                    <Button variant="primary" type="submit" disabled={this.state.loading}>
                        Submit
                    </Button>
                    </Form>
                </Col>
            </Row>
        );
    }
}
export default withAlert()(Contact);