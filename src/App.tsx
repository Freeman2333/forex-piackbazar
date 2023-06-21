import React from 'react';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Checkout from './pages/Checkout/Checkout';
import Navbar from './components/Navbar';
import Cart from './components/Cart/Cart';
import './styles/App.sass';
import OrderConfirm from './pages/OrderConfirm/OrderConfirm';

function App() {
  return (
    <Router>
      <Navbar />
      <Cart />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orderConfirm" element={<OrderConfirm />} />
      </Routes>
    </Router>
  );
}

export default App;
