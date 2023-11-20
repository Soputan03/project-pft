import React from "react";
import AboutBackground from "../Assets/about-background.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About Me</p>
        <p className="primary-text">
            I'm a studednt at Purwadhika, and now i'm taking a Full Stack class       
        </p>
      </div>
    </div>
  );
};

export default About;
