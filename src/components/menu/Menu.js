import React from 'react';
import Dropdown, { DropdownTrigger, DropdownContent} from 'react-simple-dropdown';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';

class Menu extends React.Component {
render() {
    return (
        <Dropdown>
            <DropdownTrigger>Opciones</DropdownTrigger>
            <DropdownContent>
                <ul>
                    <li>
                        <NavLink to="/perfil" className="Navbar__Link"> Perfil </NavLink>
                    </li>
                    <li>
                        <a href="/dashboard">Actividades</a>
                    </li>
                    <li>
                        <a href="/">Salir</a>
                    </li>
                </ul>
            </DropdownContent>
        </Dropdown>
    );
}
}

export default Menu;
