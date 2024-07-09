import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
import profileImage from "../../assets/nikik.jpg";
// import resumePDF from "../../assets/nikhil_cv_fixed.pdf";
import resumePDF from "../../assets/Nikhil_Resum.pdf";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        'I am a <span class="highlight">Web Developer</span>',
        'I am a <span class="highlight">Web Designer</span>',
        'I am a <span class="highlight">Freelancer</span>',
        'I am a <span class="highlight">Student</span>',
      ],
      typeSpeed: 70,
      backSpeed: 50,
      startDelay: 500,
      backDelay: 1000,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "https://myportfolio-ten-pink.vercel.app/";
    link.download = "https://myportfolio-ten-pink.vercel.app/";
    link.click();
  };

  return (
    <div id="home" className="hero container">
      <div className="hero-content">
        <div className="hero-image">
          <img src={profileImage} alt="Profile" />
        </div>
        <div className="hero-text">
          <h1>Nikhil Singh</h1>
          <span className="typed-text" ref={typedElement}></span>
          <div className="hero-action">
            <button className="btn" onClick={handleDownload}>
              My Resume <img src={dark_arrow} alt="" />
            </button>
            <AnchorLink offset={50} href="#contact">
              <button className="btn">
                Contact Me <img src={dark_arrow} alt="" />
              </button>
            </AnchorLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
