import Link from "next/link";
import React from "react";
import { GoArrowRight } from "react-icons/go";

export default function FooterHomePage() {
  return (
    <footer className="font-satoshi text-black bg-MainColor flex justify-center">
      <div className="container w-full h-fit pt-56 px-3 md:px-5 xl:px-16 2xl:px-20">
        <div className="flex flex-wrap flex-row justify-between">
          <div>
            <h2 className="font-semibold text-8xl text-black">
              {" "}
              Want to Start <br /> a Project?
            </h2>
            <button className="flex items-center gap-3 mt-10 w-fit h-fit py-1 px-1 bg-Light1 border-2 border-black">
              <span className="ml-2">Let's Talk</span>
              <GoArrowRight color="white" className="w-8 h-8 p-1 bg-black" />
            </button>
          </div>
          <div>
            <ul className="list-none text-right">
              <li>Instagram</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
        <div className="w-full border-b-2 border-black flex items-center justify-between pb-10 mt-10">
          <h3 className="font-semibold text-3xl">LeadOnGlobal</h3>
          <nav className="w-2/6 flex items-center justify-between">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Project</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
        <span className="w-full h-fit flex items-center justify-center py-10">
          © 2024 Lead on Global. All rights reserved
        </span>
      </div>
    </footer>
  );
}
