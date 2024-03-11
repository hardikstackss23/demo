"use client";
import React from "react";
import CustomImage from "./CustomImage";
import moniter from "../../../public/aseets/svg/monitor.svg";
import teblet from "../../../public/aseets/svg/tablet.svg";
import { useNightMode } from "./NightModeContext";

const ServiceServe = () => {
  const { isNightMode } = useNightMode();

  return (
    <div className=" flex flex-col lg:items-center md:items-start gap-16 mt-[8.313rem] mx-auto justify-center px-4 md:px-6 lg:px-20">
      <div className="flex flex-col items-start gap-6">
        <div className="flex item-center">
          <div className="flex w-full md:w-auto flex-col items-start gap-6 shrink-0">
            <div
              className={`text-5xl not-italic font-extrabold leading-[52px] ${
                isNightMode ? "text-[#0000000]" : "text-[#090F5B]"
              }`}
            >
              <p>What Do We Serve ?</p>
            </div>
          </div>
        </div>

        <div className="flex w-full max-w-[1320px] flex-col items-start gap-7">
          <div
            className={`text-xl not-italic font-semibold leading-[180%] ${
              isNightMode ? "text-[#0000000]" : "text-[#777777]"
            }`}
          >
            Comprehensive technology services that integrate digital
            craftsmanship and business goals. Comprehensive technology services
            that integrate digital craftsmanship and business goals.
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-[100px]">
        <div className="flex flex-col md:flex-col lg:flex-row justify-between max-w-[1320px] md:w-auto lg:w-auto xl:w-[1320px] items-start">
          <div className="flex justify-center items-center gap-5 px-0 py-4 ">
            <CustomImage
              src={moniter}
              alt="CustomImage"
              style={{
                filter: isNightMode ? "brightness(0) invert(1)" : "none",
              }}
            />
            <div className="flex items-center gap-1.5">
              <div
                className={` text-center sm:text-[22px] md:text-[28px] lg:text-[22px] xl:text-[28px] not-italic font-bold leading-[150%] ${
                  isNightMode ? "text-[#0000000]" : "text-[#7E34FF]"
                }`}
              >
                <p>WEB APP DEVELOPMENT</p>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-[87px] sm:gap-auto">
            <div
              className={`flex flex-col items-start gap-[43px] sm:text-[20px] md:text-3xl lg:text-2xl xl:text-3xl font-extrabold 
            ${isNightMode ? "text-[#0000000]" : "text-[#090F5B]"}`}
            >
              <p>MEAN/MERN</p>
              <p>PHP-LARAVEL</p>
              <p>WORDPRESS</p>
            </div>
            <div
              className={`flex flex-col items-start gap-[43px] sm:text-[20px] md:text-3xl lg:text-2xl xl:text-3xl font-extrabold 
               ${isNightMode ? "text-[#0000000]" : "text-[#090F5B]"}`}
            >
              <p>.NET</p>
              <p>MAGENTO</p>
              <p>SHOPIFY WOO COMMERCE</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-col lg:flex-row justify-between max-w-[1320px] md:w-auto lg:w-auto xl:w-[1320px] items-start">
          <div className="flex justify-center items-center gap-5 px-0 py-4 ">
            <CustomImage
              src={teblet}
              alt="CustomImage"
              style={{
                filter: isNightMode ? "brightness(0) invert(1)" : "none",
              }}
            />
            <div className="flex items-center gap-1.5">
              <div
                className={` text-center sm:text-[22px] md:text-[28px] lg:text-[22px] xl:text-[28px] not-italic font-bold leading-[150%] ${
                  isNightMode ? "text-[#0000000]" : "text-[#7E34FF]"
                }`}
              >
                <p>MOBILE APP DEVELOPMENT</p>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-[150px] sm:gap-[100px]">
            <div
              className={`flex flex-col items-start gap-[43px] sm:text-[20px] md:text-3xl lg:text-2xl xl:text-3xl font-extrabold 
            ${isNightMode ? "text-[#0000000]" : "text-[#090F5B]"}`}
            >
              <p>ANDROID</p>
              <p>iOS</p>
              <p>FLUTTER</p>
            </div>
            <div
              className={`flex flex-col items-start gap-[43px] sm:text-[20px] md:text-3xl lg:text-2xl xl:text-3xl font-extrabold 
               ${isNightMode ? "text-[#0000000]" : "text-[#090F5B]"}`}
            >
              <p>REACT-NATIVE APP</p>
              <p>WEARABLE</p>
              <p>ICONIC APP DEVELOPMENT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceServe;
