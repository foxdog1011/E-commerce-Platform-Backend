import React, { useState } from 'react';
import axios from 'axios';

function RefundPayment() {
  const [orderId, setOrderId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/payments/refund/${orderId}`);
      alert(response.data);
    } catch (error) {
      console.error('There was an error processing the refund!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Refund Payment</h2>
      <div>
        <label>Order ID</label>
        <input type="text" value={orderId} onChange={(e) => setOrderId(e.target.value)} />
      </div>
      <button type="submit">Refund</button>
    </form>
  );
}

export default RefundPayment;
