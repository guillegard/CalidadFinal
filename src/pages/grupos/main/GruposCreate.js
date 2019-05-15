import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import Group from './group/Group';
import AddActivity from '../../dashboard/main/addActivity/AddActivity';

class GruposCreate extends Component {
  state = {
    groups: [],
  }

  addGroup = () => {
    /*const { groups } = this.state;
    groups.push({name: "Actividad " + (groups.length+1), date: "Fecha: 14/2/19", hour: "Hora: 10:00 am - 11:30 am", group: "Grupo: Matemáticas 3", status:"Status: Próximamente"});
    this.setState({groups});*/
    let path = `/createGroup`;
    this.props.history.push(path);
  }

  eliminateGroup = index => () => {
    const { groups } = this.state;
    groups.splice(index, 1);
    this.setState({groups});
  }

  componentDidMount() {
    // Llamada a la API...
    setTimeout(() => {
      this.setState({
        groups: [
          { name: "Grupo " + 1, hour: "Hora: 10:00 am - 11:30 am", clave: "Clave: Cf-2001"} ,
          { name: "Grupo " + 2, hour: "Hora: 15:00 pm - 16:30 pm", clave: "Clave: Cf-3011"} ,
          { name: "Grupo " + 3, hour: "Hora: 7:00 am - 10:00 am", clave: "Clave: Cf-4045"}
        ]
      })
    }, 1000)
  }

  render(){
    const { groups } = this.state;
    const { eliminateGroup, addGroup } = this;
    return(
      <div className="Dashboard">

        {groups && groups.map((groups, index) => (
          <Group key={index} {...groups} eliminateGroup={eliminateGroup(index)} addGroup={addGroup}/>
        ))}

        <AddActivity addGroup={addGroup} />

      </div>
    );
  }
}

export default GruposCreate;
