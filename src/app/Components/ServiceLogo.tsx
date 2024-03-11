"use client";
import React from "react";
import CustomImage from "./CustomImage";
import slogo1 from "../../../public/aseets/svg/slogo1.svg";
import slogo2 from "../../../public/aseets/svg/slogo2.svg";
import slogo3 from "../../../public/aseets/svg/slogo3.svg";
import slogo4 from "../../../public/aseets/svg/slogo4.svg";
import slogo5 from "../../../public/aseets/svg/slogo5.svg";
import slogo6 from "../../../public/aseets/svg/slogo6.svg";
import { useNightMode } from "./NightModeContext";

const ServiceLogo = () => {
  const { isNightMode } = useNightMode();
  return (
    <div className="container mx-auto sm:px-4 md:px-6 lg:px-20  mt-[8.125rem] sm:mt-[3.125rem]">
      <div className="flex flex-col gap-20 sm:gap-8 self-stretch">
        <div className="flex w-auto items-center">
          <div className="flex w-auto flex-col items-start gap-6 shrink-0">
            <p
              className={`text-5xl not-italic font-extrabold leading-[52px]
            ${isNightMode ? "text-[#0000000]" : "text-[#090F5B]"}`}
            >
              Tool we use
            </p>
          </div>
        </div>
        <div className="flex justify-around items-center gap-10 sm:gap-4">
          <div>
            <CustomImage src={slogo1} alt="CustomImage" />
          </div>
          <div>
            <CustomImage src={slogo2} alt="CustomImage" />
          </div>
          <div>
            <CustomImage src={slogo3} alt="CustomImage" />
          </div>
          <div>
            <CustomImage src={slogo4} alt="CustomImage" />
          </div>
          <div>
            <CustomImage src={slogo5} alt="CustomImage" />
          </div>
          <div>
            <CustomImage src={slogo6} alt="CustomImage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceLogo;
