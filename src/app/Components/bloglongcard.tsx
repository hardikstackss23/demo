"use client"
import React from "react";
import CustomImage from "./CustomImage";
import frame from "../../../public/aseets/svg/blog_frame.svg";
import person1 from "../../../public/aseets/svg/person-1.svg";
import Link from "next/link";
import { useNightMode } from "./NightModeContext";

const bloglongcard = () => {
  const { isNightMode } = useNightMode();
  return (
    <Link href="/blog/blogdetail">
    <div className="flex justify-center mt-[60px]">
      <div className="rounded-[16px] border-[1px] sm:flex-col sm:mx-4  border-[solid] border-[#BFBFBF] md:w-[720px] lg:w-[944px] xl:w-[1240px] flex ">
        <div className="">
          <CustomImage
            src={frame}
            alt="img"
            className="sm:rounded-tl-[16px] sm:rounded-tr-[16px] md:rounded-tl-[16px] md:rounded-bl-[16px] w-[900px] h-[100%] object-cover"
          />
        </div>
        <div className="inline-flex flex-col items-start gap-[24px] sm:p-[10px] md:p-[10px] lg:p-[20px] 2xl:pl-[40px] 2xl:pr-[121px] 2xl:py-[40px]">
          <div className="flex flex-col items-start gap-[14px]">
            <div className={` xl:text-[21px] lg:text-[18px] not-italic font-medium leading-[28px]
            ${
              isNightMode ? "text-[#ffffff]" : "text-[#7E34FF]"
            }`}
          >
              React
            </div>
            <div className={`  xl:text-[34px] lg:text-[28px] not-italic font-bold leading-[48px] sm:leading-[28px]
               ${
                isNightMode ? "text-[#ffffff]" : "text-[#25414E]"
              }`}
            >
              10 tips on improving warehouse efficiency product.
            </div>
            <div className={` xl:text-[16px] lg:text-[12px] not-italic font-light leading-[28px] 
               ${
                isNightMode ? "text-[#fff]" : "text-[#777]"
              }`}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and...
            </div>
          </div>

          <div className="flex justify-between items-end md:w-[365px] lg:w-[465px] xl:w-[565px]">
            <div className="flex  justify-between items-end flex-shrink-0 self-stretch">
              <div className="flex items-start gap-[14px]">
                <div>
                  <CustomImage src={person1} alt="img" />
                </div>
                <div className="flex flex-col items-start gap-[2px] sm:gap-0">
                  <div className={` text-[16px] not-italic font-medium leading-[27px]
                     ${
                      isNightMode ? "text-[#ffffff]" : "text-[#090F5B]"
                    }`}
                  >
                    Joel Taylor
                  </div>
                  <div className={`lg:text-[14px] md:text-[11px] sm:text-[14px] not-italic font-normal leading-[27px]
                     ${
                      isNightMode ? "text-[#ffffff]" : "text-[#A5A5A5]"
                    }`}
                    >
                    Sr. Billing Engineer at Github
                  </div>
                  <div className={` text-[14px] md:hidden not-italic font-normal leading-[27px]
                    ${
                      isNightMode ? "text-[#ffffff]" : "text-[#A5A5A5]"
                    }`}
                    >
                    Jan 13, 2022 - 6 min read
                  </div>
                </div>
              </div>
            </div>
            <div className={` lg:text-[14px] sm:hidden md:text-[11px]  not-italic font-normal leading-[27px]
              ${
                isNightMode ? "text-[#ffffff]" : "text-[#A5A5A5]"
              }`}
              >
              Jan 13, 2022 - 6 min read
            </div>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default bloglongcard;
