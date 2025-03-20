import React from "react";
import "./posStory.css";

const PosStory = () => {
  return (
    <div className="pos-story flex absolute-center">
      <div className="max-width flex story-wrapper">
        <div className="flex pos-story-heading-wrapper">
          <div className="pos-story-heading">
            the journey of secure transactions starts here.
          </div>
        </div>
        <div className="pos-story-details">
          <div className="pos-story-para">
            In the evolving world of digital payments, security and efficiency
            are paramount. Businesses rely on robust and seamless POS solutions
            to ensure smooth transactions while maintaining trust and reliability.
          </div>
          <div className="pos-story-para">
            Our POS systems are designed with cutting-edge technology, enabling
            businesses to accept payments with confidence. Whether it’s
            contactless payments, chip and PIN, or mobile transactions, we ensure
            a seamless experience for both businesses and customers.
          </div>
          <div className="pos-story-para">
            Join the network of businesses that trust our POS solutions to
            streamline their operations and provide secure, hassle-free
            transactions every time.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PosStory;
