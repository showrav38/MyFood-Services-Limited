import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <div id="about" className="p-5 ">
      <Container className="p-3">
        <Row>
          <Col xs={12} md={6}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/7G-UpESNmnU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </Col>
          <Col xs={12} md={6}>
            <h2 className="text-C">Our Goal</h2>
            <p className="textP">
              Our goal is to provide sustainable and effective food delivery service by follwing
              these 3 targets are like appropriate access in the site for necessary food delivery
              services , assurance of quality workforce, services and acceptable cost to public
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
