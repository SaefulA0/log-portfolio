import ResponsiveDesign from "@/components/ResDesign";
import HeroSection from "@/containers/DetailProjectPage/hero-section";
import Secondsection from "@/containers/DetailProjectPage/second-section";
import Thirdsection from "@/containers/DetailProjectPage/third-section";
import FourtSection from "@/containers/DetailProjectPage/fourth-section";
import OtherFooter from "@/components/Footer/OtherFooter";

export default function project() {
  return (
    <div className="w-full min-h-screen text-gray-900">
      {/* <ResponsiveDesign /> */}
      <HeroSection />
      <Secondsection />
      <Thirdsection />
      <FourtSection />
      <OtherFooter />
    </div>
  );
}
