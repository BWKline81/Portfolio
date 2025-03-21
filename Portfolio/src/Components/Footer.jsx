import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  const navigate = useNavigate();

  return (
    <div className="footer-container">
      <div className="internal-links">
        <Link className="footer-link" to="/">
          Home
        </Link>
        <Link className="footer-link" to="/projects">
          Projects
        </Link>
        <Link className="footer-link" to="/about">
          About
        </Link>
        <Link className="footer-link" to="/contact">
          Contact
        </Link>
      </div>
      <div className="external-links">
        <a
          className="footer-link"
          href="https://github.com/BWKline81"
          target="_blank"
        >
          <i className="fa-brands fa-github" style={{ fontSize: "2.5rem" }}></i>
        </a>
      </div>
      <div className="sub-text">
        <p>© 2025 BK</p>
      </div>
    </div>
  );
}

export default Footer;
