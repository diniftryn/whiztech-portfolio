import React from "react";

export default function RoundHeader({ text }: { text: string }) {
  return (
    <>
      <div className="bg-white border border-black px-10 md:px-20 py-2 rounded-3xl shadow-md shadow-black">{text}</div>
    </>
  );
}
