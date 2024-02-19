import LinearText from "./LinearText";
import RoundHeader from "./RoundHeader";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="w-full border-t border-t-black flex">
      <div className="flex-1 bg-lime-100 flex flex-col justify-center items-center py-10">
        <div className="flex justify-center items-center pb-5 md:pb-10">
          <RoundHeader text="Who We Are" />
        </div>

        <h2 className="px-3 md:px-10 text-center">we are software engineers with years of combined experience developing websites and products</h2>
      </div>

      <div className="bg-blue-200 border-l border-l-black hidden md:block">
        <div className="py-10 px-2 md:px-10 flex justify-center">
          <Image className="rounded-full" src="/ocean.jpeg" alt="" width={300} height={300} />
        </div>
      </div>
    </section>
  );
}
