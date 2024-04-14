import BtnSecondary from "@/components/Button/BtnSecondary";

export default function HeroSection() {
  return (
    <section className="text-gray-600 body-font border-b-2">
      <div className="container h-screen mx-auto flex px-3 md:px-5 xl:px-16 2xl:px-20 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p className="leading-relaxed">ELEVATE YOUR BUSINESS</p>
          <h1 className="title-font sm:text-4xl text-3xl font-medium text-gray-900 mb-8">
            Bring your vision to life with innovative software solution
          </h1>
          <div className="flex justify-center">
            <BtnSecondary
              href="/"
              componentStyle="px-2 py-2 md:px-2 lg:px-6 xl:px-8 md:py-2 lg:py-3"
              BgHover="bg-[#090909]"
            >
              Scroll down
            </BtnSecondary>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
      </div>
    </section>
  );
}
