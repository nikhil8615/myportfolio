import React from "react";
import "./Mywork.css";
import pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const Mywork = () => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={pattern} alt="" />
      </div>
      <div className="mywork_container">
        {mywork_data.map((work, index) => {
          return (
            <a>
              <img key={index} src={work.w_img} />
            </a>
          );
        })}
      </div>
      <div className="mywork_showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  );
};

export default Mywork;
