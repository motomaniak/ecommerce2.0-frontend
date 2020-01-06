import React from 'react';
import {Switch, Route, Redirect, Router} from 'react-router-dom'
import ProductsContainer from './components/ProductsContainer';
import Header from './components/Header'
import UserForm from './components/UserForm'
import ProductForm from './components/ProductForm'
import Product from './components/Product'
import Login from './components/Login'


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/register' component={UserForm} />
        <Route exact path='/product/add' render={() => <div><ProductForm /></div>} />
        <Route exact path='/product/:id/edit' component={ProductForm} />
        <Route exact path='/products' component={ProductsContainer} />
        <Route exact path='/' >
          <Redirect to='/products' />
        </Route>
        <Route exact path='/product/:id' component={Product} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </div>
  );
}

export default App;
