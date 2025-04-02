import React, { useEffect, useState, useRef, createContext } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import LargeImage from "../Components/LargeImage";
import Project from "../Components/Project";
import AOS from "aos";
import "aos/dist/aos.css";
import BKTycoonImage from "../../public/BKTycconImage.jpg";

export let HomeContext = createContext();
export let AboutContext = createContext();
export let ProjectsContext = createContext();
export let ContactContext = createContext();

function Home() {
  const [loaded, setLoaded] = useState(false);

  let homeRef = useRef(null);
  let aboutRef = useRef(null);
  let projectsRef = useRef(null);
  let contactRef = useRef(null);

  const homeRefContext = {
    homeRef,
  };

  const aboutRefContext = { aboutRef };

  const projectsRefContext = { projectsRef };

  const contactRefContext = { contactRef };

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

  function handleClick() {
    window.open("https://github.com/BWKline81", "_blank");
  }

  return (
    <ContactContext.Provider value={contactRefContext}>
      <ProjectsContext.Provider value={projectsRefContext}>
        <AboutContext.Provider value={aboutRefContext}>
          <HomeContext.Provider value={homeRefContext}>
            <div className="home-container dark-mode">
              <div className="Header-wrap" data-aos="fade-down">
                <Header />
              </div>

              <div className="LargeImage-wrap" data-aos="fade-up" ref={homeRef}>
                {" "}
                <LargeImage />
              </div>

              <div
                className="about-scroll"
                ref={aboutRef}
                style={{ height: "1vh" }}
              ></div>
              <div className="about-header" data-aos="zoom-in">
                <h2>
                  About <span style={{ color: "var(--color)" }}>Me</span>
                </h2>
              </div>
              <hr
                className="about-line"
                data-aos="fade-left"
                style={{
                  width: "30%",
                  borderTop: "3px solid var(--loader-color)",
                }}
              />
              <div className="about" data-aos="fade-up">
                <p>
                  Hello 👋, My name is Brady and I am a front-end web developer.
                  I have a passion for web development and I am always looking
                  to learn new skills and technologies. I have experience
                  creating projects using technologies like React and am always
                  trying to improve my skills even more. I would love to work
                  with you on your next project!
                </p>
              </div>

              <div
                className="project-scroll"
                ref={projectsRef}
                style={{ height: "1vh" }}
              ></div>
              <div className="projects">
                <div className="project-header" data-aos="zoom-in">
                  <h2>Projects</h2>
                </div>
                <hr
                  className="project-line"
                  data-aos="fade-right"
                  style={{
                    width: "30%",
                    borderTop: "3px solid var(--loader-color)",
                  }}
                />
                <Project
                  image={BKTycoonImage}
                  title="BK Tycoon 💰"
                  description="A simple web-based tycoon game"
                  link="https://bwkline81.github.io/BKtycoon/"
                />
              </div>

              <div
                className="contact-scroll"
                ref={contactRef}
                style={{ height: "1vh" }}
              ></div>
              <div className="contact">
                <div
                  className="contact-header"
                  ref={contactRef}
                  data-aos="zoom-in"
                >
                  <h2>
                    Contact <span style={{ color: "var(--color)" }}>Me</span>
                  </h2>
                </div>
                <hr
                  className="contact-line"
                  style={{
                    width: "30%",
                    borderTop: "3px solid var(--loader-color)",
                  }}
                  data-aos="fade-left"
                />
                <div className="contact-container" data-aos="fade-up">
                  <ul>
                    <i className="fa-solid fa-envelope"></i>
                    <li>bwkline@icloud.com</li>
                    <i
                      className="fa-brands fa-github"
                      onClick={handleClick}
                    ></i>
                    <li>https://github.com/BWKline81</li>
                  </ul>
                </div>
              </div>

              <div className="Footer-wrap">
                <Footer />
              </div>
            </div>
          </HomeContext.Provider>
        </AboutContext.Provider>
      </ProjectsContext.Provider>
    </ContactContext.Provider>
  );
}

export default Home;
