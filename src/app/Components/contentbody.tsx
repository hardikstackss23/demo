"use client";
import React from "react";
import { useNightMode } from "./NightModeContext";
import CustomImage from "./CustomImage";
import phone from "../../../public/aseets/svg/phone.svg";
import msg from "../../../public/aseets/svg/message.svg";
import location from "../../../public/aseets/svg/location.svg";
import color from "../../../public/aseets/svg/color.svg";

const contentbody = () => {
  const { isNightMode } = useNightMode();
  return (
    <div className="flex mt-[75px] sm:mt-[50px] items-center  justify-between mb-[300px] sm:mb-[150px] 2xl:justify-center sm:items-center sm:justify-center ">
      <div className="flex flex-row lg:gap-[48px] md:gap-[0px] lg:ml-[50px] xl:ml-[150px] sm:flex-col sm:items-center sm:justify-center ">
        <div className="flex flex-col items-start gap-[26px]">
          <div className="flex p-[20px] flex-col items-start gap-[10px] self-stretch rounded-[17px] ">
            <div className="flex items-center gap-[18px]">
              <div>
                <CustomImage
                  src={phone}
                  alt="CustomImage"
                  style={{
                    filter: isNightMode ? "brightness(0) invert(1)" : "none",
                  }}
                />
              </div>
              <div className="flex flex-col items-start gap-[4px]">
                <div
                  className={`text-center  text-[18px] not-italic font-semibold leading-[130%]
              ${isNightMode ? "text-[#FFFFFF]" : "text-[#102632]"}`}
                >
                  Phone Number
                </div>
                <div
                  className={`text-center  text-[18px] not-italic font-normal leading-[160%]
                 ${isNightMode ? "text-[#FFF]" : "text-[#777]"}`}
                >
                  +91 9313980442
                </div>
              </div>
            </div>
          </div>
          <div className="flex p-[20px] flex-col items-start gap-[10px] self-stretch rounded-[17px] ">
            <div className="flex items-center gap-[18px]">
              <div>
                <CustomImage
                  src={msg}
                  alt="CustomImage"
                  style={{
                    filter: isNightMode ? "brightness(0) invert(1)" : "none",
                  }}
                />
              </div>
              <div className="flex flex-col items-start gap-[4px]">
                <div
                  className={` text-center  text-[18px] not-italic font-semibold leading-[130%]
               ${isNightMode ? "text-[#FFFFFF]" : "text-[#102632]"}`}
                >
                  Our Email
                </div>
                <div
                  className={` text-center  text-[18px] not-italic font-normal leading-[160%]
                 ${isNightMode ? "text-[#FFF]" : "text-[#777]"}`}
                >
                  hr@stackss.tech
                </div>
              </div>
            </div>
          </div>
          <div className="flex p-[20px] flex-col items-start gap-[10px] self-stretch rounded-[17px] ">
            <div className="flex items-center gap-[18px]">
              <div>
                <CustomImage
                  src={location}
                  alt="CustomImage"
                  style={{
                    filter: isNightMode ? "brightness(0) invert(1)" : "none",
                  }}
                />
              </div>
              <div className="flex flex-col items-start gap-[4px]">
                <div
                  className={` text-center  text-[18px] not-italic font-semibold leading-[130%]
               ${isNightMode ? "text-[#FFFFFF]" : "text-[#102632]"}`}
                >
                  Our Location
                </div>
                <div
                  className={` text-start w-[228px]  text-[18px] not-italic font-normal leading-[160%]
                   ${isNightMode ? "text-[#FFF]" : "text-[#777]"}`}
                >
                  723 Shivalik Shilp Iskcon Cross Rd, Sanidhya, Ahmedabad, Gujarat 380015,
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-[25px] sm:p-[20px] md:p-[0px]">
          <div className="flex flex-col items-start gap-[8px]">
            <div
              className={`text-[#000]  text-[28px] sm:text-[22px] not-italic font-extrabold leading-[52px]
           ${isNightMode ? "text-[#FFF]" : "text-[#000]"}`}
            >
              Let’s start with your name
            </div>
            <div
              className={`text-[#BFBFBF]  text-[34px] sm:text-[28px] not-italic font-extrabold leading-[52px]
              ${isNightMode ? "text-[#FFFFFF]" : "text-[#BFBFBF]"}`}
            >
              John Doe
            </div>
          </div>
          <div className="flex flex-col items-start gap-[8px]">
            <div
              className={`text-[28px] sm:text-[22px] not-italic font-extrabold leading-[52px]
            ${isNightMode ? "text-[#FFF]" : "text-[#000]"}`}
            >
              Enter email Id
            </div>
            <div
              className={` text-[34px] sm:text-[28px] not-italic font-extrabold leading-[52px]
             ${isNightMode ? "text-[#FFFFFF]" : "text-[#BFBFBF]"}`}
            >
              johndoe@gmail.com
            </div>
          </div>
          <div className="flex flex-col items-start gap-[8px]">
            <div
              className={`text-[28px] sm:text-[22px] not-italic font-extrabold leading-[52px]
             ${isNightMode ? "text-[#FFF]" : "text-[#000]"}`}
            >
              Mobile Number
            </div>
            <div
              className={` text-[34px] sm:text-[28px]  not-italic font-extrabold leading-[52px]
                ${isNightMode ? "text-[#FFFFFF]" : "text-[#BFBFBF]"}`}
            >
              +912725971431
            </div>
          </div>
          <div className="flex flex-col items-start gap-[8px]">
            <div
              className={`text-[28px] sm:text-[22px] not-italic font-extrabold leading-[52px]
            ${isNightMode ? "text-[#FFF]" : "text-[#000]"}`}
            >
              Comment
            </div>
            <div
              className={`text-[34px] sm:text-[28px]  not-italic font-extrabold leading-[52px]
             ${isNightMode ? "text-[#FFFFFF]" : "text-[#BFBFBF]"}`}
            >
              Tell something here....
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden md:hidden lg:block 2xl:hidden">
        <CustomImage
          src={color}
          alt="CustomImage"
          style={{
            filter: isNightMode ? "brightness(0) invert(1)" : "none",
          }}
        />
      </div>
    </div>
  );
};

export default contentbody;
