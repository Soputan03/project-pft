import React from 'react'
import Navbar from './Navbar';
import BannerBackground from "../Assets/home-banner-background.png"
import ProfilePic from "../Assets/avatar_lg-removebg-preview.png";
import { FiArrowRight} from "react-icons/fi"

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Hi I'm Khen Yehez Soputan
          </h1>
          <p className="primary-text">
          I'm a student at Purwadhika
          </p>
        </div>
        <div className="home-image-section">
          <img src={ProfilePic} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home
