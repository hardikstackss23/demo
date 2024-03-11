"use client";
import React from "react";
import CustomImage from "./CustomImage";
import FramArrow from "../../../public/aseets/svg/FrameArrow.png";
import GroupColor from "../../../public/aseets/svg/GroupColor.png";
import GroupColor1 from "../../../public/aseets/svg/GroupColor1.png";
import { useNightMode } from "./NightModeContext"; 

const FooterCard = () => {
  const { isNightMode } = useNightMode();

  return (
    <div className="">
      <div
        className={`relative w-auto h-[505px]  sm:h-[427px] sm:mx-4 md:mx-8 lg:mx-8 xl:mx-auto flex flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row mt-[7.313rem] rounded-[35px] ${
          isNightMode
            ? "bg-black border-[3px] border-[solid] border-[#434343]"
            : "bg-[#090f5b]"
        } xl:w-[1200px]`}
      >
        {/* Top Right CustomImage */}
        <div className="absolute top-0 right-0">
          <CustomImage
            src={GroupColor}
            alt="img"
            className="rounded-t-[35px] sm:w-[133.276px] sm:h-[88.849px] h-auto w-auto"
          />
        </div>

        {/* Bottom Left CustomImage */}
        <div className="absolute bottom-0 left-0">
          <CustomImage
            src={GroupColor1}
            alt="img"
            className="rounded-b-[35px] sm:w-[99.276px] sm:h-[78.849px] h-auto w-auto"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col sm:flex-col sm:px-10 md:flex-col lg:flex-row xl:flex-row justify-center mx-4 md:mx-16 lg:mx-32 lg:items-center sm:items-start md:items-start sm:gap-10 md:gap-10 lg:gap-0 xl:gap-14">
          <div className="text-white sm:text-[34px] md:text-[34px] lg:text-[40px] xl:text-[54px] text-[20px] not-italic font-bold md:w-auto lg:w-[677px]">
            Don’t be surprised at how stunning your project.
          </div>

          <div className="flex h-[66px] justify-center items-center gap-2.5 border px-6 rounded-[82px] border-solid border-[#7D34FF] bg-white">
            <div className="flex flex-row gap-1.5">
              <div className="text-[#7D34FF] text-[18px] font-bold">
                View More
              </div>
              <div className="flex items-center gap-2">
                <CustomImage src={FramArrow} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCard;
