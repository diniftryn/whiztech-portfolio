import React from "react";
import RoundHeader from "./RoundHeader";
import Image from "next/image";

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
    <section id="services" className="w-full bg-rose-100 py-20 border border-t-black">
      <div className="pb-20 flex justify-center">
        <RoundHeader text="SPECIALITIES" />
      </div>

      <div className="flex justify-center px-5 md:px-10 max-w-[1500px]">{content && content.map(content => <Specialities key={content.header} header={content.header} description={content.description} />)}</div>
    </section>
  );
}

function Specialities({ header, description }: { header: string; description: string }) {
  return (
    <div className="bg-white flex-1 max-w-[450px] mx-2 md:mx-10 lg:mx-auto p-5 md:p-10 rounded-xl border border-black">
      <h1 className="text-lg font-semibold">{header}</h1>
      <h3>{description}</h3>
    </div>
  );
}
