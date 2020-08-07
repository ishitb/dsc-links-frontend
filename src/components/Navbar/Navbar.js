import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import Logo from '../../assets/images/DSC-Logo.png';
import './Navbar.css';

export default function Navbar() {
    return (
        <div id="navbar">
            <Link id="logo" to="/">
                <img src={Logo} alt="DSC Logo" />
                <h3>DSC Links</h3>
            </Link>
            <div id="nav-links">
                <NavLink id="auth-button" className="nav-link" to="/register">
                    Login
                </NavLink>
            </div>
        </div>
    );
}
