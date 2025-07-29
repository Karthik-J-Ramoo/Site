// START OF CODE FOR src/app/Components/SecondaryNav/SecondaryNav.jsx
"use client"; // CRITICAL: This must be the very first line of the file.
import React from 'react';

const SecondaryNav = () => {
  // SVG for a simple down arrow icon
  const ArrowDownIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="ml-2 w-5 h-5 inline-block" // Adjusted size for consistency
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );

  return (
    // This div represents the brown bar
    // Changed py-4 to py-2 and text-xl to text-lg for a thinner bar
    <nav className="w-full bg-[#4C2C2CB5] text-white py-2 border-t border-white border-opacity-30 shadow-lg">
      {/* Removed space-x-5 and added inline style for a 20px gap */}
      <div className="container mx-auto flex justify-start items-center px-6" style={{ gap: '20px' }}>
        <a
          href="#"
          className="bg-rgb(0,0,0) font-normal text-lg text-white font-geist flex items-center hover:text-gray-300 transition-colors duration-500"
        >
          DASHBOARD
          <ArrowDownIcon />
        </a>
        <a
          href="#"
          className="font-normal text-lg text-white font-geist flex items-center hover:text-gray-300 transition-colors duration-200"
        >
          SOURCES
          <ArrowDownIcon />
        </a>
        <a
          href="#"
          className="font-normal text-lg text-white font-geist flex items-center hover:text-gray-300 transition-colors duration-200"
        >
          FEEDBACK
          <ArrowDownIcon />
        </a>
      </div>
    </nav>
  );
};

export default SecondaryNav;
// END OF CODE FOR src/app/Components/SecondaryNav/SecondaryNav.jsx
