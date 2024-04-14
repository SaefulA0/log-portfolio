"use client";
import BtnPrimary from "../Button/BtnPrimary";
import BtnSecondary from "../Button/BtnSecondary";

export default function Navbar() {
  return (
    <header className="hidden md:block fixed top-0 right-0 left-0 text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap py-6 md:px-5 xl:px-16 2xl:px-20 flex-col md:flex-row items-center justify-between border border-red-700">
        <a className="title-font flex font-medium items-center text-gray-900 mb-4 md:mb-0">
          <div className="w-10 h-10 bg-slate-800" />
          <span className="md:hidden lg:flex ml-1 text-xl">LeadOnGlobal</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <BtnPrimary href="/">Home</BtnPrimary>
          <BtnPrimary href="/about">About</BtnPrimary>
          <BtnPrimary href="/project">Projects</BtnPrimary>
          <BtnPrimary href="/contact">Contact</BtnPrimary>
        </nav>
        <BtnSecondary
          href="/"
          componentStyle="md:px-2 lg:px-3 md:py-2 lg:py-3"
          BgHover="bg-[#090909]"
        >
          ID
        </BtnSecondary>
        <BtnSecondary
          href="/"
          componentStyle="md:px-2 lg:px-6 xl:px-8 md:py-2 lg:py-3"
          BgHover="bg-[#38dd77]"
        >
          Whatsapp
        </BtnSecondary>
      </div>
    </header>
  );
}
