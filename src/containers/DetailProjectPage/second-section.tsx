"use client";

import { projectData } from "../ProjectPage/second-section";
import Image from "next/image";

const Secondsection = () => {
  return (
    <section className="xl:mx-16">
      <div className="container mx-auto mt-10">
        <div className="flex items-center justify-between mb-8 w-full">
          <p className="text-black text-xs sm:text-sm font-normal font-['Satoshi'] md:w-72 xl:w-full xl:max-w-[200px]">
            Posted on December 31, 2021
          </p>
          <div className="border border-black max-w-[1440px] xl:w-full md:w-[100%] sm:w-[66%] w-[55%]"></div>
        </div>

        <div className=" md:mb-32 mb-16">
          <h1 className="font-['Satoshi'] text-2xl sm:text-4xl xl:text-6xl font-medium">
            Koperasi Information System Web App Development
          </h1>
        </div>
      </div>
      {/* Image Card */}
      <div className="container mx-auto">
        <div className="mx-auto max-w-[1100px] sm:w-[90%] md:w-[80%] lg:w-[80%] xl:w-100%]">
          <div className="h-[230px] sm:h-[350px] md:h-[380px] lg:h-[480px] lg:-max-h-[500px] xl:h-[560px] xl:max-h-[700px] 2xl:h-[680px] 2xl:max-h-[700px] border-4 border-black place-content-center">
            <div className="mx-auto bg-white border-2 border-black w-[90%] sm:w-[90%] md:w-[93%] lg:w-[95%]  xl:w-[95%] xl:max-w-[95%] ">
              <Image
                src={projectData[0].image}
                width={1920}
                height={1080}
                alt=""
                className="bg-[#232729] p-5 sm:p-10 md:p-9 lg:p-10 xl:p-16 2xl:p-24 mr-10"
              />
              <div className="flex justify-between mx-9 my-5 sm:my-10 md:my-10 lg:my-10 xl:my-25 2xl:my-30">
                <div className="text-center xl:ml-7">
                  <h1 className="font-['Satoshi'] text-xs font-medium">KPIM</h1>
                  <p className="text-xs text-gray-500">Client</p>
                </div>
                <div className="border border-none max-w-[23px] w-[1px] bg-gradient-to-b from-white via-black to-rgba-230-230-230-1"></div>

                <div className="text-center">
                  <h1 className="font-['Satoshi'] text-xs font-medium">
                    Web App
                  </h1>
                  <p className="text-xs text-gray-500">Services</p>
                </div>

                <div className="border border-none max-w-[23px] w-[1px] bg-gradient-to-b from-white via-black to-rgba-230-230-230-1"></div>

                <div className="text-center">
                  <h1 className="font-['Satoshi'] text-xs text-MainColor font-medium">
                    16.12.2023
                  </h1>
                  <p className="text-xs text-gray-500">Date</p>
                </div>

                <div className="mx-2 border border-none max-w-[23px] w-[1px] bg-gradient-to-b from-white via-black to-rgba-230-230-230-1"></div>

                <div className="text-center xl:mr-9">
                  <h1 className="font-['Satoshi'] text-xs text-MainColor font-medium">
                    Live Link<hr className="border-MainColor"></hr>
                  </h1>
                  <p className="text-xs text-gray-500">Website</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end */}
    </section>
  );
};

export default Secondsection;
