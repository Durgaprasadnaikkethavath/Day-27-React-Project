import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar_container">
        <li>
          <NavLink className="navbar" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar" to="/About">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar" to="/Contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar" to="/Gallery">
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar" to="/StudentData">
            StudentData
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar" to="/Error">
            Error
          </NavLink>
        </li>
      </ul>
      <NavLink></NavLink>
    </nav>
  );
};

export default Navbar;
