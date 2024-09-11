import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul className="navbar_container">
        <li>
          <a className="navbar" href="/">
            Home
          </a>
        </li>
        <li>
          <a className="navbar" href="/About">
            About
          </a>
        </li>
        <li>
          <a className="navbar" href="/Contact">
            Contact
          </a>
        </li>
        <li>
          <a className="navbar" href="/Gallery">
            Gallery
          </a>
        </li>
        <li>
          <a className="navbar" href="/StudentData">
            StudentData
          </a>
        </li>
        <li>
          <a className="navbar" href="/Error">
            Error
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
