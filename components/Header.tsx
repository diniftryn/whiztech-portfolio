"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const backgroundImageStyle = {
    backgroundImage: `url('/clouds.jpeg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff"
  };

  return (
    <header style={backgroundImageStyle} className="h-[450px] md:h-[650px] w-full text-center flex flex-col sm:gap-y-5">
      <h2 className="text-3xl p-5">we turn your ideas into reality</h2>

      <div className="md:flex md:flex-row md:gap-x-5 pt-5">
        <Link href="#works">
          <h1 className="border border-white rounded-3xl px-10 py-2 bg-white bg-opacity-20 hover:bg-opacity-50">view our work</h1>
        </Link>
        <Link href="#contact">
          <h1 className="border border-black text-black rounded-3xl px-10 py-2 mt-5 md:mt-0 bg-black bg-opacity-20 hover:bg-opacity-50">chat with us</h1>
        </Link>
      </div>
    </header>
  );
}
