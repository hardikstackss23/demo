"use client"
import React from "react";
import CustomImage from "./CustomImage";
import group from "../../../public/aseets/svg/aboutgroup.svg";
import { useNightMode } from "./NightModeContext";


const AboutPhoto = () => {
  const { isNightMode } = useNightMode();

  return (
    <div className="flex flex-col justify-center items-center gap-8 sm:mt-8 md:mt-12 lg:mt-16 xl:mt-20 md:mx-6 lg:mx-10 xl:mx-20">
      <div>
      <CustomImage src={group} alt="CustomImage" className="sm:object-none sm:h-80"/>
      </div>

      <div className="flex w-full max-w-[1260px] flex-col items-start gap-4 sm:w-auto md:w-[90%] lg:w-[90%] xl:w-auto sm:px-4">
        <div className={`text-base text-[20px] not-italic font-semibold leading-[180%] self-stretch ${
              isNightMode ? "text-[#0000000]" : "text-[#777777]"
            }`}
          >
          At the heart of STACKSS mission is the unwavering commitment to
          empower businesses through technology. We strive to be at the
          forefront of technological advancements, providing our clients with
          the tools and solutions they need to thrive in an ever-evolving
          digital world.
        </div>
      </div>
    </div>
  );
};

export default AboutPhoto;


