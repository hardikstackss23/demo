"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import { useNightMode } from "./NightModeContext";

const BannerBlogSlider = () => {
  const { isNightMode } = useNightMode();

  return (
    <div className="text-[103.139px] sm:text-[3.125rem] font-extrabold  opacity-[0.15] mt-16">
    <Marquee>
      <span
        className="text-transparent bg-clip-text"
        style={{
          WebkitTextFillColor: "CubeTransparentIcon",
          WebkitTextStroke: isNightMode ? "thin #5CDAF1" : "thin black",
        }}
      >
       BLOGS
      </span>
    </Marquee>
  </div>
  )
}

export default BannerBlogSlider
