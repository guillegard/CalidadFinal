import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import Dashboard from './pages/dashboard/main/Dashboard'
import Groups from './pages/grupos/main/GruposCreate'
import Students from './pages/Students'
import Perfil from './pages/profile/Perfil'
import Create from './pages/Create'
import Options from './pages/Options'
import './style/Dash.css';
import Menu from './components/menu/Menu';

class Second extends Component {
  render() {
    return (
      <Router>

      <div className="Dash">

        <div className="Navbar">
          <div className="Navbar__Left">
            <ul className="Navbar__List">
              <li> <NavLink to="/dashboard" className="Navbar__Link"> Logo de SAEC </NavLink></li>
            </ul>
          </div>
          <div className="Navbar__Right" align="right">
            <ul className="Navbar__List">
              <li> <NavLink to="/groups" className="Navbar__Link"> Grupo </NavLink></li>
              <li> <NavLink to="/students" className="Navbar__Link"> Alumnos </NavLink></li>
              <Menu />
            </ul>
          </div>
        </div>

        <Route path="/dashboard" component={Dashboard} />

        <Route path="/create" component={Create} />

        <Route path="/groups" component={Groups} />

        <Route path="/students" component={Students} />

        <Route path="/options" component={Options} />

        <Route path="/perfil" component={Perfil} />


      </div>


      </Router>

    );
  }
}

export default Second;
