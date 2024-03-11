"use client";
import React from "react";
import { useNightMode } from "./NightModeContext";
import CustomImage from "./CustomImage";
import portfolio2 from "../../../public/aseets/svg/Portfolio-2.svg";
import Link from "next/link";


const DoublePortfolio = () => {
    const { isNightMode } = useNightMode();

  return (
    <Link href="/portfolio/portfoliodetails">
    <div className="container mx-auto mt-6 px-4 md:px-6 lg:px-24 cursor-pointer">
        <div className="flex lg:flex-row gap-[33px] md:flex-col sm:flex-col">
      <div className="flex items-start flex-col gap-[33px] self-stretch">
        <div className="flex flex-col items-start gap-[16px] rounded-[16px]">
          <div className="flex w-auto justify-center items-center">
            <CustomImage src={portfolio2} alt="img" className="object-fill flex" />
          </div>
        </div>
        <div className="flex p-[16px] flex-col items-start gap-[12px] self-stretch sm:p-0">
          <div className={`text-[24px] not-italic font-semibold leading-[38px] w-auto
          ${
            isNightMode ? "text-[#0000000]" : "text-[#090F5B]"
          }`}
        >
            A redesign concept of the Swell’s Entertainment mobile app.
          </div>
          <div className={`text-[18px] not-italic font-semibold leading-[180%] self-stretch
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
      <div className="flex items-start flex-col gap-[33px] self-stretch">
        <div className="flex flex-col items-start gap-[16px] rounded-[16px]">
          <div className="flex w-auto justify-center items-center">
            <CustomImage src={portfolio2} alt="img" />
          </div>
        </div>
        <div className="flex p-[16px] flex-col items-start gap-[12px] self-stretch sm:p-0">
          <div className={`text-[24px] not-italic font-semibold leading-[38px] w-auto
          ${
            isNightMode ? "text-[#0000000]" : "text-[#090F5B]"
          }`}
        >
            A redesign concept of the Swell’s Entertainment mobile app.
          </div>
          <div className={`text-[18px] not-italic font-semibold leading-[180%] self-stretch
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
      </div>
    </div>
    </Link>
  );
};

export default DoublePortfolio;
