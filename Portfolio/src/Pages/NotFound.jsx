import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function NotFound() {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    document.title = "404 Page Not Found";
    setLoaded(true);
    AOS.init({ duration: 1000 });

    return () => {
      setLoaded(false);
    };
  }, []);

  if (!loaded) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="not-found-container">
      <i className="fa-regular fa-face-frown"></i>
      <h1>404</h1>
      <h3>Sorry, the page you are looking for does not exist.</h3>
      <button onClick={() => navigate("/")} className="not-found-button">
        Return to Homepage
      </button>
    </div>
  );
}

export default NotFound;
