import Image from "next/image";
import React from "react";

export default function SecondSection() {
  const data = [
    {
      index: 1,
      icon: "/icons/shake-hands-fill.svg",
      title: "Trusted Collaboration",
      desc: "In the rapidly evolving digital landscape, we understand the importance of selecting the right partner to help you achieve your goals.",
    },
    {
      index: 2,
      icon: "/icons/payment-success-fill.svg",
      title: "Affordable Pricing",
      desc: "We believe that high-quality software shouldn't break the bank. That's why we offer competitive pricing options to fit your budget without compromising on quality or performance.",
    },
    {
      index: 3,
      icon: "/icons/team-fill.svg",
      title: "Passionate Team",
      desc: "Our team comprises passionate and dedicated individuals committed to delivering the best for our clients.",
    },
    {
      index: 4,
      icon: "/icons/user-fill.svg",
      title: "Costumer Satisfaction Focus",
      desc: "Our team is committed to deeply understanding your needs and providing an exceptional experience throughout the collaboration process.",
    },
  ];

  return (
    <section className="text-black body-font border-b-2 font-satoshi">
      <div className="container w-full h-fit mx-auto px-8 md:px-5 xl:px-16 2xl:px-20 py-24 flex flex-col items-center">
        <div className="w-full flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Image
              src="/imgs/logo-icon-bgWhite.png"
              width={48}
              height={48}
              alt="Logo LOG"
              className="border-2 border-black"
            />
            <h1 className="font-semibold text-4xl">Why Load on Global?</h1>
          </div>
          <p className="w-full md:w-[32rem] font-lato">
            In the rapidly evolving digital landscape, we understand the
            importance of selecting the right partner to help you achieve your
            goals.
          </p>
        </div>
        {/* card */}
        <div className="w-full grid gap-6 md:gap-7 lg:gap-8 xl:gap-10 grid-cols-1 md:grid-cols-2 mt-12">
          {data.map((item) => (
            <div
              key={item.index}
              className="relative w-full h-[16rem] md:h-[19rem] lg:h-[16rem] xl:h-[14rem] bg-black"
            >
              <div className="absolute -top-1.5 -left-1.5 w-full h-full bg-white border border-black p-10">
                <Image
                  src={item.icon}
                  width={32}
                  height={32}
                  alt={item.icon}
                  className="mb-2"
                />
                <h2 className="text-xl font-medium mb-2">{item.title}</h2>
                <p className="mb-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
