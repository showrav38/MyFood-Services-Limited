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
    <div className="pt-4 bt-4 mt-4 fw-bolder table-responsive">
      <h2 className="pt-4 bt-4 mt-4 ">My Orders</h2>
      {/* <ul className="list-group "> */}
      <table className="table table-responsive w-75 mx-auto ">
        <thead>
          <tr>
            <th scope="col">Food Name</th>
            <th scope="col">Price</th>
            <th scope="col">Address</th>
            <th scope="col">Order Status</th>
            <th scope="col">Delete Order</th>
          </tr>
        </thead>
        {myOrder.map(
          order => (
            <tbody key={order._id}>
              <tr className="table-primary">
                <td>{order.name}</td>
                <td>{order.price}</td>
                <td>{order.userAddress}</td>
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
          )

          // <li className="list-group-item list-group-item-primary" key={order._id}>Food name: {order.name}.....||.....Price: {order.price}.....||.....Order Status: {order.orderStatus}
          //     <button className="m-3 bg-warning" onClick={() => handleDeleteUser(order._id)} > Delete</button></li>
        )}
        </table>
        {/* </ul> */}
    </div>
  );
};

export default MyOrders;
