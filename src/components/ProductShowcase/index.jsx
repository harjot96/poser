import React, { useEffect, useRef, useState } from "react";
import "./productShowcase.css";

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
          <img src="https://example.com/pos-left-1.png" className="showcase-ui showcase-mockup-1" alt="POS System Left View 1" />
          <img src="https://example.com/pos-left-2.png" className="showcase-ui showcase-mockup-2" alt="POS System Left View 2" />
          <img src="https://example.com/pos-center.png" className="showcase-ui showcase-mockup-3" alt="POS System Center View" />
          <img src="https://example.com/pos-right-1.png" className="showcase-ui showcase-mockup-4" alt="POS System Right View 1" />
          <img src="https://example.com/pos-right-2.png" className="showcase-ui showcase-mockup-5" alt="POS System Right View 2" />
        </div>
      )}
    </div>
  );
};

export default ProductShowcase;
