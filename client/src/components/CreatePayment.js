import React, { useState } from 'react';
import axios from 'axios';

function CreatePayment() {
  const [orderId, setOrderId] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/payments', { orderId, amount });
      alert(response.data);
    } catch (error) {
      console.error('There was an error creating the payment!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Payment</h2>
      <div>
        <label>Order ID</label>
        <input type="text" value={orderId} onChange={(e) => setOrderId(e.target.value)} />
      </div>
      <div>
        <label>Amount</label>
        <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <button type="submit">Create Payment</button>
    </form>
  );
}

export default CreatePayment;
