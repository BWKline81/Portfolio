import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div className="footer-container">
      <div className="internal-links"></div>
      <div className="external-links"></div>
      <div className="sub-text"></div>
    </div>
  );
}

export default Footer;
