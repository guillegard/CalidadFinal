import React from 'react';
import ReactDOM from 'react-dom';
import Create from './pages/Create.js';
import Options from './pages/Options.js';
import Students from './pages/Students.js';
import Dashboard from './pages/dashboard/main/Dashboard.js';
import GruposCreate from './pages/grupos/main/GruposCreate.js';
import Perfil from './pages/profile/Perfil.js';
//af7f29d428bd41838ce3f4230ad01991

it('renders Create without craching', () =>{
    const div = document.createElement('div');
    ReactDOM.render(<Create />, div);
});

it('renders Options without craching', () =>{
    const div = document.createElement('div');
    ReactDOM.render(<Options />, div);
});

it('renders Students without craching', () =>{
    const div = document.createElement('div');
    ReactDOM.render(<Students />, div);
});

it('renders Dashboard without craching', () =>{
    const div = document.createElement('div');
    ReactDOM.render(<Dashboard />, div);
});

it('renders GruposCreate without craching', () =>{
    const div = document.createElement('div');
    ReactDOM.render(<GruposCreate />, div);
});

it('renders Perfil without craching', () =>{
    const div = document.createElement('div');
    ReactDOM.render(<Perfil />, div);
});