import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './MyOrders.css';

const MyOrders = () => {
  const { user } = useAuth();
  const uid = user.uid;
  console.log(uid);
  const [myOrder, setMyOrder] = useState([]);

  useEffect(() => {
    const url = `https://young-springs-85818.herokuapp.com/orders/${uid}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setMyOrder(data);
        console.log(myOrder);
      });
  }, []);

  const handleDeleteUser = id => {
    const proceed = window.confirm('Are you sure, you want to delete?');
    console.log(id);
    if (proceed) {
      const url = `https://young-springs-85818.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: 'DELETE',
      }).then(res =>
        res.json().then(data => {
          if (data.deletedCount > 0) {
            alert('deleted successfully');
          }
          const remainingUsers = myOrder.filter(order => order._id !== id);
          setMyOrder(remainingUsers);
        })
      );
    }
  };

  return (
    <div className="pt-4 bt-4 mt-4 fw-bolder">
      <h2 className="pt-4 bt-4 mt-4">Manage Order</h2>

      <div className='row container' style={{width:'100% !important',padding:'0',margin:'0 auto'}}>
        <div className='col-md-12'>
        <table className="table table-responsive-sm mx-auto ">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Order Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        {myOrder.map(order => (
          <tbody key={order._id}>
            <tr className="table-primary">
              <td>{order.name}</td>
              <td>{order.price}</td>
              <td>{order.orderStatus}</td>
              <td>
                {' '}
                <button className="m-3 bg-warning" onClick={() => handleDeleteUser(order._id)}>
                  {' '}
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;

