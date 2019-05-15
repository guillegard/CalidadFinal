import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import Calendar from './selectDateHour/date/Date';
import FinalDate from './selectDateHour/date/CloseDate';
import Time from './selectDateHour/hour/Hour';
import Group from './selectDateHour/group/SelectGroup';


class AddForm extends Component {
  render(){
    return(
      <div className="AddActivityForm">
        <form className="FormFields" onSubmit={this.handleSubmit}>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="name"> Nombre de la actividad </label>
            <input type="text" id="name" className="AddActivity__Input" placeholder="Ingresa el nombre de la actividad" name="name" />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="day"> Dia de Inicio y Fin de la Actividad </label>
            <Calendar />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="time"> Hora de la Actividad </label>
            <Time />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="close"> Cierre de la Actividad </label>
            <FinalDate />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="grupo"> Grupo </label>
            <Group />
          </div>
          <div className="FormField">
            <button className="AddActivity__Button mr-20"> <Link exact to="/createTeams" className="FormField_ButtonLink"> Formar Equipos </Link> </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddForm;
