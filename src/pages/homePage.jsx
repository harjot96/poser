import React from "react";
import HeroSection from "../components/HeroSection";
import Header from "../components/common/Header";
import ProductShowcase from "../components/ProductShowcase";
import FeelSpecial from "../components/FeelSpecial";
import PosExperience from "../components/PosExperience";
import BrandsLove from "../components/BrandsLove";
import { WindowPeak } from "../components/WindowPeak";
import MobileScroll from "../components/MobileScroll";
import AppRating from "../components/AppRating";
import Footer from "../components/common/Footer";
import PosSecurity from "../components/PosSecurity";
import PosStory from "../components/PosStory";

const HomePage = () => {
  return (
    <main>
      <Header />
      <HeroSection />
      <ProductShowcase />
      <FeelSpecial />
      <BrandsLove />
      <PosExperience />
      <MobileScroll />
      <div className="non-mobile">
        <WindowPeak />
      </div>
      <PosSecurity />
      <PosStory />
      <AppRating />
      <Footer />
    </main>
  );
};

export default HomePage;
