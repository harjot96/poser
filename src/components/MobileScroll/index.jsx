import React, { useState } from 'react';
import './mobileScroll.css';
import ScreenText from './ScreenText';

const scrollData = [
  {
    heading: "streamline your transactions",
    description: "Experience seamless payments with our advanced POS system. Track sales, manage inventory, and process transactions effortlessly.",
    mobile_img: 'https://web-images.credcdn.in/_next/assets/images/home-page/features/pos1.png',
  },
  {
    heading: "secure and fast payments",
    description: "Ensure safe and rapid transactions with our POS machine. Accept multiple payment methods with ease and efficiency.",
    mobile_img: 'https://web-images.credcdn.in/_next/assets/images/home-page/features/pos2.png',
  },
  {
    heading: "real-time sales tracking",
    description: "Monitor your business performance with real-time analytics and sales reports, helping you make data-driven decisions.",
    mobile_img: 'https://web-images.credcdn.in/_next/assets/images/home-page/features/pos3.png',
  },
  {
    heading: "enhanced customer experience",
    description: "Deliver a smooth checkout experience for your customers with our intuitive and user-friendly POS interface.",
    mobile_img: 'https://web-images.credcdn.in/_next/assets/images/home-page/features/pos4.png',
  },
];

const MobileScroll = () => {
  const [currentImg, setCurrentImg] = useState(0);

  return (
    <div className='max-width flex mobile-scroll'>
      <div className='scroll-full-screen-wrapper'>
        {scrollData.map((screen, i) => (
          <div className='scroll-full-screen' key={i}>
            <ScreenText screen={screen} i={i} setCurrentImg={setCurrentImg} />
          </div>
        ))}
      </div>
      <div className='mobile-mockup-wrapper non-mobile'>
        <div className='mobile-mockup'>
          <div className='mobile-mockup-screen flex absolute-center'>
            <img 
              src={scrollData[currentImg].mobile_img} 
              className='mobile-screen-img slide-in-right' 
              alt={`Slide ${currentImg + 1}`} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileScroll;
