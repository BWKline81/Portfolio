import React, { useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  HomeContext,
  AboutContext,
  ProjectsContext,
  ContactContext,
} from "../Pages/Home";

function Header() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  const homeRef = useRef(useContext(HomeContext));
  const aboutRef = useRef(useContext(AboutContext));
  const projectsRef = useRef(useContext(ProjectsContext));
  const contactRef = useRef(useContext(ContactContext));

  return (
    <div className="header-container dark-mode">
      <div className="header-heading">
        <h1 className="header-name">BK</h1>
      </div>
      <div className="navbar">
        <nav>
          <ul>
            <li>
              <button
                className="navbar-link"
                onClick={() => {
                  homeRef.current.homeRef.current.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <i className="fa-solid fa-house"></i>
                Home
              </button>
            </li>
            <li>
              <button
                className="navbar-link"
                onClick={() => {
                  aboutRef.current.aboutRef.current.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <i className="fa-solid fa-address-card"></i>
                About
              </button>
            </li>
            <li>
              <button
                className="navbar-link"
                onClick={() =>
                  projectsRef.current.projectsRef.current.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                <i className="fa-solid fa-palette"></i>
                Projects
              </button>
            </li>

            <li>
              <button
                className="navbar-link"
                onClick={() =>
                  contactRef.current.contactRef.current.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                <i className="fa-solid fa-phone"></i>
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
