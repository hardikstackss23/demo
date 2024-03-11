"use client"
import React from "react";
import CustomImage from "./CustomImage";
import Portfolio1 from "../../../public/aseets/svg/Portfolio-1.svg";
import { useNightMode } from "./NightModeContext";
import Link from "next/link";

const SinglePortfolio = () => {
  const { isNightMode } = useNightMode();

  return (
    <Link href="/portfolio/portfoliodetails">
    <div className="container mx-auto mt-24 px-4 md:px-6 lg:px-24 cursor-pointer">
      <div>
        <CustomImage src={Portfolio1} alt="CustomImage" />
      </div>

      <div className="flex p-[16px] flex-col items-start gap-[12px] self-stretch sm:p-0 sm:mt-8">
        <div className={`text-[24px] not-italic font-semibold leading-[28px]
        ${
          isNightMode ? "text-[#0000000]" : "text-[#090F5B]"
        }`}>
          A redesign concept of the Swell’s Entertainment mobile app
        </div>
        <div className={`text-[18px] not-italic font-semibold leading-[180%]
        ${
          isNightMode ? "text-[#0000000]" : "text-[#777777]"
        }`}
      >
          Transforming ideas into powerful digital products that redefine
          industry standards while establishing a distinct brand presence
          through innovative IT solutions
        </div>
        <div className="flex items-start gap-[18px] sm:gap-[5px]">
          <div className="flex px-[25px] py-[8px] justify-center items-center gap-[10px] rounded-[60px] bg-[#EBFCFF] sm:px-auto">
            <div className="text-[#2EABC1] text-[14px] sm:text-[11px] not-italic font-semibold leading-[180%]">
              Mobile Design
            </div>
          </div>
          <div className="flex px-[25px] py-[8px] justify-center items-center gap-[10px] rounded-[60px] bg-[#EBFCFF] sm:px-auto">
            <div className="text-[#2EABC1] text-[14px] sm:text-[11px] not-italic font-semibold leading-[180%]">
              Mobile Design
            </div>
          </div>
          <div className="flex px-[25px] py-[8px] justify-center items-center gap-[10px] rounded-[60px] bg-[#EBFCFF] sm:px-auto">
            <div className="text-[#2EABC1] text-[14px] sm:text-[11px] not-italic font-semibold leading-[180%]">
              Mobile Design
            </div>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default SinglePortfolio;
