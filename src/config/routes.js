import React from 'react'
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import UserForm from '../components/UserForm'
import ProductForm from '../components/ProductForm'
import Product from '../components/Product'
import Login from '../components/Login'
import Register from '../components/Register'
import ProductsContainer from '../components/ProductsContainer';

export default withRouter(({ setCurrentUser, currentUser, history }) => {
    const PrivateRoute = ({component: Component, ...rest}) => (
      <Route {...rest} render={(props) => (
        currentUser
          ? <Component {...props} />
          : <Redirect to='/login' />
      )} />
    );
  
    return (
      <Switch>
          <PrivateRoute exact path='/profile' component={UserForm} />
          <Route exact path='/product/add' render={() => <div><ProductForm /></div>} />
          <Route exact path='/product/:id/edit' component={ProductForm} />
          <Route exact path='/products' component={ProductsContainer} />
          <Route exact path='/' >
            <Redirect to='/products' />
          </Route>
          <Route exact path='/product/:id' component={Product} />
          <Route path='/login' render={() => <Login history={history} setCurrentUser={setCurrentUser} />} />
          <Route exact path='/register' component={Register} />
      </Switch>
    );
  });