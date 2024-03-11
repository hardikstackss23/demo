"use client";
import React from "react";
import CustomImage from "./CustomImage";
import msg from "../../../public/aseets/svg/msg.svg";
import { useNightMode } from "./NightModeContext";

const ServiceHeader = () => {
  const { isNightMode } = useNightMode();
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-20">
      <div className="flex flex-col justify-between pt-16 md:flex-row md:pt-40 sm:pt-28">
        <div className="flex flex-col gap-4 md:gap-16 md:w-1/2">
          <div
            className={`sm:text-[48px] md:text-[48px] lg:text-[58px] xl:text-[68px] font-extrabold leading-[1.25] md:leading-[60px] lg:leading-[81px] ${
              isNightMode ? "text-[#0000000]" : "text-[#090F5B]"
            }`}
          >
            <div>Technology</div>
            <div>WE ARE</div>
            <div>working on</div>
          </div>
        </div>

        <div className="flex flex-col gap-[5.375rem] sm:gap-10">
          <div
            className={`text-base md:text-lg lg:text-[20px] font-semibold leading-[180%] md:w-[330px] xl:w-[550px] lg:w-[430px] sm:mt-8 ${
              isNightMode ? "text-[#0000000]" : "text-[#777777]"
            }`}
          >
            Transforming ideas into powerful digital products that redefine
            industry standards while establishing a distinct brand presence
            through innovative IT solutions.
          </div>

          <div className="flex items-start pt-0 pb-[0.8px] px-0">
            {/* <Image src={msg} alt="Image" className="w-auto h-auto" /> */}
            <CustomImage
                  src={msg}
                  alt="Image"
                  style={{
                    filter: isNightMode ? "brightness(85%) invert(1) saturate(0) " : "none",
                  }}
                />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceHeader;
