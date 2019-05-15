import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import {Switch} from 'react-router';
import First from './First';
import Second from './Second';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={First}>
          </Route>

          <Route path="/dashboard" component={Second}>
          </Route>
        </Switch>
      </Router>

    );
  }
}

export default App;
