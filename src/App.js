import React from 'react';
import {Link, BrowserRouter as Router, Route} from 'react-router-dom'
import ProductsContainer from './components/ProductsContainer';
import Header from './components/Header'
import UserForm from './components/UserForm'
import ProductForm from './components/ProductForm'

function App() {
  return (
    <div>
      <Header />
      <ProductForm />
    </div>
  );
}

export default App;
