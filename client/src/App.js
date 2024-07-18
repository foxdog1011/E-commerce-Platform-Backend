import React, {useState} from 'react';
import Register from './components/Register';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import CreateOrder from './components/CreateOrder';
import OrderList from './components/OrderList';
import UpdateOrderStatus from './components/UpdateOrderStatus';
import UpdateLogistics from './components/UpdateLogistics';
import ViewLogistics from './components/ViewLogistics';
import logo from './logo.svg';
import './App.css';

function App() {
  const[userId, setUseriD] =useState(1);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Register />
      <Login />
      <AddProduct />
      <ProductList />
      <CreateOrder />
      <OrderList userId={userId} />
      <UpdateOrderStatus />
      <UpdateLogistics />
      <ViewLogistics />
    </div>
  );
}

export default App;
