import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./assets/logo.png";
import { useAuth } from "../Contexts/LoginContext";

function NavBar() {
  const auth = useAuth();
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="tummytales logo" />
      </div>
      <div className="nav-links">
        <ul >
          <NavLink to="/" end>
            <li>Home</li>
          </NavLink>
          <NavLink to="/menu">
            <li>Menu</li>
          </NavLink>
          <NavLink to="/promos">
            <li>Promos</li>
          </NavLink>
          <NavLink to="/profile">
            <li>Profile</li>
          </NavLink>
          {
            !auth.user && <NavLink to="/login">
            <li>Login</li>
          </NavLink>
          }
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
