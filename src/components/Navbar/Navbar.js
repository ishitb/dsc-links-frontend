import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Navbar as BootstrapNavbar } from "react-bootstrap";
import { useStoreState, useStoreActions } from "easy-peasy";
import Logo from "../../assets/images/DSC-Logo.png";
import "./Navbar.css";
import SearchPage from "./Searchbar.jsx";

export default function Navbar() {
  const loggedIn = useStoreState((store) => store.accountModel.user_logged_in);

  const logout = useStoreActions((actions) => actions.accountModel.logout_user);

  return (
    <BootstrapNavbar
      className="grey-bg justify-content-between"
      expand="lg"
      id="navbar"
    >
      <BootstrapNavbar.Brand>
        <Link
          className="navbar-brand heading-text d-flex align-items-center"
          to="/"
        >
          <img className="d-inline-block align-top" src={Logo} alt="DSC Logo" />
          CLUB PORTAL
        </Link>
      </BootstrapNavbar.Brand>
      <Link
        id="auth-button"
        className="nav-link anim-btn-1"
        to="/register"
        style={{ backgroundColor: "transparent" }}
      >
        Login
      </Link>
      <Link
        id="auth-button"
        className="nav-link anim-btn-1"
        to="/posts"
        style={{ backgroundColor: "transparent" }}
      >
        Posts
      </Link>

      {loggedIn && (
        <Fragment>
          <Link
            id="auth-button"
            className="nav-link anim-btn-1"
            to="/dashboard"
            style={{ backgroundColor: "transparent" }}
          >
            Dashboard
          </Link>

          <button onClick={logout}>LOGOUT</button>
        </Fragment>
      )}
      <SearchPage></SearchPage> 
    </BootstrapNavbar>
  );
}
