// START OF CODE FOR src/app/Components/Navbar/Navbar.jsx
"use client";
import React from 'react';
import Link from 'next/link'; 

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-6 bg-[#4C2C2C] text-white rounded-b-lg shadow-md">
       <Link href="/" className="flex items-center space-x-4">
        {/* Circular profile/logo placeholder */}
        <div className="w-10 h-10 bg-[#FFF8F8] rounded-full shadow-inner"></div>
        <span className="text-3xl  color-[rgb(255,255,255)]font-bold font-geist tracking-wide">Website name</span>
      </Link>
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="py-2 pl-4 pr-10 rounded-md bg-white text-[#5E5E5E] text-lg placeholder-[#5E5E5E] focus:outline-none focus:ring-2 focus:ring-[#6A4747] shadow-inner font-poppins w-[411px] max-w-full"
        />
        {/* Simple SVG for search icon */}
        <svg
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5E5E5E]"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
      {/* Right-side circular icon placeholder */}
      <div className="w-10 h-10 bg-[#FFFBFB] rounded-full shadow-md hidden sm:block"></div>
    </nav>
  );
};

export default Navbar;
// END OF CODE FOR src/app/Components/Navbar/Navbar.jsx
