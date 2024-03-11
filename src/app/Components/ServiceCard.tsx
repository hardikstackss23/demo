"use client";
import React from "react";
import CustomImage from "./CustomImage";
import frame from "../../../public/aseets/svg/Framesevice.svg";
import frame2 from "../../../public/aseets/svg/service_frame.svg";
import frame3 from "../../../public/aseets/svg/service_frame_2.svg";
import frame4 from "../../../public/aseets/svg/service_frame_3.svg";
import frame5 from "../../../public/aseets/svg/service_frame_4.svg";
import frame6 from "../../../public/aseets/svg/service_frame_5.svg";
import { useNightMode } from "./NightModeContext";

const ServiceCard = () => {
  const { isNightMode } = useNightMode();

  return (
    <div className="container mx-auto sm:px-4 md:px-6 lg:px-20  mt-[8.125rem]">
      <div className="flex flex-col items-start gap-[54px]">
        <div className="flex max-w-[1248px] w-auto items-center">
          <div className="flex w-auto flex-col items-start gap-6 shrink-0">
            <p
              className={`text-5xl not-italic font-extrabold leading-[52px]
            ${isNightMode ? "text-[#0000000]" : "text-[#090F5B]"}`}
            >
              How we do it?
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <div className="flex w-auto sm:flex-col sm:items-start items-center gap-10 p-10 border-b-[1px] border-b-[#BFBFBF]">
            <div className="flex items-center sm:px-0 pl-[21px] pr-[25px] pt-0 pb-[53px] sm:pb-0 rounded-[80px]">
              <CustomImage
                src={frame}
                alt="CustomImage"
                style={{
                  filter: isNightMode ? "brightness(0) invert(1)" : "none",
                }}
              />
            </div>
            <div className="flex flex-col items-start gap-[18px] flex-[1_0_0] sm:flex-col">
              <div
                className={` text-[31px] not-italic font-bold leading-[130%]
                ${isNightMode ? "text-[#0000000]" : "text-[#090F5B]"}`}
              >
                Understand Objectives
              </div>
              <div
                className={` text-xl not-italic font-semibold leading-[180%]
                ${isNightMode ? "text-[#0000000]" : "text-[#777777]"}`}
              >
                As a client-focused web and mobile app development company, we
                gain in-depth insights into your digital requirements, consumer
                behaviours, technology platforms, functionalities, etc., to help
                you gain a competitive edge. This is our approach for developing
                the right user experience, emphasising top-notch aesthetic
                sensibilities that engage your consumers.
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <div className="flex w-auto sm:flex-col sm:items-start items-center gap-10 p-10 border-b-[1px] border-b-[#BFBFBF]">
            <div className="flex items-center sm:px-0 pl-[21px] pr-[25px] pt-0 pb-[53px] sm:pb-0 rounded-[80px]">
              <CustomImage
                src={frame2}
                alt="CustomImage"
                style={{
                  filter: isNightMode ? "brightness(0) invert(1)" : "none",
                }}
              />
            </div>
            <div className="flex flex-col items-start gap-[18px] flex-[1_0_0] sm:flex-col">
              <div
                className={` text-[31px] not-italic font-bold leading-[130%]
                ${isNightMode ? "text-[#0000000]" : "text-[#090F5B]"}`}
              >
                Choose Right ​​​​​​​Technology
              </div>
              <div
                className={` text-xl not-italic font-semibold leading-[180%]
                ${isNightMode ? "text-[#0000000]" : "text-[#777777]"}`}
              >
                Empowered with tech-heavy centricity, our solutions transcend
                the usual methods of solving problems. We ensure a sophisticated
                frontend experience and develop a user-friendly backend by
                considering the bigger picture for tech-focused digital
                transformation that was once impossible.
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <div className="flex w-auto sm:flex-col sm:items-start items-center gap-10 p-10 border-b-[1px] border-b-[#BFBFBF]">
            <div className="flex items-center sm:px-0 pl-[21px] pr-[25px] pt-0 pb-[53px] sm:pb-0 rounded-[80px]">
              <CustomImage
                src={frame3}
                alt="CustomImage"
                style={{
                  filter: isNightMode ? "brightness(0) invert(1)" : "none",
                }}
              />
            </div>
            <div className="flex flex-col items-start gap-[18px] flex-[1_0_0] sm:flex-col">
              <div
                className={` text-[31px] not-italic font-bold leading-[130%]
                ${isNightMode ? "text-[#0000000]" : "text-[#090F5B]"}`}
              >
                Documented Coding
              </div>
              <div
                className={` text-xl not-italic font-semibold leading-[180%]
                ${isNightMode ? "text-[#0000000]" : "text-[#777777]"}`}
              >
                From elegant designs to a custom-coded website, the radical
                development phase is driven by our digital mindfulness to
                translate your digital vision.
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <div className="flex w-auto sm:flex-col sm:items-start items-center gap-10 p-10 border-b-[1px] border-b-[#BFBFBF]">
            <div className="flex items-center sm:px-0 pl-[21px] pr-[25px] pt-0 pb-[53px] sm:pb-0 rounded-[80px]">
              <CustomImage
                src={frame4}
                alt="CustomImage"
                style={{
                  filter: isNightMode ? "brightness(0) invert(1)" : "none",
                }}
              />
            </div>
            <div className="flex flex-col items-start gap-[18px] flex-[1_0_0] sm:flex-col">
              <div
                className={` text-[31px] not-italic font-bold leading-[130%]
                ${isNightMode ? "text-[#0000000]" : "text-[#090F5B]"}`}
              >
                Careful Testing
              </div>
              <div
                className={` text-xl not-italic font-semibold leading-[180%]
                ${isNightMode ? "text-[#0000000]" : "text-[#777777]"}`}
              >
                With our great knowledge in tech engineering, we employ a
                rigorous QA testing process that encompasses testing speed,
                security, user-friendly interface experience, and overall
                functionality and eliminates flaws before the product goes live.
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <div className="flex w-auto sm:flex-col sm:items-start items-center gap-10 p-10 border-b-[1px] border-b-[#BFBFBF]">
            <div className="flex items-center sm:px-0 pl-[21px] pr-[25px] pt-0 pb-[53px] sm:pb-0 rounded-[80px]">
              <CustomImage
                src={frame5}
                alt="CustomImage"
                style={{
                  filter: isNightMode ? "brightness(0) invert(1)" : "none",
                }}
              />
            </div>
            <div className="flex flex-col items-start gap-[18px] flex-[1_0_0] sm:flex-col">
              <div
                className={` text-[31px] not-italic font-bold leading-[130%]
                ${isNightMode ? "text-[#0000000]" : "text-[#090F5B]"}`}
              >
                Successful Deployment
              </div>
              <div
                className={` text-xl not-italic font-semibold leading-[180%]
                ${isNightMode ? "text-[#0000000]" : "text-[#777777]"}`}
              >
                When you decide to work with a thriving web and mobile app
                development company like us, you unlock the best tech-driven
                solutions that stand the test of time across multiple
                environments, including staging and production.
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <div className="flex w-auto sm:flex-col sm:items-start items-center gap-10 p-10">
            <div className="flex items-center sm:px-0 pl-[21px] pr-[25px] pt-0 pb-[53px] sm:pb-0 rounded-[80px]">
              <CustomImage
                src={frame6}
                alt="CustomImage"
                style={{
                  filter: isNightMode ? "brightness(0) invert(1)" : "none",
                }}
              />
            </div>
            <div className="flex flex-col items-start gap-[18px] flex-[1_0_0] sm:flex-col">
              <div
                className={` text-[31px] not-italic font-bold leading-[130%]
                ${isNightMode ? "text-[#0000000]" : "text-[#090F5B]"}`}
              >
                AMC Support
              </div>
              <div
                className={` text-xl not-italic font-semibold leading-[180%]
                ${isNightMode ? "text-[#0000000]" : "text-[#777777]"}`}
              >
                Our technology experts are conversant with cutting-edge
                technology and software trends, maintaining a website and
                ensuring smooth app performance. Moreover, our foolproof AMC
                support lends best-in-class customer assistance equipped with
                hassle-free backend integration for our esteemed patrons.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
