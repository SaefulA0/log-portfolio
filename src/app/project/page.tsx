import ResponsiveDesign from "@/components/ResDesign";
import HeroSection from "@/containers/ProjectPage/hero-section";
import SecondSection from "@/containers/ProjectPage/second-section";

export default function project() {
  return (
    <div className="w-full min-h-screen bg-gray-100 text-gray-900">
      <ResponsiveDesign />
      <HeroSection />
      <SecondSection />
    </div>
  );
}
