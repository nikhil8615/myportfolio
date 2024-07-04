import React, { useRef } from "react";
import "./Testimonial.css";
import pattern from "../../assets/theme_pattern.svg";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import project1_img from "../../assets/download2.png";
import project2_img from "../../assets/download.png";
import project3_img from "../../assets/download1.png";
import project4_img from "../../assets/download3.png";

const Testimonial = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    const slideWidth = slider.current.clientWidth;
    const maxTranslate =
      ((slider.current.scrollWidth - slideWidth) / slideWidth) * 100;

    if (Math.abs(tx) < maxTranslate) {
      tx -= 100 / (slider.current.childElementCount / 2);
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 100 / (slider.current.childElementCount / 2);
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} className="next-btn" alt="" onClick={slideForward} />
      <img
        src={back_icon}
        className="back-btn"
        alt=""
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <a href="https://restraunt-pink.vercel.app/">
                  <img src={project1_img} alt="" />
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <a href="https://gemini-clone-ochre-three.vercel.app/">
                  <img src={project2_img} alt="" />
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <a href="https://tour-travel-website-nu.vercel.app/">
                  <img src={project3_img} alt="" />
                </a>
              </div>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <a href="https://nikhil8615.github.io/Study-Sync/">
                  <img src={project4_img} alt="" />
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
