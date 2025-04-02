import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Project(props) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  function handleClick() {
    window.open(props.link, "_blank");
  }

  return (
    <div className="project-wrap" data-aos="fade-up">
      <div className="project-container">
        <div
          className="project-image"
          style={{ backgroundImage: `url(${props.image})` }}
          onClick={handleClick}
        ></div>
        <div className="project-description">
          <h1>{props.title}</h1>
          <h3>{props.description}</h3>
        </div>
      </div>
    </div>
  );
}

export default Project;
