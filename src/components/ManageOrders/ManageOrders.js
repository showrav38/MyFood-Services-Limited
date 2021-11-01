import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './ManageOrders.css';

const ManageOrders = () => {
  const { user } = useAuth();
  const uid = user.uid;
  console.log(uid);
  const [orderedAll, setOrderedAll] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const url = 'https://young-springs-85818.herokuapp.com/orders';
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setOrderedAll(data);
        console.log(orderedAll);
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
          const remainingUsers = orderedAll.filter(order => order._id !== id);
          setOrderedAll(remainingUsers);
        })
      );
    }
  };
  const handleUpdateUser = id => {
    const proceed = window.confirm('Are you sure, you want to delete?');
    console.log(id);
    if (proceed) {
      const url = `https://young-springs-85818.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(user),
      })
        .then(res => res.json())
        .then(data => {
          // console.log(data);
          if (data.modifiedCount > 0) {
            alert('updated successfully');
          }
        });
    }
  };

  return (
    <div className="pt-4 bt-4 mt-4">
      <h2 className="pt-4 bt-4 mt-4">Manage Order</h2>

      <table className="table w-75 mx-auto">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Buyer Name</th>
            <th scope="col">Order Update</th>
            <th scope="col">Order Delete</th>
            <th scope="col">Pending status Change</th>
          </tr>
        </thead>
        {orderedAll.map(order => (
          <tbody key={order._id}>
            <tr className="table-primary">
              <td>{order.name}</td>
              <td>{order.price}</td>
              <td>{order.userNameWhoOrdered}</td>
              <td>{order.orderStatus}</td>
              <td>
                {' '}
                <button className="m-3 bg-warning" onClick={() => handleDeleteUser(order._id)}>
                  {' '}
                  Delete
                </button>
              </td>
              <td>
                {order.orderStatus === 'pending' ? (
                  <button className="m-3 bg-warning" onClick={() => handleUpdateUser(order._id)}>
                    {' '}
                    Make Order Approved
                  </button>
                ) : (
                  ''
                )}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default ManageOrders;
