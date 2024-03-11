"use client"
import React from "react";
import Jobcard from "./jobcard";
import { useNightMode } from "./NightModeContext";

const careerjob = () => {
  const { isNightMode } = useNightMode();
  return (
    <div className="flex items-center justify-center lg:mt-[142px] sm:mt-[50px] md:mt-[80px]">
      <div className="container mx-auto px-4 md:px-6 lg:px-24">
        <div className="flex flex-col items-start gap-[54px]">
          <div className="flex flex-col items-center">
            <div className={`text-[#090F5B] text-[48px] not-italic font-extrabold leading-[52px]
                ${isNightMode ? "text-[#ffffff]" : "text-[#090F5B]"
              } `}
            >
              Current Openings: Join Our Team
            </div>
          </div>
          </div>
          <div className="grid grid-cols-2 gap-4 items-center justify-center mt-[54px] sm:grid-cols-1">
            <Jobcard />
            <Jobcard />
            <Jobcard />
            <Jobcard />
            <Jobcard />
            <Jobcard />
          </div>
        
      </div>
    </div>
  );
};

export default careerjob;
