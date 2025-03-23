import React, { useState } from "react";
import "./header.css";
import logo from '../../Images/IconMain.png';  // Import your logo

const Header = () => {
  const [showMobMenu, setShowMobMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobMenu(!showMobMenu);
  };

  return (
    <div className="mobile-menu-wrapper">
      <div
        className={`mobile-menu only-mobile ${showMobMenu ? "overlay" : ""}`}
      >
        <div className="mobile-navbar">
          <div className="mobile-nav-item">POS Dashboard</div>
          <div className="mobile-nav-item">Transactions</div>
          <div className="mobile-nav-item">Sales Reports</div>
        </div>
      </div>
      <div className="flex max-width header">
        <div className="header-logo-wrapper">
          <img
            src={logo}  // Using the imported logo image
            className="header-logo"
            alt="POS Machine Logo"
          />
          <div className="header-logo-text">POSER</div> {/* Added POSER text below logo */}
        </div>
        <div className="only-mobile mobile-menu-button-wrapper">
          <button
            className={`hamburger hamburger--spin ${showMobMenu ? "is-active" : ""}`}
            type="button"
            onClick={toggleMobileMenu}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div className="non-mobile flex">
          <div className="header-nav-item">POS Dashboard</div>
          <div className="header-nav-item">Transactions</div>
          <div className="header-nav-item">Sales Reports</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
