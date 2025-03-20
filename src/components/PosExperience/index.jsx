import React from "react";
import "./credExperience.css";
import Button from "../common/Button";

const PosExperience = () => {
  return (
    <div className="pos-experience photo-section">
      <div className="max-width">
        <div className="photo-section-child">
          <div className="photo-section-top">
            <div className="photo-section-heading pos-experience-heading">
              we take your transactions seriously.
            </div>
            <div className="photo-section-subheading">
              so that you don't have to worry.
            </div>
          </div>
          <div className="photo-section-bottom">
            <div className="photo-section-description pos-experience-description">
              never miss a sale with real-time transaction processing, instant settlements mean your revenue is always accessible, and detailed analytics help you track your business growth effortlessly.
            </div>
            <div>
              <Button buttonText="Experience the Future of POS" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosExperience;
