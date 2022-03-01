import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = props => {
  const { service } = props;
  const { _id, name, price, description, img } = service;
  return (
    <div className="col-md-4 col-sm-6 d-flex justify-content-center fon">
      <div
        className="border-primary heg p-1 btn-custom text-center shadow"
        style={{
          height: '550px',
          width: '310px',
          marginBottom: '40px',
          borderRadius: '10px',
          backgroundColor: '#fff',
          position: 'relative',
        }}
      >
        {/* all details information */}
        <div className="inner">
          <img
            style={{ borderRadius: '10px', width: '400px', height: '200px', opacity: '1' }}
            className="img-fluid"
            src={img}
            alt=""
          />
        </div>
        <h5 className="mt-3 border border-top-3">Name: {name}</h5>
        <p>Discovered: {_id}</p>
        <p>{description}</p>
        {/* <p>Learning Level: {topInnovation}</p> */}
        <h4
          style={{
            height: '10px',
            position: 'absolute',
            bottom: '12px',
            left: '96px',
            margin: '0',
            padding: '0',
          }}
          className="mb-5 ress"
        >
          Price: {price}Tk
        </h4>
        <div
          className="hovs d-flex justify-content-center my-auto btn-position"
          style={{ borderRadius: '4px' }}
        >
          <Link className="hovs" to={`/booking/${_id}`}>
            <Button
              className="hovs"
              style={{ backgroundColor: 'rgb(255, 115, 0)', color: 'white', border: 'none' }}
              variant="primary"
            >
              Order Details
            </Button>{' '}
          </Link>
        </div>
      </div>
    </div>
    /* <Col >
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
            </Col> */
  );
};

export default Service;
