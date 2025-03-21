import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Header() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div className="header-container dark-mode">
      <div className="header-heading">
        <h1 className="header-name">BK</h1>
      </div>
      <div className="navbar">
        <nav>
          <ul>
            <li>
              <Link className="navbar-link" to="/">
                <i className="fa-solid fa-house"></i>
                Home
              </Link>
            </li>
            <li>
              <Link className="navbar-link" to="/projects">
                <i className="fa-solid fa-palette"></i>
                Projects
              </Link>
            </li>
            <li>
              <Link className="navbar-link" to="/about">
                <i className="fa-solid fa-address-card"></i>
                About
              </Link>
            </li>
            <li>
              <Link className="navbar-link" to="/contact">
                <i className="fa-solid fa-phone"></i>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
