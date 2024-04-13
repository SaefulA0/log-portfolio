"use client";
import BtnPrimary from "./ui/btn/BtnPrimary";
import BtnSecondary from "./ui/btn/BtnSecondary";

export default function MainNav() {
  return (
    <header className="hidden md:block absolute top-0 right-0 left-0 text-gray-600 body-font">
      <div className="mx-auto flex flex-wrap py-6 md:px-10 lg:px-12 xl:px-16 2xl:px-20 flex-col md:flex-row items-center border border-red-700">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-1 text-xl">LeadOnGlobal</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap gap-2 items-center text-base justify-center">
          <BtnPrimary href="/">Home</BtnPrimary>
          <BtnPrimary href="/about">About</BtnPrimary>
          <BtnPrimary href="/contact">Contact</BtnPrimary>
          <BtnPrimary href="/projects">Projects</BtnPrimary>
        </nav>
        <BtnSecondary href="/">Whatsapp</BtnSecondary>
      </div>
    </header>
  );
}
