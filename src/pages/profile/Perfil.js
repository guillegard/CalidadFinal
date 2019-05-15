import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import user from '../../img/user.png';

class Perfil extends Component {
  render(){
    return(
      <div className="Profile">
        <div className="Profile__Container">
          <img className="Profile__User--Image" src={user} />
        </div>
      </div>
    );
  }
}

export default Perfil;
