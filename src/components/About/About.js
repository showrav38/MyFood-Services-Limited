import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
  return (
    <div id="about" className="p-5 fon">
      <Container className="p-3">
        <Row>
          <Col className="wee" xs={12} md={6}>
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
            <div className='textPs textPP'>
              <h3 style={{ color: 'rgb(247, 109, 11)', fontSize: '33px' }}>Our Goal</h3>
              <p style={{ lineHeight: '28px' }}>
                Interested in working with us? Occasionally we create sponsored posts for brands
                that are a good fit for I am a Food Blog. We’re also available for recipe
                development & photography. Interested in working with us? Occasionally we create
                sponsored posts for brands that are a good fit for I am a Food Blog. We’re also
                available for recipe development & photography.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
