import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';


const Service = (props) => {
    const { service } = props;
    const { _id, name, price, description, img } = service;
    return (
        <div className="resPadd" >
            <Col >
                <Card style={{ fontSize: 'larger', width: '350px', height: '720px', margin: '20px' }}>
                    <Card.Img style={{ height: '300px',opacity:'100' }} variant="top" src={img}  />
                    <Card.Body>
                        <Card.Title className="bg-secondary text-white">{name}</Card.Title>
                        <Card.Text style={{ color: 'lightblack', fontWeight: 'bold', height: '250px' }} >{description}</Card.Text>
                        <Card.Text style={{ width: '330px' }}>
                            Price: {price}BDT
                        </Card.Text>
                        <Link to={`/booking/${_id}`}><Button variant="primary">Order Details</Button>{' '}</Link>
                    </Card.Body>
                </Card>
            </Col>
        </div >

    );
};

export default Service;