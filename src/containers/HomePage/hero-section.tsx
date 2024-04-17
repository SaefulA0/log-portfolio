import BtnSecondary from "@/components/Button/BtnPrimary";
import BgHeroSection from "../../../public/imgs/bg-hero-section.png";
import { GoArrowDown } from "react-icons/go";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="text-Dark1 body-font border-b-2 font-satoshi"
      style={{
        backgroundImage: `url(${BgHeroSection.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="container min-h-screen mx-auto flex px-3 md:px-5 xl:px-16 2xl:px-20 py-24 md:flex-row flex-col items-center justify-between">
        <div className="lg:flex-grow w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p className="leading-loose tracking-widest uppercase mb-1 text-lg font-semibold text-black">
            ELEVATE YOUR BUSINESS
          </p>
          <h1 className="tracking-tight uppercase title-font md:text-3xl lg:text-5xl text-3xl font-extrabold text-gray-900 mb-8">
            Bringing your vision to life with{" "}
            <span className="font-extrabold tracking-normal text-gray-100 font-outline-2">
              innovative
            </span>{" "}
            software solutions.
          </h1>
          <div className="flex justify-center">
            <BtnSecondary
              href="/"
              componentStyle="px-2 py-2 md:px-2 lg:px-6 xl:px-8 md:py-2 lg:py-3 bg-white"
              BgHover="bg-[#090909]"
            >
              Scroll down
            </BtnSecondary>
          </div>
        </div>
        <div className="relative h-[24.5rem] md:h-[21rem] lg:h-[24.5rem] xl:h-[28.5rem] w-[24.5rem] md:w-[21rem] lg:w-[24.5rem] xl:w-[28.5rem] border-2 border-black">
          <button className="absolute right-7 -top-10 w-fit h-fit p-1.5 bg-white z-10">
            <div className="w-12 h-12 flex justify-center items-center bg-MainColor">
              <GoArrowDown size={22} color="black" />
            </div>
          </button>
          <Image
            src="/imgs/office.png"
            width={1080}
            height={1080}
            alt="Office Image"
            className="absolute -top-3 -left-3 object-cover object-center aspect-square h-[24.5rem] md:h-[21rem] lg:h-[24.5rem] xl:h-[28.5rem] w-[24.5rem] md:w-[21rem] lg:w-[24.5rem] xl:w-[28.5rem]"
          />
        </div>
      </div>
    </section>
  );
}
