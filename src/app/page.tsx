import * as React from "react";
import HeroSection from "@/containers/HomePage/hero-section";
import DividingSection from "@/containers/HomePage/dividing-section";
import ResponsiveDesign from "@/components/ResDesign";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <ResponsiveDesign />
      <HeroSection />
      <DividingSection />
    </div>
  );
}
