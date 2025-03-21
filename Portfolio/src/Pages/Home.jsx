import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import LargeImage from "../Components/LargeImage";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  const [loaded, setLoaded] = useState(false);

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
    <div className="home-container dark-mode">
      <div className="Header-wrap" data-aos="fade-down">
        <Header />
      </div>
      <div className="Footer-wrap">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
