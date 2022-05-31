import React from 'react';
import logo from './../../images/logo-social.png'
import './Header.css'

const Header = () => {
    return (
        <header className='header'>
            <img title='Logo' className='logo' src={logo} alt="" />
            <h1>Slogan Logo</h1>
        </header>
    );
};

export default Header;