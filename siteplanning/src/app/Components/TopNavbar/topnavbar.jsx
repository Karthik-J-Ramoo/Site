import React from "react";

export const Wireframe = () => {
  return (
    <div className="bg-[#ffffff] flex justify-center w-full">
      <div className="bg-[#ffffff] w-full relative">
        {/* Top Navbar */}
        <div className="w-full h-[79px] bg-[#4c2c2c] flex items-center justify-between px-4">
          {/* Left side: Logo + Label */}
          <div className="flex items-center space-x-3">
            <div className="absolute w-[62px] h-[62px] top-[9px] left-[13px] bg-[#fff8f8] rounded-[100px]" />
            <span className="absolute w-56 top-5 left-[91px] [font-family:'Actor-Regular',Helvetica] font-normal text-[#ffffff] text-[32px] tracking-[0] leading-[normal] whitespace-nowrap"
              htmlFor="input-1">
              Website name
            </span>
          </div>

          {/* Right side: Search */}
          <div className="flex items-center space-x-3 w-[411px]">
            <input
              className="flex-1 h-[42px] bg-white rounded-[12px] text-[#5e5e5e] [font-family:'Poppins-Regular',Helvetica] text-lg px-4"
              placeholder="Search..."
              type="text"
            />
            <span className="w-[40px] h-[40px] bg-[#fffbfb] rounded-full"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
