import * as React from "react";
import HeroSection from "@/containers/HomePage/hero-section";
import DividingSection from "@/containers/HomePage/dividing-section";
import ResponsiveDesign from "@/components/ResDesign";
import FooterHomePage from "@/components/Footer/FooterHomePage";
import SecondSection from "@/containers/HomePage/second-section";
import ThirdSection from "@/containers/HomePage/third-section";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      <ResponsiveDesign />
      <HeroSection />
      <DividingSection />
      <SecondSection />
      <ThirdSection />
      <FooterHomePage />
    </div>
  );
}
