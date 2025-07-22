import React from "react";
import Image from "next/image";
import "../../globals.css";

export const Openmap = () => {
  return (
    <div className="relative w-full h-[50vh] max-h-[400px]">
      {/* Background Image */}
      <Image
        src="/siteimage.jpg"
        alt="Open Map"
        fill
        priority
        className="object-cover"
      />

      {/* Centered Title and Button */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="bg-[linear-gradient(180deg,rgba(255,255,255,1)_61%,rgba(99,99,99,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Geist-Bold',Helvetica] font-bold text-transparent text-[64px] text-center tracking-[0] leading-[normal]">
          Interactive Map
        </h1>
        <button className="w-[212px] h-[68px] bg-[#663D3D] rounded-[20px] text-[24px] tracking-[0] leading-[normal] mt-4 hover:bg-[#7a4c4c] transition-colors duration-300">
           <div className="text-[rgb(200,200,200)] font-[Poppins, sans-serif font-bold">
           Upload
           </div>
        </button>
      </div>
    </div>
  );
};

