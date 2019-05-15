import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import Activity from './activity/Activity';
import AddActivity from './addActivity/AddActivity';

class Dashboard extends Component {
  state = {
    activities: [],
  }

  addActivity = () => {
    /*const { activities } = this.state;
    activities.push({name: "Actividad " + (activities.length+1), date: "Fecha: 14/2/19", hour: "Hora: 10:00 am - 11:30 am", group: "Grupo: Matemáticas 3", status:"Status: Próximamente"});
    this.setState({activities});*/
    let path = `/create`;
    this.props.history.push(path);
  }

  eliminateActivity = index => () => {
    const { activities } = this.state;
    activities.splice(index, 1);
    this.setState({activities});
  }

  componentDidMount() {
    // Llamada a la API...
    setTimeout(() => {
      this.setState({
        activities: [
          { name: "Actividad " + 1, date: "Fecha: 14/2/19", hour: "Hora: 10:00 am - 11:30 am", group: "Grupo: Matemáticas 3", status:"Status: Terminada" } ,
          { name: "Actividad " + 2, date: "Fecha: 14/2/19", hour: "Hora: 10:00 am - 11:30 am", group: "Grupo: Matemáticas 3", status:"Status: En progreso"} ,
          { name: "Actividad " + 3, date: "Fecha: 14/2/19", hour: "Hora: 10:00 am - 11:30 am", group: "Grupo: Matemáticas 3", status:"Status: Próximamente"}
        ]
      })
    }, 1000)
  }

  render(){
    const { activities } = this.state;
    const { eliminateActivity, addActivity } = this;
    return(
      <div className="Dashboard">

        {activities && activities.map((activity, index) => (
          <Activity key={index} {...activity} eliminateActivity={eliminateActivity(index)} addActivity={addActivity}/>
        ))}

        <AddActivity addActivity={addActivity} />

      </div>
    );
  }
}

export default Dashboard;
