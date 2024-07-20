import React, { useState } from 'react';
import axios from 'axios';

function AddProduct() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stockQuantity, setStockQuantity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('/api/products', {
        name,
        description,
        price,
        stock_quantity: stockQuantity
      }, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      alert(response.data);
    } catch (error) {
      console.error('There was an error adding the product!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Description</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Price</label>
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <div>
        <label>Stock Quantity</label>
        <input type="text" value={stockQuantity} onChange={(e) => setStockQuantity(e.target.value)} />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProduct;
