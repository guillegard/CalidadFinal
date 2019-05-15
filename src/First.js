import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import SignUpForm from './pages/presentation/sign-up/SignUpForm';
import SignInForm from './pages/presentation/sign-in/SignInForm';
import RecoverPassword from './pages/presentation/forgot-password/RecoverPassword';
import './style/App.css';

class First extends Component {
  render() {
    return (
      <Router >

      <div className="App">
        <div className="App__Aside" />
        <div className="App__Form">

          <Route exact path="/" component={SignUpForm} />

          <Route path="/sign-in" component={SignInForm} />

          <Route path="/forgot-password" component={RecoverPassword} />

        </div>
      </div>

      </Router>
    );
  }
}

export default First;
