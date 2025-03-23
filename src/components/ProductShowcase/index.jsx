import React, { useEffect, useRef, useState } from "react";
import "./productShowcase.css";

// Import images from the src/assets/images folder
import posLeft1 from "../Images/9.jpeg";
import posLeft2 from "../Images/8.jpeg";
import posCenter from "../Images/5.jpeg";
import posRight1 from "../Images/7.jpeg";
import posRight2 from "../Images/6.jpeg";

const ProductShowcase = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const ref = useRef(null);

  const toggleAnimation = (entries) => {
    if (entries[0]?.isIntersecting) {
      setShowAnimation(true);
    }
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(toggleAnimation, options);
    if (!showAnimation && ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [showAnimation]);

  return (
    <div className={`product-showcase ${showAnimation ? "scale-in-bottom" : ""}`} ref={ref}>
      {showAnimation && (
        <div className="showcase-wrapper">
          <img src={posLeft1} className="showcase-ui showcase-mockup-1" alt="POS System Left View 1" />
          <img src={posLeft2} className="showcase-ui showcase-mockup-2" alt="POS System Left View 2" />
          <img src={posCenter} className="showcase-ui showcase-mockup-3" alt="POS System Center View" />
          <img src={posRight1} className="showcase-ui showcase-mockup-4" alt="POS System Right View 1" />
          <img src={posRight2} className="showcase-ui showcase-mockup-5" alt="POS System Right View 2" />
        </div>
      )}
    </div>
  );
};

export default ProductShowcase;
