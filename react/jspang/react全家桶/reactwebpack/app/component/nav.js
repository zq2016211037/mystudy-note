import React from "react";
import {NavLink} from 'react-router-dom';
import './nav.css';

const NavBar = ()=>(
    <div>
        <div className='link'>
            <NavLink exact activeClassName='active' className='link' to='/'>pagea</NavLink> |&nbsp;
            <NavLink  activeClassName='active' className='link' to='/pageb'>pageb</NavLink> |&nbsp;
            <NavLink activeClassName='active' className='link' to='/pagec/ilovereact/ilovestudy'>pagec</NavLink> |&nbsp;
            <NavLink activeClassName='active' className='link' to='/react'>404</NavLink> |&nbsp;
            <NavLink activeClassName='active' className='link' to='/redirect'>redirect</NavLink>
        </div>
    </div>
)
export default NavBar;