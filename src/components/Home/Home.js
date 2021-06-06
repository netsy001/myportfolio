import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import Resume from '../../assets/Resume.PDF';
import Photo from '../../assets/Photo.jpg';
import './Home.css';

const Home = () => {
    return (

        <Container className="info">
            <Row>
                <Col sm={4}>
                    <Image src={Photo} responsive style={{ height: "550px", width: "400px" }} roundedCircle className="img-responsive center-block" />
                </Col>
                <Col className="info" sm={6}>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                        Enthusiastic Full stack Developer eager to contribute
                        to team success through smart work, attention to detail and
                        excellent organizational skills. 
                        <br></br>Clear understanding of tasks
                        and training in programming. Motivated to learn, grow and
                        excel in the industry.
            <br></br>
                        <p class="Resume">For more information, please check out my <a href={Resume}>Resume</a></p>
                    
                </Col>
            </Row>
        </Container>

    )
}

export default Home
