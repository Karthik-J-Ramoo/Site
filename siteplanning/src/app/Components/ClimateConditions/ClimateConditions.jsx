// START OF CODE FOR src/app/Components/ClimateConditions/ClimateConditions.jsx
"use client"; // Added for client-side rendering compatibility
import React from 'react';

const ClimateConditions = () => {
  return (
    <div className="container mx-auto p-8 mt-16">
      <h2 className="text-5xl font-semibold font-geist text-black mb-6">Climate Conditions At Your Site</h2>
      <p className="text-2xl font-normal font-poppins text-[#4E4E4E] mb-12 max-w-[654px]">
        Automatically retrieves the temperature, humidity, sun exposure, and wind conditions at your site.
      </p>

      <div className="w-full h-[500px] bg-gray-200 rounded-lg overflow-hidden shadow-lg flex items-center justify-center relative">
        {/* Background image for this section */}
        <img
          className="w-full h-full object-cover"
          alt="Climate Conditions Image"
          src="https://placehold.co/1293x500/C0C0C0/333333?text=Climate+Map+Placeholder"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>

        {/* Retrieve Button */}
        {/* Adjusted positioning to bottom-right using absolute positioning and direct CSS */}
        <div style={{ position: 'absolute', bottom: '32px', right: '32px' }}> {/* Equivalent to Tailwind bottom-8 right-8 */}
          <button className="w-[212px] h-[68px] bg-[#653D3D] rounded-lg flex items-center justify-center shadow-md hover:bg-[#7A4D4D] transition-colors duration-200">
            <span className="text-xl font-light font-poppins text-white">Retrieve</span>
          </button>
        </div>
      </div>

      <p className="text-2xl font-normal font-poppins text-[#4E4E4E] text-center mt-8">
        click here to download climate condition report
      </p>
    </div>
  );
};

export default ClimateConditions;
// END OF CODE FOR src/app/Components/ClimateConditions/ClimateConditions.jsx
