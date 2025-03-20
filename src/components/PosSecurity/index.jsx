import React from 'react';
import './posSecurity.css';
import Button from '../common/Button';

const PosSecurity = () => {
  return (
    <div className="pos-security photo-section">
      <div className="max-width">
        <div className="photo-section-child">
          <div className="photo-section-top">
            <div className="photo-section-heading pos-security-heading">
              secure transactions. always.
            </div>
            <div className="photo-section-subheading">
              keeping your payments safe and seamless.
            </div>
          </div>
          <div className="photo-section-bottom">
            <div className="photo-section-description pos-security-description">
              Our POS systems ensure end-to-end encryption for every transaction, 
              providing secure and seamless payment processing. Partnering with top 
              brands, we deliver the highest standards of security and reliability 
              to keep your business running smoothly.
            </div>
            <div>
              <Button buttonText="Learn More" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosSecurity;
 