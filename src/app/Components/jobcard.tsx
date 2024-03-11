import React from "react";
import Image from "next/image";
import bag from "../../../public/aseets/svg/bag.svg";
import location from "../../../public/aseets/svg/locationsmall.svg";
import clock from "../../../public/aseets/svg/clock.svg";
import { useNightMode } from "./NightModeContext";

const jobcard = () => {
  const { isNightMode } = useNightMode();
  return (
    <div className="flex px-[24px] py-[28px] flex-col items-center gap-[24px] flex-[1_0_0] rounded-[8px] border-[1px] border-[solid] border-[#E3E0E0] ">
      <div className="flex flex-col items-start gap-[32px] self-stretch">
        <div className="flex flex-col items-start gap-[8px] self-stretch">
          <div
            className={`text-[20px] not-italic font-bold leading-[26px]
          ${isNightMode ? "text-[#FFF]" : "text-[#000]"} `}
          >
            Product Designer
          </div>
          <div
            className={` text-[16px] not-italic font-medium leading-[24px]
            ${isNightMode ? "text-[#FFFFFF]" : "text-[#989898]"} `}
          >
            We’re looking for a mid-level product designer to join our team.
          </div>
        </div>
        <div className="flex items-center lg:gap-[24px] sm:gap-[12px] md:gap-[12px] self-stretch">
          <div className="flex items-center gap-[8px]">
            <div className="flex justify-center items-center">
              <Image
                src={clock}
                alt="img"
                style={{
                  filter: isNightMode ? "brightness(0) invert(1)" : "none",
                }}
              />
            </div>
            <div
              className={` text-[16px] not-italic font-bold leading-[24px]
              ${isNightMode ? "text-[#FFFFFF]" : "text-[#5E5E5E]"} `}
            >
              Full-time
            </div>
          </div>
          <div className="flex items-center gap-[8px]">
            <div className="flex justify-center items-center">
              <Image
                src={location}
                alt="img"
                style={{
                  filter: isNightMode ? "brightness(0) invert(1)" : "none",
                }}
              />
            </div>
            <div
              className={`text-[16px] not-italic font-bold leading-[24px]
              ${isNightMode ? "text-[#FFFFFF]" : "text-[#5E5E5E]"} `}
            >
              Dubai
            </div>
          </div>
          <div className="flex items-center gap-[8px]">
            <div className="flex justify-center items-center">
              <Image
                src={bag}
                alt="img"
                style={{
                  filter: isNightMode ? "brightness(0) invert(1)" : "none",
                }}
              />
            </div>
            <div
              className={`text-[16px] not-italic font-bold leading-[24px]
              ${isNightMode ? "text-[#FFFFFF]" : "text-[#5E5E5E]"} `}
            >
              2-5 Year Exp.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default jobcard;
