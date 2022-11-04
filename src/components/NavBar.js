import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.jpeg";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="tummytales logo" />
      </div>
      <div className="nav-links">
        <ul >
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/menu">
            <li>Menu</li>
          </Link>
          <Link to="/promos">
            <li>Promos</li>
          </Link>
          <Link to="/contact-us">
            <li>Contact Us</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
