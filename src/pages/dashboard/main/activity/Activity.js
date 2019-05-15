import React from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
import image from '../../../../img/image.png';
import edit from '../../../../img/pen.svg';
import erase from '../../../../img/trash.svg';

const Activity = ({
  eliminateActivity,
  addActivity,
  name,
  date,
  hour,
  group,
  status,
}) => (
  <div className="Dashboard__Activity">
    <a className="boxclose" onClick={eliminateActivity}></a>
    <img className="Dashboard__Image" src={image} />
    <div className="Dashboard__Activity--Container">
      <h1 className="Activity__Name">{name}</h1>
      <p className="Activity_Date">{date}</p>
      <p className="Activity_Hour">{hour}</p>
      <p className="Activity__Group"> {group}</p>
      <p className="Activity__Status">{status}</p>
      <img className="Activity__Erase" src={erase} onClick={eliminateActivity} />
      <img className="Activity__Edit"  src={edit} onClick={addActivity} />
    </div>
    <div className="Dashboard__Activity--Options" />
  </div>
)

export default Activity;
