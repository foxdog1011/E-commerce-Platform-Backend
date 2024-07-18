import React, { useState } from 'react';
import axios from 'axios';

function UpdateOrderStatus() {
  const [orderId, setOrderId] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/api/orders/${orderId}`, { status });
      alert(response.data);
    } catch (error) {
      console.error('There was an error updating the order status!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Update Order Status</h2>
      <div>
        <label>Order ID</label>
        <input type="text" value={orderId} onChange={(e) => setOrderId(e.target.value)} />
      </div>
      <div>
        <label>Status</label>
        <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
      </div>
      <button type="submit">Update Status</button>
    </form>
  );
}

export default UpdateOrderStatus;
