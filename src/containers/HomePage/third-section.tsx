import BtnSecondary from "@/components/Button/BtnSecondary";

export default function ThirdSection() {
  return (
    <section className="text-white body-font font-satoshi bg-black">
      <div className="container w-full h-fit mx-auto px-8 md:px-5 xl:px-16 2xl:px-20 py-24 flex flex-col items-center">
        <div className="w-full relative flex gap-2">
          <div className="h-full">
            <h1 className="font-semibold text-4xl mb-8">Our Projects</h1>
            <p className="w-full h-[20rem] md:w-[19rem] font-lato">
              Explore our portfolio to see examples of the projects we have
              delivered and how we can help bring your digital vision to life.
            </p>
            {/* <button className="absolute bottom-0 left-0 py-2 px-6 bg-white text-black font-semibold">
              See all projects
            </button> */}
            <BtnSecondary
              href="/project"
              componentStyle="py-2 px-3 bg-white text-black"
              BtnHover="transform delay-200 hover:bg-black hover:text-white"
            >
              See all projects
            </BtnSecondary>
          </div>
        </div>
      </div>
    </section>
  );
}
