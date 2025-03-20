import React, { useState, useRef, useEffect } from "react";

const ScreenText = ({ screen, setCurrentImg, i }) => {
  const [showAnimation, setshowAnimation] = useState(false);

  const ref = useRef(null);

  const toggleAnimation = (e) => {
    if (e[0]?.isIntersecting) {
      setshowAnimation(true);
      setCurrentImg(i);
    }
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(toggleAnimation, options);
    
      if (ref.current) {
        observer.observe(ref.current);
      }
  
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  });

  return (
    <div
      className={`screen-text ${showAnimation ? "text-visible" : ""}`}
      ref={ref}
    >
      <div className="screen-heading">{screen.heading}</div>
      <div className="mobile-mockup-wrapper only-mobile">
        <div className="mobile-mockup">
          <div className="mobile-mockup-screen flex absolute-center">
            <img src={screen.mobile_img} className="mobile-screen-img" alt="" />
          </div>
        </div>
      </div>
      <div className="screen-description">{screen.description}</div>
    </div>
  );
};

const scrollData = [
  {
    heading: "Effortless Transactions",
    description: "Our POS system ensures smooth and secure transactions, enhancing the checkout experience for both customers and businesses.",
    mobile_img: 'https://web-images.credcdn.in/_next/assets/images/home-page/features/fold1.png',
  },
  {
    heading: "Track Sales in Real-Time",
    description: "Monitor your sales and revenue with real-time analytics and detailed reports, helping you make informed business decisions.",
    mobile_img: 'https://web-images.credcdn.in/_next/assets/images/home-page/features/fold2.png',
  },
  {
    heading: "Seamless Inventory Management",
    description: "Keep track of stock levels and receive alerts for low inventory, ensuring you never run out of essential products.",
    mobile_img: 'https://web-images.credcdn.in/_next/assets/images/home-page/features/fold3.png',
  },
  {
    heading: "Customer Loyalty & Rewards",
    description: "Enhance customer engagement by offering personalized discounts, loyalty programs, and reward points with every purchase.",
    mobile_img: 'https://web-images.credcdn.in/_next/assets/images/home-page/features/fold4.png',
  },
];

export default ScreenText;
