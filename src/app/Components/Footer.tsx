"use client";
import React from "react";
import CustomImage from "./CustomImage";
import mobile from "../../../public/aseets/svg/mobile.svg";
import email from "../../../public/aseets/svg/email.svg";
import logostackss from "../../../public/aseets/svg/logo_stackss.svg";
import logostacksswhite from "../../../public/aseets/svg/logo_stacksswhite.svg";
import fb from "../../../public/aseets/svg/facebook.svg";
import insta from "../../../public/aseets/svg/instagram.svg";
import linkd from "../../../public/aseets/svg/linkedinn.svg";
import { useNightMode } from "./NightModeContext";
import Link from "next/link";

const Footer = ({ paddingTop }) => {
  const { isNightMode } = useNightMode();

  const defaultPaddingTopStyles = {
    paddingTop: "15rem",
  };

  const customPaddingTopStyles = {
    paddingTop: "5rem",
  };

  const footerStyles = {
    ...defaultPaddingTopStyles,
    ...(paddingTop ? customPaddingTopStyles : {}),
  };

  return (
    <div
      style={footerStyles}
      className={`w-full py-8 gap-[62px] md:gap-[32px] md:pb-10 justify-center items-center sm:px-4 sm:pt-40 sm:mt-[-6rem] md:pt-60 md:mt-[-10rem] md:px-10 
    ${isNightMode ? "bg-[#292929]" : "bg-[#F0F0F0]"}`}
    >
      <div className="self-stretch xl:gap-[60px] md:gap-0 flex sm:flex-col md:flex-col lg:flex-row md:justify-start md:items-start lg:justify-center lg:items-center ">
        <div className="mb-8 md:mb-0 ">
          <div className="mb-6">
            <div className="relative">
              <CustomImage
                src={isNightMode ? logostacksswhite : logostackss}
                alt="img"
              />
            </div>
          </div>
          <div
            className={`w-[352px] text-base font-medium leading-relaxed ${
              isNightMode ? "text-[#CACACA]" : "text-[#777777]"
            } `}
          >
            723 Shivalik Shilp Iskcon Cross Rd, Sanidhya, Ahmedabad, Gujarat 380015,
          </div>
          <div className="flex gap-3 mt-[24px]">
            <div className="relative rounded-[47px]">
              <CustomImage src={fb} alt="img" />
            </div>
            <div className="relative rounded-[80px]">
              <CustomImage src={insta} alt="img" />
            </div>
            <div className="relative rounded-[76px]">
              <CustomImage src={linkd} alt="img" />
            </div>
          </div>
        </div>
        <div className="md:flex md:gap-10 ">
          <div className="mb-8 md:mb-0">
            <div
              className={`text-lg font-bold leading-normal mb-4 ${
                isNightMode ? "text-white" : "text-black"
              } `}
            >
              Quick Links
            </div>
            <div
              className={`flex flex-col gap-3  ${
                isNightMode ? "text-[#CACACA]" : "text-[#777777]"
              }`}
            >
              <Link href="/">
              <div className=" text-base font-medium leading-relaxed">Home</div>
              </Link>
              <Link href="/about">
              <div className=" text-base font-medium leading-relaxed">
                About Us
              </div>
              </Link>
              <Link href="/letstalk">
              <div className=" text-base font-medium leading-relaxed">
                Contact Us
              </div>   
              </Link>
              <Link href="/portfolio">
              <div className="text-base font-medium leading-relaxed">
                Features
              </div>
              </Link>
            </div>
          </div>
          <div className="mb-8 md:mb-0">
            <div
              className={`text-lg font-bold leading-normal mb-4 ${
                isNightMode ? "text-white" : "text-black"
              } `}
            >
              Contact Us
            </div>
            <div className="flex flex-col gap-3">
              <div
                className={`flex flex-col gap-2  ${
                  isNightMode ? "text-[#CACACA]" : "text-[#777777]"
                }`}
              >
                <div className="flex items-center gap-2">
                  <CustomImage src={mobile} alt="img" />
                  <div className=" text-lg font-semibold leading-loose">
                    +91 9313980442
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <CustomImage src={email} alt="img" />
                  <div className=" text-lg font-semibold leading-loose">
                    hr@stackss.tech
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-[17px] flex">
            <div
              className={`text-lg font-bold leading-normal ${
                isNightMode ? "text-white" : "text-black"
              } `}
            >
              Touch With Us
            </div>

            <div className="w-full h-[55px] rounded-2xl flex-col justify-center items-center gap-2.5 flex">
              <label htmlFor="email" className="sr-only">
                Enter your email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className="w-full h-[40px] p-6 border border-zinc-200 rounded-md"
              />
            </div>
            <div className="w-full h-[55px] p-4 bg-violet-600 rounded-2xl flex-col justify-center items-center gap-2.5 flex">
              <div className="justify-center items-center gap-[9px] inline-flex">
                <div className="text-center text-white text-base leading-normal">
                  Subscribe Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-8 md:mt-12 flex md:flex-row md:justify-around md:items-center sm:flex-col  py-4 px-8">
        <div className="text-neutral-400 text-sm font-medium leading-snug mb-4 md:mb-0 sm:justify-center  sm:flex">
          © Stackss, All rights reserved 2024.
        </div>
        <div className="flex gap-8">
          <div className="text-neutral-400 text-sm font-medium leading-snug">
            Terms & Conditions
          </div>
          <div className="text-neutral-400 text-sm font-medium leading-snug">
            Privacy Policy
          </div>
          <div className="text-neutral-400 text-sm font-medium leading-snug">
            Legal Disclaimer
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
