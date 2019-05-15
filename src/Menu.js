import React from 'react';
import Dropdown, { DropdownTrigger, DropdownContent} from 'react-simple-dropdown';

class Menu extends React.Component {
render() {
    return (
        <Dropdown>
            <DropdownTrigger>Opciones</DropdownTrigger>
            <DropdownContent>
                <ul>
                    <li>
                        <a href="/perfil">Perfil</a>
                    </li>
                    <li>
                        <a href="/dashboard">Actividades</a>
                    </li>
                    <li>
                        <a href="/logout">Salir</a>
                    </li>
                </ul>
            </DropdownContent>
        </Dropdown>
    );
}
}

export default Menu;
