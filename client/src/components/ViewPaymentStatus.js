import React, { useState } from 'react';
import axios from 'axios';

function ViewPaymentStatus() {
  const [orderId, setOrderId] = useState('');
  const [payment, setPayment] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/api/payments/${orderId}`);
      setPayment(response.data);
    } catch (error) {
      console.error('There was an error fetching the payment status!', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>View Payment Status</h2>
        <div>
          <label>Order ID</label>
          <input type="text" value={orderId} onChange={(e) => setOrderId(e.target.value)} />
        </div>
        <button type="submit">View Status</button>
      </form>
      {payment && (
        <div>
          <h3>Payment Status</h3>
          <p>Order ID: {payment.orderId}</p>
          <p>Amount: {payment.amount}</p>
          <p>Status: {payment.status}</p>
        </div>
      )}
    </div>
  );
}

export default ViewPaymentStatus;
