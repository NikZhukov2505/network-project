import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './../../images/logo-social.png'
import './Header.css'

const Header = (p) => {
    return (
        <header className='header'>
            <div className='logo_block'>
                <img title='Logo' className='logo' src={logo} alt="" />
                <h1>Slogan Logo</h1>
            </div>

            <div className='login_block'>
                {p.isAuth
                    ?
                    <div className='logout_block'>{p.login}<button onClick={() => {
                        p.logout()
                    }} className='logout_btn'>Logout</button></div>
                    :
                    <NavLink className='login_link' to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;