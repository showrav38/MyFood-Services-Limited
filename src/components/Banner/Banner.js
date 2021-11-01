import React from 'react';
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css';


const Banner = () => {
    return (
        <div>
            <Card className="backColor p-5 bt-4 mt-4">
                <Container className="p-3 ">
                    <Row>
                        <Col xs={12} md={5} className="pt-5 mb-2">
                            <h1 className="textColor">Welcome to Food Delivery Service Platform</h1>
                            <Button variant="danger"><Link style={{ margin: '10px', textDecoration: 'none', color: 'white' }} to="/"> Overall Sevices</Link></Button>{' '}
                        </Col>
                        <Col xs={12} md={7}>
                            <Carousel variant="dark">
                                <Carousel.Item>
                                    <img
                                        style={{ height: '400px', width: '550px' }}
                                        className="d-block w-100"
                                        src="https://i.pinimg.com/736x/c1/ac/f9/c1acf99f8904aec19d0e6b64522c14e6.jpg"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption >
                                        <h5 className="fw-bold" style={{ color: 'black' }}>Quality Care</h5>
                                        <p>
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        style={{ height: '400px', width: '550px' }}
                                        className="d-block w-100"
                                        src="https://www.odtap.com/wp-content/uploads/2018/10/food-delivery.jpg"
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                        <h5 className="fw-bold" style={{ color: 'black' }}>Quality Care</h5>
                                        <p>
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        style={{ height: '400px', width: '550px' }}
                                        className="d-block w-100"
                                        src="https://thumbs.dreamstime.com/b/people-eating-lunchboxes-grey-table-top-view-healthy-food-delivery-161242402.jpg"
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h5 style={{ color: 'black' }}>Quality Care</h5>
                                        <p>
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </Card>
        </div>

    );
};

export default Banner;