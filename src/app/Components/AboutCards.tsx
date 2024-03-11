"use client";
import React from "react";
import CustomImage from "./CustomImage";
import card1 from "../../../public/aseets/svg/aboutcard1.svg";
import card2 from "../../../public/aseets/svg/aboutcard2.svg";
import card3 from "../../../public/aseets/svg/aboutcard3.svg";
import { useNightMode } from "./NightModeContext";

const AboutCards = () => {
  const { isNightMode } = useNightMode();

  return (
    <div className="flex container flex-col items-centet justify-center mx-auto mt-[8.125rem] md:px-6 lg:px-8">
      <div className="flex sm:flex-col max-w-[1320px] w-auto p-[40px] gap-[40px] border-b-[#BFBFBF] border-b border-solid ">
        <div>
          <CustomImage
            src={card1}
            alt="CustomImage"
            style={{
              filter: isNightMode ? "brightness(0) invert(1)" : "none",
            }}
          />
        </div>
        <div className="flex flex-col items-start gap-[18px] flex-[1_0_0]">
          <div
            className={`text-[31px] font-bold leading-[130%] ${
              isNightMode ? "text-[#0000000]" : "text-[#090F5B]"
            }`}
          >
            Our Vision
          </div>

          <div
            className={`self-stretch text-[20px] font-semibold leading-[180%] ${
              isNightMode ? "text-[#0000000]" : "text-[#777777]"
            }`}
          >
            At the heart of [Company Name]'s mission is the unwavering
            commitment to empower businesses through technology. We strive to be
            at the forefront of technological advancements, providing our
            clients with the tools and solutions they need to thrive in an
            ever-evolving digital world.
          </div>
        </div>
      </div>

      <div className="flex sm:flex-col max-w-[1320px] w-auto p-[40px] gap-[40px] border-b-[#BFBFBF] border-b border-solid ">
        <div>
          <CustomImage
            src={card2}
            alt="CustomImage"
            style={{
              filter: isNightMode ? "brightness(0) invert(1)" : "none",
            }}
          />
        </div>
        <div className="flex flex-col items-start gap-[18px] flex-[1_0_0]">
          <div
            className={`text-[31px] font-bold leading-[130%] ${
              isNightMode ? "text-[#0000000]" : "text-[#090F5B]"
            }`}
          >
            Our Mission
          </div>

          <div
            className={`self-stretch text-[20px] font-semibold leading-[180%] ${
              isNightMode ? "text-[#0000000]" : "text-[#777777]"
            }`}
          >
            At the heart of [Company Name]'s mission is the unwavering
            commitment to empower businesses through technology. We strive to be
            at the forefront of technological advancements, providing our
            clients with the tools and solutions they need to thrive in an
            ever-evolving digital world.
          </div>
        </div>
      </div>

      <div className="flex sm:flex-col max-w-[1320px] w-auto p-[40px] gap-[40px]  border-solid ">
        <div>
          <CustomImage
            src={card3}
            alt="CustomImage"
            style={{
              filter: isNightMode ? "brightness(0) invert(1)" : "none",
            }}
          />
        </div>
        <div className="flex flex-col items-start gap-[18px] flex-[1_0_0]">
          <div
            className={`text-[31px] font-bold leading-[130%] ${
              isNightMode ? "text-[#0000000]" : "text-[#090F5B]"
            }`}
          >
            Our Value
          </div>

          <div
            className={`self-stretch text-[20px] font-semibold leading-[180%] ${
              isNightMode ? "text-[#0000000]" : "text-[#777777]"
            }`}
          >
            At the heart of [Company Name]'s mission is the unwavering
            commitment to empower businesses through technology. We strive to be
            at the forefront of technological advancements, providing our
            clients with the tools and solutions they need to thrive in an
            ever-evolving digital world.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCards;
