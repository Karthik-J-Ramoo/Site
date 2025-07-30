// START OF CODE FOR src/app/Components/HeroSection/HeroSection.jsx
"use client"; // CRITICAL: This must be the very first line of the file.
import React from 'react';
import Link from 'next/link'; // IMPORTANT: Make sure this import is present.

const HeroSection = () => {
  return (
    <div className="relative w-full h-[493px] flex flex-col justify-center items-center text-center overflow-hidden bg-[#ABABAB]">
      {/* Background image and overlay */}
      <div
        // Removed bg-cover and bg-no-repeat Tailwind classes to use direct CSS
        className="absolute inset-0"
        // Explicitly setting backgroundImage, backgroundSize, and backgroundRepeat as direct CSS
        style={{
          backgroundImage: "url('/siteimage.jpg')",
          backgroundSize: 'cover',        // Direct CSS for background-size
          backgroundRepeat: 'no-repeat',  // Direct CSS for background-repeat
          backgroundPosition: 'center',   // Direct CSS for background-position
          // Removed backgroundColor: '#888888' as it was a fallback for testing
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Main content: Title and Button */}
      <div className="relative z-10 text-white pt-20 pb-8 flex flex-col items-center">
        <h1 className="text-6xl md:text-7xl font-extrabold font-geist text-white mb-8 animate-fade-in-up">
          Interactive Map
        </h1>
        <Link href="/map">
          <button className="px-12 py-4 rounded-[49px] bg-gradient-to-b from-[#4C2D2D] to-[#744545] text-white text-3xl font-bold font-geist uppercase tracking-wide shadow-xl hover:from-[#5C3D3D] hover:to-[#845555] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#855e5e] focus:ring-opacity-75">
            Open
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
// END OF CODE FOR src/app/Components/HeroSection/HeroSection.jsx
