import React from "react";
import Button from "../common/Button";
import './heroSection.css';
import arrowImage from '../Images/increase.png';  // Adjust the path based on your folder structure

const HeroSection = () => {
  return (
    <div className="hero-section-wrapper">
      <div className="flex absolute-center hero-claim-label">
        <div>empower your business with cutting-edge POS solutions.</div>
        <div className="claim-anchor">
          explore now <img src={arrowImage} className="claim-arrow" alt="Arrow" />
        </div>
      </div>
      <div className="flex absolute-center flex-col hero-section max-width">
        <div className="hero-heading">
          secure and efficient payment processing.
        </div>
        <div className="hero-subheading">
          join thousands of businesses streamlining transactions with our POS systems.
        </div>
        <Button buttonText='Get Started' />
      </div>
    </div>
  );
};

export default HeroSection;
