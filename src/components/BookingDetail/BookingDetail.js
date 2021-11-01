import React, { useState } from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../hooks/useAuth';
import useData from '../../hooks/useData';
import './BookingDetail.css';

const BookingDetail = props => {
  const { user } = useAuth();
  const history = useHistory();

  console.log(props.show);
  const { _id, name, img, description, price, availableTime, makingTime, shopName } = props.show;
  const newUser = { name, img, description, price };
  newUser.userNameWhoOrdered = user.displayName;
  newUser.email = user.email;
  newUser.userid = user.uid;
  newUser.orderStatus = 'pending';
  console.log(newUser);

  // const [services] = useData();
  // const [order, setOrder] = useState([]);

  const Booked = () => {
    fetch('https://young-springs-85818.herokuapp.com/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert('successfully added the user');
          history.push('/');
        }
      });
  };
  return (
    <div>
      <div>
        <Col className="mx-auto my-5 py-5">
          <Card
            className="resPaddN"
            style={{
              fontSize: 'larger',
              width: '350px',
              height: '850px',
              backgroundColor: '#A3CFF9',
            }}
          >
            <Card.Img style={{ height: '300px' }} variant="top" src={img} />
            <Card.Body>
              <Card.Title className="bg-white">{name}</Card.Title>
              <Card.Text style={{ color: 'goldenrod', fontWeight: 'bold', width: '300px' }}>
                {description}
              </Card.Text>
              <Card.Title>{price}BDT </Card.Title>
              <Card.Title>Available: {availableTime}</Card.Title>
              <Card.Title>Making Time: {makingTime}Min.</Card.Title>
              <Card.Title>Shop Name: {shopName}</Card.Title>
              {/* <Card.Text className="fw-bold fs-5">Location: {location}</Card.Text>
                            <Card.Text>Batch: {batch}</Card.Text>
                            <Card.Text style={{ width: '330px', height: '140px', }}>
                                {studyBackground}
                            </Card.Text> */}
              <Button onClick={Booked} variant="primary">
                Booking
              </Button>{' '}
            </Card.Body>
          </Card>
        </Col>
      </div>
    </div>
  );
};

export default BookingDetail;
