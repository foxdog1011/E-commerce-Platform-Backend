import React, { useState } from 'react';
import axios from 'axios';

function CreateOrder() {
  const [userId, setUserId] = useState('');
  const [products, setProducts] = useState('');
  const [totalPrice, setTotalPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/orders', {
        userId,
        products: products.split(',').map(product => product.trim()),
        totalPrice
      });
      alert(response.data);
    } catch (error) {
      console.error('There was an error creating the order!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Order</h2>
      <div>
        <label>User ID</label>
        <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
      </div>
      <div>
        <label>Products (comma separated)</label>
        <input type="text" value={products} onChange={(e) => setProducts(e.target.value)} />
      </div>
      <div>
        <label>Total Price</label>
        <input type="text" value={totalPrice} onChange={(e) => setTotalPrice(e.target.value)} />
      </div>
      <button type="submit">Create Order</button>
    </form>
  );
}

export default CreateOrder;
