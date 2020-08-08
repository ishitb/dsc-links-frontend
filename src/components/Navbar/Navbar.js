import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BootstrapNavbar } from 'react-bootstrap';

import Logo from '../../assets/images/DSC-Logo.png';
import './Navbar.css';

export default function Navbar() {
    return (
        <BootstrapNavbar className="grey-bg" expand="lg" id="navbar">
            <BootstrapNavbar.Brand>
                <Link
                    className="navbar-brand heading-text d-flex align-items-center"
                    to="/"
                >
                    <img
                        className="d-inline-block align-top"
                        src={Logo}
                        alt="DSC Logo"
                    />
                    DSC LINKS
                </Link>
            </BootstrapNavbar.Brand>
            <Link id="auth-button" className="nav-link" to="/register">
                Login
            </Link>
        </BootstrapNavbar>
    );
}
