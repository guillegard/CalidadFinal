import React from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import image from '../../../../img/groupBack.png';
import edit from '../../../../img/pen.svg';
import erase from '../../../../img/trash.svg';

const Group = ({
  eliminateGroup,
  addGroup,
  name,
  hour,
  clave,
}) => (
  <div className="Dashboard__Activity">
    <a className="boxclose" onClick={eliminateGroup}></a>
    <img className="Dashboard__Image--Group" src={image} />
    <div className="Dashboard__Activity--Container">
      <h1 className="Activity__Name">{name}</h1>
      <p className="Activity_Hour">{hour}</p>
      <p className="Activity_Date">{clave}</p>
      <img className="Activity__Erase" src={erase} onClick={eliminateGroup} />
      <img className="Activity__Edit" src={edit} onClick={addGroup} />
    </div>
    <div className="Dashboard__Activity--Options" />
  </div>
)

export default Group;
