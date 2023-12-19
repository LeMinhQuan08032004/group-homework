import logo from './logo.svg';
import './App.css';
import React from 'react';
import LoginComponent from './container/auth/login1'; 
import NavComponent from'./container/auth/nav';
import FooterComponent from'./container/auth/footer';
import SiginComponent from'./container/auth/sigin';
import CartComponent from'./container/auth/cart';
import AllProductsComponent from'./container/auth/allproducts';
import ProductDetailComponent from'./container/auth/productdetail';
import PaymentComponent from'./container/auth/payment';

function App() {
  return (
    <div>
      
      <PaymentComponent />
    </div>
  );
}

export default App;
