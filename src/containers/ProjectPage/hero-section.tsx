import BgHeroProject from "../../../public/imgs/img_project/hero-project.png";

const HeroSection = () => {
  return (
    <section
      className="text-gray-600 body-font border-b-2 px-3 md:px-5 xl:px-16 2xl:px-20 py-24 md:flex-row flex-col items-center bg-cover bg-center bg-no-repeat flex justify-center  h-532 md:h-[400px] xl:h-[500px] 2xl:h-[600px]"
      style={{
        backgroundImage: `url(${BgHeroProject.src})`,
      }}
    >
      <div className="items-center text-center flex flex-col">
        <h1
          className="font-satoshi font-medium tracking-tight  title-font sm:text-5xl text-3xl xl:mt-[90px] lg:mt-15 md:mt-15 default:text-[1.5rem] sm:text-[2rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] 2xl:text-[4.5rem] mb-2 text-white"
          style={{
            color: "rgba(255, 255, 255, 1)",
            backgroundImage:
              "linear-gradient(180deg, #ffffff 10%, #6C6C6C 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Our Works
        </h1>
        <p className="font-satoshi tracking-wider text-[10px] font-medium sm:text-[10px] md:text-[0.8rem] lg:text-[1rem] xl:text-[1rem] 2xl:text-[1.3rem] text-[#BDBDBD] sm:pt-5 md:w-2/3 xl:w-3/4 2xl:w-4/5">
          Whereby is the super simple way to connect over video. No downloads or
          long having into meeting links.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
