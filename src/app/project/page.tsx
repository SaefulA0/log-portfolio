import ResponsiveDesign from "@/components/ResDesign";
import HeroSection from "@/containers/ProjectPage/hero-section";
import SecondSection from "@/containers/ProjectPage/second-section";

export default function project() {
  return (
    <div className="w-full min-h-screen bg-gray-100 text-gray-900">
      <ResponsiveDesign />
      <HeroSection />
      <SecondSection />
      {/* <h1 className="text-6xl font-bold">project Page</h1>
      <p className="text-xl mt-4">This is a Next.js app with Tailwind CSS.</p> */}
    </div>
  );
}
