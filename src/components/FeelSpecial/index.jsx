import React from "react";
import "./FeelSpecial.css";
import Button from "../common/Button";

const FeelSpecial = () => {
  return (
    <div className="feel-special photo-section">
      <div className="max-width">
        <div className="photo-section-child">
          <div className="photo-section-top">
            <div className="photo-section-heading">
              elevate your business transactions.
            </div>
            <div className="photo-section-subheading">
              seamless and secure payment solutions.
            </div>
          </div>
          <div className="photo-section-bottom">
            <div className="photo-section-description">
              Enhance your business operations with our advanced POS solutions. 
              Enjoy faster checkouts, secure transactions, and seamless payment 
              integrations designed for modern businesses. From contactless payments 
              to real-time analytics, we provide everything you need to keep your 
              transactions smooth and your customers satisfied.
            </div>
            <div>
              <Button buttonText="Discover Solutions" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeelSpecial;
