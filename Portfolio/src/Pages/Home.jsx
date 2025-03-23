import React, { useEffect, useState, useRef, createContext } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import LargeImage from "../Components/LargeImage";
import AOS from "aos";
import "aos/dist/aos.css";

export let HomeContext = createContext();
export let AboutContext = createContext();

function Home() {
  const [loaded, setLoaded] = useState(false);

  let homeRef = useRef(null);
  let aboutRef = useRef(null);

  const homeRefContext = {
    homeRef,
  };

  const aboutRefContext = { aboutRef };

  useEffect(() => {
    document.title = "Home";
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
    <AboutContext.Provider value={aboutRefContext}>
      <HomeContext.Provider value={homeRefContext}>
        <div className="home-container dark-mode">
          <div className="Header-wrap" data-aos="fade-down">
            <Header />
          </div>
          <div className="LargeImage-wrap" data-aos="zoom-in" ref={homeRef}>
            {" "}
            <LargeImage />
          </div>
          <div className="about-scroll" ref={aboutRef}></div>
          <div className="about-header" data-aos="zoom-in">
            <h2>
              About <span style={{ color: "var(--color)" }}>Me</span>
            </h2>
          </div>
          <hr
            className="about-line"
            data-aos="fade-left"
            style={{ width: "30%", borderTop: "3px solid var(--loader-color)" }}
          />
          <div className="about" data-aos="fade-up">
            <p>
              Hello 👋, My name is Brady and I am a front-end web developer. I
              have a passion for web development and I am always looking to
              learn new skills and technologies. I have experience creating
              projects using technologies like React and am always trying to
              improve my skills even more. I would love to work with you on your
              next project!
            </p>
          </div>

          <div className="Footer-wrap">
            <Footer />
          </div>
        </div>
      </HomeContext.Provider>
    </AboutContext.Provider>
  );
}

export default Home;
