import React, { useEffect } from "react";
import BackgroundImage from "../../public/HTML-Background.png";
import "../index.css";

function LargeImage() {
  useEffect(() => {
    const image = document.querySelector(".home-image-wrap");
    image.addEventListener("mousemove", handleOnMouseMove, false);
    image.addEventListener("mouseleave", handleOnMouseMove);

    return () => {
      image.removeEventListener("mousemove", handleOnMouseMove, false);
      image.removeEventListener("mouseleave", handleOnMouseMove);
    };
  }, []);

  const handleOnMouseMove = (e) => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div className="home-image-wrap">
      <div className="home-image">
        <div className="home-image-text">
          <h1>Expand Your Business Here.</h1>
          <h4>
            Hey! My name is Brady Kline and I am a front-end web developer. I
            have a passion for creating visually appealing and user-friendly
            websites that fit your designs and needs!
          </h4>
        </div>
        <div className="home-image-image"></div>
      </div>
    </div>
  );
}

export default LargeImage;
