import React, { useState } from 'react';
import './mobileScroll.css';
import ScreenText from './ScreenText';

// Import images from the images folder
import pos1 from "../Images/A.jpeg";
import pos2 from "../Images/B.jpeg";
import pos3 from '../Images/C.jpeg';
import pos4 from '../Images/G.jpeg';

const scrollData = [
  {
    heading: "Product Listing Made Easy",
    description: "Effortlessly list your products and manage their details with our user-friendly POS system.",
    mobile_img: pos1,  // Using the imported image
  },
  {
    heading: "Inventory Management & Fast Selling",
    description: "Track and manage your inventory in real-time, ensuring stock availability and promoting fast-selling items.",
    mobile_img: pos2,  // Using the imported image
  },
  {
    heading: "Add New Items with Ease",
    description: "Quickly add new items to your inventory with basic product details like name, price, and stock count.",
    mobile_img: pos3,  // Using the imported image
  },
  {
    heading: "Efficient Payment Transactions",
    description: "Process transactions effortlessly and securely, offering a seamless experience for your customers.",
    mobile_img: pos4,  // Using the imported image
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
