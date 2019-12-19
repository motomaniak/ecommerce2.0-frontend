import React from 'react';
import {Switch, Route} from 'react-router-dom'
import ProductsContainer from './components/ProductsContainer';
import Header from './components/Header'
import UserForm from './components/UserForm'
import ProductForm from './components/ProductForm'
import Product from './components/Product'


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/register' component={UserForm} />
        <Route exact path='/addproduct' component={ProductForm} />
        <Route exact path='/products' component={ProductsContainer} />
        <Route path='/:id' component={Product} />
      </Switch>
    </div>
  );
}

export default App;
