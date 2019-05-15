import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import AddForm from './dashboard/create/AddForm';
import AddTeams from './dashboard/create/AddTeams';

class Create extends Component {
  render(){
    return(
      <Router>
        <div className='Create'>
          <Route path="/create" component={AddForm} />
          <Route path="/createTeams" component={AddTeams} />
        </div>
      </Router>
    );
  }
}

export default Create;
