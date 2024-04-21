import BgHeroProject from "../../../public/imgs/img_project/hero-project.png";

const HeroSection = () => {
  return (
    <section
      className="text-gray-600 body-font border-b-2 px-3 md:px-5 xl:px-16 2xl:px-20 py-24 md:flex-row flex-col items-center bg-cover bg-center bg-no-repeat flex justify-center  h-532 md:h-[400px] xl:h-[500px] 2xl:h-[532px]"
      style={{
        backgroundImage: `url(${BgHeroProject.src})`,
      }}
    >
      <div className="items-center text-center flex flex-col 2xl:mt-12">
        <h1
          className="w-96 text-center text-white 2xl:text-6xl xl:text-6xl lg:text-5xl text-4xl font-medium font-['Satoshi'] leading-10 mb-8"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #ffffff 10%, #6C6C6C 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Our Works
        </h1>

        {/* <p className="font-satoshi tracking-wider text-[10px] font-normal sm:text-[10px] md:text-[0.8rem] lg:text-[1rem] xl:text-[1rem] 2xl:text-[1.3rem] text-[#BDBDBD] sm:pt-5 md:w-2/3 xl:w-3/4 2xl:w-4/5"> */}
        <h2 className="text-center 2xl:w-[600px] 2xl:text-[16px] text-sm text-[#cfc6c6de] text-opacity-75 font-normal font-['Satoshi'] leading-tight tracking-wide">
          Developing Koperasi Information System (Web App) for Koperasi Pekerja
          Indonesia Maju, Indonesia.
        </h2>
      </div>
    </section>
  );
};

export default HeroSection;
