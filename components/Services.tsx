"use client";

import { motion } from "framer-motion";
import RoundHeader from "./RoundHeader";

export default function Services() {
  const content = [
    {
      header: "web devlopment",
      description: "we build full stack websites in React, NextJS which looks good on mobile too"
    },
    {
      header: "mobile devlopment",
      description: "we build full stack mobile apps in React Native and Flutter which are visually appealing"
    }
  ];

  return (
    <section id="services" className="w-full bg-rose-100 py-20 border-t border-t-black flex flex-col justify-center items-center">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}>
        <div className="pb-20 flex justify-center">
          <RoundHeader text="SPECIALITIES" />
        </div>

        <div className="md:flex md:justify-between sm:justify-center px-5 md:px-10 max-w-[1500px]">{content && content.map(content => <Specialities key={content.header} header={content.header} description={content.description} />)}</div>
      </motion.div>
    </section>
  );
}

function Specialities({ header, description }: { header: string; description: string }) {
  return (
    <div className="bg-white max-w-[450px] mx-2 md:mx-10 lg:mx-auto border rounded-xl border-black md:w-1/2 lg:w-1/3 mb-10 shadow-md p-10">
      <h1 className="text-lg font-semibold">{header}</h1>
      <h3>{description}</h3>
    </div>
  );
}
