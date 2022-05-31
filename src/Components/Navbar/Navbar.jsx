import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {


    return (

        <nav className='navigation'>
            <ul className='menu'>
                <li><NavLink to='/profile' className='menu__item'>Profile</NavLink></li>
                <li><NavLink to='/dialogs' className='menu__item'>Messages</NavLink></li>
                <li><NavLink to='/users' className='menu__item'>Users</NavLink></li>
                <li><NavLink to='/news' className='menu__item'>News</NavLink></li>
                <li><NavLink to='/music' className='menu__item'>Music</NavLink></li>
                <li><NavLink to='/settings' className='menu__item'>Settings</NavLink></li>
            </ul>
        </nav>

    );
};

export default Navbar;