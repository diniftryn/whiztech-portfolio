"use client";

import Image from "next/image";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex-center fixed top-0 z-50 w-full md:py-5 text-black text-center md:bg-white">
      <div className="flex-between mx-auto w-full max-w-screen-2xl px-4 xs:px-8 lg:px-16">
        <button
          onClick={() => {
            setMenuOpen(true);
          }}
          className={`${isMenuOpen ? "hidden" : "flex"}`}
        >
          <Image src="/hamburger-menu.svg" width={30} height={30} alt="Hamburger menu" className="block mt-5 md:hidden border border-blue-100 bg-slate-400" />
        </button>

        <ul className="flex-center max-md:hidden flex flex-row justify-between border-black border">
          <NavItem section="about" text="about us" />
          <NavItem section="works" text="our works" />
          <NavItem section="services" text="services" />
          <NavItem section="contact" text="contact" />
        </ul>
      </div>

      <div className="bg-white bg-opacity-80 md:hidden">
        <ul className={`${isMenuOpen ? "pb-7" : "hidden"}`}>
          <button
            onClick={() => {
              setMenuOpen(false);
            }}
            className="flex pt-5 px-5"
          >
            <AiOutlineClose />
          </button>
          <NavItem section="about" text="about us" />
          <NavItem section="works" text="our works" />
          <NavItem section="services" text="services" />
          <NavItem section="contact" text="contact" />
        </ul>
      </div>
    </nav>
  );
}

function NavItem({ section, text }: { section: string; text: string }) {
  return (
    <Link to={`${section}`} smooth duration={500} offset={-85} className="md:flex-1 md:border border-black bg-white py-2">
      <li>
        <button className="w-full">{text}</button>
      </li>
    </Link>
  );
}
