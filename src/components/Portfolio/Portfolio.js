import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap';
import './Portfolio.css';
import Movie from '../../assets/popcorn.jpg';
import Day from '../../assets/day planner.png';
import Weather from '../../assets/weatherapp.jpg';

const Portfolio = () => {
    return (
        <Container className="recentProjects">
            <Row>
                <h2 className="recentProjects">My Recent Projects.....!</h2>
            </Row>
            <Row>
                <Col sm={4}>
                    <h4 className="recentProjects">Trailor-Sailor</h4>
                    <a href="https://benjaminlee-boop.github.io/Trailer-Sailor/" target="_blank"> <Image className="portfolioImage" src={Movie}></Image></a>
                </Col>
                <Col sm={4}></Col>
                <Col sm={4}></Col>
            </Row>
            <Row>
                <Col sm={4}></Col>
                <Col sm={4}>
                <h4 className="recentProjects">The WorkDay Scheduler</h4>
                    <a href="https://netsy001.github.io/Theworkdayscheduler/" target="_blank"><Image className="portfolioImage" src={Day}></Image></a>
                </Col>
                <Col sm={4}></Col>
                </Row>
                <Row>
                <Col sm={4}></Col>
                <Col sm={4}></Col>
                    <Col sm={4}>
                    <h4 className="recentProjects">Weather-Dashboard</h4>
                        <a href="https://netsy001.github.io/Weather-Dashboard/" target="_blank"><Image className="portfolioImage" src={Weather}></Image></a>
                    </Col>
                </Row>

        </Container >
    )
}

export default Portfolio
