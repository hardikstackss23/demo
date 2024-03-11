"use client";
import React, { useState } from "react";
import UpButton from "../../../public/aseets/svg/upButton.svg";
import UpButtonWhite from "../../../public/aseets/svg/upButtonWhite.svg";
import DownButton from "../../../public/aseets/svg/downButton.svg";
import DownButtonWhite from "../../../public/aseets/svg/downButtonWhite.svg";
import Slider1 from "../../../public/aseets/svg/Sliderdesign1.svg";
import Slider2 from "../../../public/aseets/svg/Sliderdesign2.svg";
import Slider3 from "../../../public/aseets/svg/Sliderdesign3.svg";
import Slider1White from "../../../public/aseets/svg/Sliderdesign1White.svg";
import Slider2White from "../../../public/aseets/svg/Sliderdesign2White.svg";
import Slider3White from "../../../public/aseets/svg/Sliderdesign3White.svg";
import CustomImage from "./CustomImage";
import { useNightMode } from "./NightModeContext";
import { gsap } from "gsap";

const BannerDropDown = () => {
  const [mobileAppDropdownVisible, setMobileAppDropdownVisible] =
    useState(false);
  const [webDevDropdownVisible, setWebDevDropdownVisible] = useState(false);
  const [thirdDropdownVisible, setThirdDropdownVisible] = useState(false);
  const { isNightMode } = useNightMode();

  const toggleMobileAppDropdown = () => {
    setMobileAppDropdownVisible(!mobileAppDropdownVisible);
    if (webDevDropdownVisible) {
      setWebDevDropdownVisible(false);
    }
    if (thirdDropdownVisible) {
      setThirdDropdownVisible(false);
    }
  };

  const toggleWebDevDropdown = () => {
    setWebDevDropdownVisible(!webDevDropdownVisible);
    if (mobileAppDropdownVisible) {
      setMobileAppDropdownVisible(false);
    }
    if (thirdDropdownVisible) {
      setThirdDropdownVisible(false);
    }
  };

  const toggleThirdDropdown = () => {
    setThirdDropdownVisible(!thirdDropdownVisible);
    if (mobileAppDropdownVisible) {
      setMobileAppDropdownVisible(false);
    }
    if (webDevDropdownVisible) {
      setWebDevDropdownVisible(false);
    }
  };
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-0 ">
      <div
        className={` text-2xl md:text-5xl not-italic font-extrabold mt-6 md:ml-14 ${
          isNightMode ? "text-[#0000000]" : "text-[#090F5B]"
        }`}
      >
        We can help you
      </div>
      {/* First Dropdown */}
      <div className="flex cursor-pointer border-b-[#BFBFBF] border-b border-solid flex-col items-center gap-2.5 pb-10 mt-16 md:mx-10"
       onClick={toggleMobileAppDropdown}>
        <div className="flex w-full justify-between items-center">
          <div
            className={`flex items-start gap-2 flex-1 ${
              isNightMode ? "text-[#0000000]" : "text-[#090F5B]"
            }`}
          >
            <div className="text-lg md:text-3xl not-italic font-extrabold">
              01.
            </div>
            <div className="text-lg md:text-3xl not-italic font-extrabold">
              Mobile App
            </div>
          </div>

          <div
            className={`w-8 h-8 md:w-10 md:h-10 rotate-90 shrink-0 cursor-pointer ${
              mobileAppDropdownVisible ? "rotate-icon-1" : ""
            }`}
           
          >
            <CustomImage
              src={
                mobileAppDropdownVisible
                  ? isNightMode
                    ? DownButtonWhite
                    : UpButton
                  : isNightMode
                  ? UpButtonWhite
                  : DownButton
              }
              alt="CustomImage 2"
            />
          </div>
        </div>

        <div
          className={`dropdown-content-1 overflow-hidden ${
            mobileAppDropdownVisible ? "visible" : "hidden"
          }`}
        >
          <div className={`dropdown-content-2 overflow-hidden`}>
            <div className="flex flex-col md:flex-row items-start gap-10 xl:px-20">
              <div
                className={`flex flex-col items-start gap-4 md:gap-8 ${
                  isNightMode ? "text-[#0000000]" : "text-[#777777]"
                }`}
              >
                <div className=" text-lg md:text-xl not-italic font-semibold leading-[180%]">
                  Mobile app development is the creation of software
                  applications for smartphones and tablets. It plays a vital
                  role in our digital lives,
                </div>
                <div className="flex flex-col items-start gap-4 px-2  text-lg md:text-xl not-italic font-semibold leading-[180%] md:px-6">
                  <li>Android App</li>
                  <li>iOS App</li>
                  <li>Hybrid App</li>
                  <li>React Native App</li>
                  <li>Flutter App</li>
                  <li>IONIC App</li>
                </div>
              </div>
              <div className="w-full md:w-auto h-auto items-center justify-center shrink-0">
                <CustomImage
                  src={isNightMode ? Slider1White : Slider1}
                  alt="Slider CustomImage"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Dropdown */}
      <div className="flex cursor-pointer border-b-[#BFBFBF] border-b border-solid flex-col items-center gap-2.5 pb-10 mt-16 md:mx-10"
      onClick={toggleWebDevDropdown}>
        <div className="flex w-full justify-between items-center">
          <div
            className={`flex items-start gap-2 flex-1 ${
              isNightMode ? "text-[#0000000]" : "text-[#090F5B]"
            }`}
          >
            <div className="text-lg md:text-3xl not-italic font-extrabold">
              02.
            </div>
            <div className="text-lg md:text-3xl not-italic font-extrabold">
              Web Development
            </div>
          </div>

          <div
            className={`w-8 h-8 md:w-10 md:h-10 rotate-90 shrink-0 cursor-pointer ${
              webDevDropdownVisible ? "rotate-icon-2" : ""
            }`}
            
          >
            <CustomImage
              src={
                webDevDropdownVisible
                  ? isNightMode
                    ? DownButtonWhite
                    : UpButton
                  : isNightMode
                  ? UpButtonWhite
                  : DownButton
              }
              alt="CustomImage 2"
            />
          </div>
        </div>

        <div
          className={`dropdown-content-2 overflow-hidden ${
            webDevDropdownVisible ? "visible" : "hidden"
          }`}
        >
          <div className={`dropdown-content-2 overflow-hidden`}>
            <div className="flex flex-col md:flex-row items-start gap-10 xl:px-20">
              <div
                className={`flex flex-col items-start gap-4 md:gap-8 ${
                  isNightMode ? "text-[#0000000]" : "text-[#777777]"
                }`}
              >
                <div className=" text-lg md:text-xl not-italic font-semibold leading-[180%]">
                  Mobile app development is the creation of software
                  applications for smartphones and tablets. It plays a vital
                  role in our digital lives,
                </div>
                <div className="flex flex-col items-start gap-4 px-2  text-lg md:text-xl not-italic font-semibold leading-[180%] md:px-6">
                  <li>MEAN/MERN</li>
                  <li>PHP- LARAVEL</li>
                  <li>WordPress</li>
                  <li>.Net</li>
                  <li>Magento</li>
                  <li>Shopify</li>
                  <li>Woo Commerce</li>
                </div>
              </div>
              <div className="w-full md:w-auto h-auto items-center justify-center shrink-0">
                <CustomImage
                  src={isNightMode ? Slider2White : Slider2}
                  alt="Slider CustomImage"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex cursor-pointer border-b-[#BFBFBF] border-b border-solid flex-col items-center gap-2.5 pb-10 mt-16 md:mx-10"
       onClick={toggleThirdDropdown}>
        <div className="flex w-full justify-between items-center">
          <div
            className={`flex items-start gap-2 flex-1 ${
              isNightMode ? "text-[#0000000]" : "text-[#090F5B]"
            }`}
          >
            <div className="text-lg md:text-3xl not-italic font-extrabold">
              03.
            </div>
            <div className="text-lg md:text-3xl not-italic font-extrabold">
              UI/UX Design
            </div>
          </div>

          <div
            className={`w-8 h-8 md:w-10 md:h-10 rotate-90 shrink-0 cursor-pointer ${
              thirdDropdownVisible ? "rotate-icon-3" : ""
            }`}
           
          >
            <CustomImage
              src={
                thirdDropdownVisible
                  ? isNightMode
                    ? DownButtonWhite
                    : UpButton
                  : isNightMode
                  ? UpButtonWhite
                  : DownButton
              }
              alt="CustomImage 2"
            />
          </div>
        </div>

        <div
          className={`dropdown-content-3 overflow-hidden ${
            thirdDropdownVisible ? "visible" : "hidden"
          }`}
        >
          <div className={`dropdown-content-2 overflow-hidden`}>
            <div className="flex flex-col md:flex-row items-start gap-10 xl:px-20">
              <div
                className={`flex flex-col items-start gap-4 md:gap-8 ${
                  isNightMode ? "text-[#0000000]" : "text-[#777777]"
                }`}
              >
                <div className=" text-lg md:text-xl not-italic font-semibold leading-[180%]">
                  Mobile app development is the creation of software
                  applications for smartphones and tablets. It plays a vital
                  role in our digital lives,
                </div>
                <div className="flex flex-col items-start gap-4 px-2  text-lg md:text-xl not-italic font-semibold leading-[180%] md:px-6">
                  <li>UI/UX</li>
                  <li>Graphic</li>
                  <li>Prototyping</li>
                </div>
              </div>
              <div className="w-full md:w-auto h-auto items-center justify-center shrink-0">
                <CustomImage
                  src={isNightMode ? Slider3White : Slider3}
                  alt="Slider CustomImage"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerDropDown;
