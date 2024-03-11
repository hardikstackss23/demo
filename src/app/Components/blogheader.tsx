"use client";
import React from "react";
import { useNightMode } from "./NightModeContext";

const blogheader = () => {
  const { isNightMode } = useNightMode();
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-24">
      <div className="flex flex-col justify-between pt-16 md:flex-row md:pt-40 sm:pt-28">
        <div className="flex flex-col gap-4 md:gap-16 md:w-1/2">
          <div
            className={`sm:text-[48px] md:text-[48px] lg:text-[58px] xl:text-[68px] font-extrabold leading-[1.25] md:leading-[60px] lg:leading-[81px] ${
              isNightMode ? "text-[#0000000]" : "text-[#090F5B]"
            }`}
          >
            <div>BLOG</div>
            <div>AND</div>
            <div>POST</div>
          </div>
        </div>

        <div
          className={`text-base md:text-lg lg:text-[20px] font-semibold leading-[180%] md:w-[330px] xl:w-[550px] lg:w-[430px] sm:mt-8 ${
            isNightMode ? "text-[#0000000]" : "text-[#777777]"
          }`}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting.
        </div>
      </div>
    </div>
  );
};

export default blogheader;
