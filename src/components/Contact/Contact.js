import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Github from '../../assets/github.png';
import Linkedin from '../../assets/linkden.png';
import Gmail from '../../assets/gmail.png';
import Phone from '../../assets/phone.png';
import './Contact.css';

const Contact = () => {
    return (
        <Container classNmae ="contactPage">
            <br></br>
            <h2 class="contacts">Contact Me.....!</h2>
            <Row>
                <Col  sm={3}></Col>
                <Col  sm={3}>
                    <a href="https://github.com/netsy001" target="_blank"><Image className="contact" src={Github}></Image></a>
                </Col>
                </Row>

              <Row>
                <Col  sm={3}>
                    <a href="https://www.linkedin.com/in/surendranettam/" target="_blank"><Image className="contact" src={Linkedin}></Image></a>
                </Col>
                <Col  sm={3}></Col>
                <Col  sm={3}>
                    <a href="tel:0416195789" target="_blank"><Image className="contact" src={Phone}></Image></a>
                </Col>
            </Row >

<Row>
    <Col sm={3}></Col>
    <Col sm={3}><a href="mailto:nettamsurendra3@gmail.com" target="_blank"><Image className="contact" src={Gmail}></Image></a></Col>
</Row>


        </Container >

    )
}

export default Contact
