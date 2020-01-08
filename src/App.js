import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Header from './components/Header'
import Routes from './config/routes';

class App extends Component {
  state = {
    currentUser: localStorage.getItem('id')
  }

  setCurrentUser = (token) => {
    this.setState({currentUser:token})
    localStorage.setItem('id', token)
  }

  logout = () => {
    localStorage.removeItem('uid')
    this.setState({currentUser: null})
    this.props.history.push('/login')
  };

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} logout={this.logout} />
        <Routes currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} />
      </div>
    );
  }
}

export default withRouter(App);
