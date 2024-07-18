import React, { useEffect, useState } from 'react';
import axios from 'axios';

function OrderList({ userId }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`/api/orders/user/${userId}`);
        setOrders(response.data);
      } catch (error) {
        console.error('There was an error fetching the orders!', error);
      }
    };
    fetchOrders();
  }, [userId]);

  return (
    <div>
      <h2>Order List</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            Order ID: {order.id} - Total Price: ${order.totalPrice} - Status: {order.status}
            <ul>
              {order.products.map((product, index) => (
                <li key={index}>{product}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderList;
