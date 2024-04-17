"use client";
import { useState, useEffect } from "react";
import BtnLink from "../Button/BtnLink";
import BtnPrimary from "../Button/BtnPrimary";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [navbarBg, setNavbarBg] = useState<string>("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      if (position > 0) {
        setNavbarBg("bg-white shadow-md");
      } else {
        setNavbarBg("bg-transparent mt-3");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`hidden md:block fixed top-0 right-0 left-0 text-gray-600 body-font transition-all duration-300 z-50 py-5 ${navbarBg}`}
    >
      <div className="container mx-auto flex flex-wrap md:px-2 lg:px-4 xl:px-16 2xl:px-20 flex-col md:flex-row items-center justify-between">
        <Link
          href="/"
          className="title-font flex font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Image
            src="/imgs/logo-icon-bgWhite.png"
            width={40}
            height={40}
            alt="Logo LOG"
          />
          <span className="sm:hidden md:flex md:text-lg lg:text-xl">
            LeadOnGlobal
          </span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex items-center text-base justify-center">
          <BtnLink href="/">Home</BtnLink>
          <BtnLink href="/about">About</BtnLink>
          <BtnLink href="/project">Projects</BtnLink>
          <BtnLink href="/contact">Contact</BtnLink>
        </nav>
        <BtnPrimary
          href="/"
          componentStyle="md:px-2 lg:px-3 md:py-2 lg:py-3 bg-white"
          BgHover="bg-[#090909]"
        >
          ID
        </BtnPrimary>
        <BtnPrimary
          href="https://wa.me/+6285156410744"
          componentStyle="md:px-2 lg:px-6 xl:px-8 md:py-2 lg:py-3 bg-white"
          BgHover="bg-[#38dd77]"
        >
          Whatsapp
        </BtnPrimary>
      </div>
    </header>
  );
}
