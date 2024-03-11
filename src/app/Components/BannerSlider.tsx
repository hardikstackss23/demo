"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import Vector from "../../../public/aseets/svg/Vector.svg";
import Image from "next/image";
import { useNightMode } from "./NightModeContext";

const BannerSlider = () => {
  const { isNightMode } = useNightMode();

  return (
    <div className={`swiper-container flex flex-col md:flex-row w-full justify-end items-center shrink-0 pl-0 pr-0 pt-11 pb-[43px] mt-11 ${isNightMode ? "bg-white" : "bg-[#090F5B]"}`}>
      <Marquee autoFill>
      <div className={`text-${isNightMode ? "black" : "white"} flex flex-row gap-4 md:gap-14 text-xl md:text-3xl not-italic font-bold overflow-hidden`}>
          <div>Mobile Development</div>
          <div className="flex items-center">
            <Image src={Vector} alt="Array Image" />
          </div>
          <div>Branding</div>
          <div className="flex items-center">
            <Image src={Vector} alt="Array Image" />
          </div>
          <div>UI/UX Development</div>
          <div className="flex items-center">
            <Image src={Vector} alt="Array Image" />
          </div>
          <div>Web Development</div>
          <div className="flex items-center mr-4 md:mr-14">
            <Image src={Vector} alt="Array Image" />
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default BannerSlider;




