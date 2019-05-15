import React from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';

const AddActivity = ({
  addActivity,
}) => (
  <div onClick={addActivity} className="Dashboard__New--Activity">
  </div>
)

export default AddActivity;
