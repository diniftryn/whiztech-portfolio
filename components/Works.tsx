"use client";

import { motion } from "framer-motion";
import RoundHeader from "./RoundHeader";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const works = [
  {
    title: "booking management system",
    description: "we built a web application for one of our clients to manage thier bookings easily",
    link: "https://next-bms-bay.vercel.app/",
    image: "clouds.jpeg"
  },
  {
    title: "in real time",
    description: "this web application was built for one of our clients to conduct real time polling",
    link: "https://in-real-time-frontend.vercel.app/",
    image: "ocean.jpeg"
  }
];

export default function Works() {
  const backgroundImageStyle = {
    backgroundImage: `url('/clouds-web.jpeg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  return (
    <section id="works" style={backgroundImageStyle} className="w-full min-h-[90vh] border-t border-t-black py-10">
      <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.5, ease: "easeInOut" }}>
        <div className="mt-10 pb-10 flex justify-center items-center">
          <RoundHeader text="portfolio" />
        </div>

        <div className="pt-10 md:flex justify-center px-5 md:px-10 max-w-[1500px]">{works && works.map(work => <WorkItem key={work.title} work={work} />)}</div>
      </motion.div>
    </section>
  );
}

function WorkItem({ work }: { work: { title: string; description: string; link: string; image: string } }) {
  return (
    <div className="bg-white max-w-[450px] mx-2 md:mx-10 lg:mx-auto border rounded-xl border-black md:w-1/2 lg:w-1/3 mb-10 shadow-md overflow-hidden">
      <div className="w-full h-40 bg-cover rounded-t-xl" style={{ backgroundImage: `url("/${work.image}")` }}></div>

      <div className="rounded-b-xl p-5 bg-indigo-100 border border-t-black">
        <h1 className="font-semibold">{work.title}</h1>
        <h2>{work.description}</h2>
        <button className="bg-white">
          <Link href={work.link} target="_blank" className="flex gap-x-2 items-center bg-white">
            <h2 className="">view project</h2>
            <HiOutlineArrowNarrowRight />
          </Link>
        </button>
      </div>
    </div>
  );
}
