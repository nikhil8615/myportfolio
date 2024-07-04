import React from "react";
import "./Title.css";
import pattern from "../../assets/theme_pattern.svg";

const Title = ({ title, image }) => {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>{title}</h1>
        <img src={pattern} alt="" />
      </div>
    </div>
  );
};

export default Title;
