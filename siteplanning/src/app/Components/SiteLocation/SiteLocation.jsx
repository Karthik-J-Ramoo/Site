// START OF CODE FOR src/app/Components/SiteLocation/SiteLocation.jsx
"use client"; // CRITICAL: This must be the very first line of the file.
import React from 'react';

const SiteLocation = () => {
  return (
    <div className="container mx-auto p-8 mt-16">
      <h2 className="text-5xl font-semibold font-geist text-black mb-6">Site Location</h2>
      <p className="text-2xl font-normal font-poppins text-[#4E4E4E] mb-12 max-w-[654px]">
        Enter the latitude and longitude co-ordinates or upload a kml file to
        obtain precise details on the site.
      </p>

      {/* Main container with side-by-side layout */}
      <div className="flex justify-between gap-16">
        {/* Left Column - Form Inputs and Upload Button */}
        <div className="w-[500px]">
          <div className="flex flex-col space-y-6 mb-10">
            {/* Latitude Input */}
            <div>
              <label htmlFor="latitude" className="block text-3xl font-medium font-geist text-black mb-2">
                Latitude
              </label>
              <input
                type="text"
                id="latitude"
                placeholder="Latitude"
                className="w-full px-4 py-3 border border-[#D1D5DB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A4747] text-2xl font-poppins text-[#4E4E4E] shadow-sm"
              />
            </div>
            {/* Longitude Input */}
            <div>
              <label htmlFor="longitude" className="block text-3xl font-medium font-geist text-black mb-2">
                Longitude
              </label>
              <input
                type="text"
                id="longitude"
                placeholder="Longitude"
                className="w-full px-4 py-3 border border-[#D1D5DB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6A4747] text-2xl font-poppins text-[#4E4E4E] shadow-sm"
              />
            </div>
          </div>

          {/* Upload KML File */}
          <div className="mb-10">
            <h3 className="text-3xl font-medium font-geist text-black mb-4">Upload KML File</h3>
            <button className="w-[212px] h-[68px] bg-[#653D3D] rounded-lg flex items-center justify-center shadow-md hover:bg-[#7A4D4D] transition-colors duration-200">
              <span className="text-xl font-light font-poppins text-white">Upload</span>
            </button>
          </div>
        </div>

        {/* Right Column - Map Placeholder */}
        <div className="w-[615px]">
          <div className="sticky top-8">
            <img
              className="w-full h-[346px] object-cover rounded-lg shadow-lg"
              alt="Map Image"
              src="https://placehold.co/615x346/E0E0E0/333333?text=Map+Placeholder"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteLocation;
// END OF CODE FOR src/app/Components/SiteLocation/SiteLocation.jsx
