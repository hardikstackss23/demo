"use client";
import React from "react";
import CustomImage from "./CustomImage";
import { useMediaQuery } from "@react-hook/media-query";
import SwiperCore from "swiper/core";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import blog1 from "../../../public/aseets/png/blog-1.png";
import blog2 from "../../../public/aseets/png/blog-2.png";
import blog3 from "../../../public/aseets/png/blog-3.png";
import person1 from "../../../public/aseets/svg/person-1.svg";
import Array from "../../../public/aseets/svg/buttoarrow.svg";
import "../globals.css";
import { useNightMode } from "./NightModeContext";
import Link from "next/link";

SwiperCore.use([Pagination, A11y]);

const BannerBlog = () => {
  const { isNightMode } = useNightMode();
  const isMobile = useMediaQuery("(max-width: 768px)");
  if (!isMobile) {
    return (
      <div className="flex flex-col items-center justify-center">
        <div className=" mx-auto px-4 md:px-0 lg:px-10 flex flex-col gap-14 sm:w-full md:w-auto lg:w-auto xl:w-[1200px]">
          <div
            className={`text-2xl md:text-5xl not-italic items-start justify-start font-extrabold mt-6 md:ml-14 ${
              isNightMode ? "text-[#0000000]" : "text-[#090F5B]"
            }`}
          >
            Recent Blogs
          </div>
          <div className="flex flex-row justify-center items-center gap-4">
            <div className="flex items-start">
              <div className="border rounded-2xl border-solid border-[#BFBFBF] w-auto h-auto pb-4">
                <div className="flex justify-center items-center shrink-0 ">
                  <CustomImage
                    src={blog1}
                    alt="CustomImage 1"
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                </div>
                <div className="flex w-auto flex-col items-start gap-6 px-5 py-0 mt-5">
                  <div className="flex flex-col items-start gap-2.5 self-stretch">
                    <div className="flex items-center gap-[110px]">
                      <div
                        className={`text-base not-italic font-medium leading-7 ${
                          isNightMode ? "text-[#0000000]" : "text-[#090F5B]"
                        }`}
                      >
                        React
                      </div>
                      <div
                        className={`text-base not-italic font-normal leading-[27px] ${
                          isNightMode ? "text-[#0000000]" : "text-[#777777]"
                        }`}
                      >
                        Jan 13, 2022 - 6 min read
                      </div>
                    </div>
                    <div className=" text-[28px] not-italic font-bold leading-[34px] capitalize self-stretch">
                      10 tips on improving ware efficiency product.
                    </div>
                    <div className={`text-base not-italic font-light leading-7 self-stretch ${
              isNightMode ? "text-[#0000000]" : "text-[#777777]"
            }`}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and...
                    </div>
                  </div>
                  <div className="flex justify-between items-end self-stretch">
                    <div className="flex items-start gap-3.5 flex-[1_0_0]">
                      <div className="rounded-[55px]">
                        <CustomImage
                          src={person1}
                          alt="CustomImage 1"
                          className="w-full h-full object-cover object-center"
                        />
                      </div>

                      <div className="flex flex-col items-start gap-0.5">
                        <div className=" text-base not-italic font-medium leading-[27px]">
                          Joel Taylor
                        </div>
                        <div className=" text-sm not-italic font-normal leading-[27px]">
                          Sr. Billing Engineer at Github
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-start">
              <div className="border rounded-2xl border-solid border-[#BFBFBF] w-auto h-auto pb-4">
                <div className="flex justify-center items-center shrink-0 ">
                  <CustomImage
                    src={blog2}
                    alt="CustomImage 1"
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                </div>
                <div className="flex w-auto flex-col items-start gap-6 px-5 py-0 mt-5">
                  <div className="flex flex-col items-start gap-2.5 self-stretch">
                    <div className="flex items-center gap-[110px]">
                      <div
                        className={`text-base not-italic font-medium leading-7 ${
                          isNightMode ? "text-[#0000000]" : "text-[#090F5B]"
                        }`}
                      >
                        React
                      </div>
                      <div
                        className={`text-base not-italic font-normal leading-[27px] ${
                          isNightMode ? "text-[#0000000]" : "text-[#777777]"
                        }`}
                      >
                        Jan 13, 2022 - 6 min read
                      </div>
                    </div>
                    <div className=" text-[28px] not-italic font-bold leading-[34px] capitalize self-stretch">
                      10 tips on improving ware efficiency product.
                    </div>
                    <div className={`text-base not-italic font-light leading-7 self-stretch ${
              isNightMode ? "text-[#0000000]" : "text-[#777777]"
            }`}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and...
                    </div>
                  </div>
                  <div className="flex justify-between items-end self-stretch">
                    <div className="flex items-start gap-3.5 flex-[1_0_0]">
                      <div className="rounded-[55px]">
                        <CustomImage
                          src={person1}
                          alt="CustomImage 1"
                          className="w-full h-full object-cover object-center"
                        />
                      </div>

                      <div className="flex flex-col items-start gap-0.5">
                        <div className=" text-base not-italic font-medium leading-[27px]">
                          Joel Taylor
                        </div>
                        <div className=" text-sm not-italic font-normal leading-[27px]">
                          Sr. Billing Engineer at Github
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-start">
              <div className="border rounded-2xl border-solid border-[#BFBFBF] w-auto h-auto pb-4">
                <div className="flex justify-center items-center shrink-0 ">
                  <CustomImage
                    src={blog3}
                    alt="CustomImage 1"
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                </div>
                <div className="flex w-auto flex-col items-start gap-6 px-5 py-0 mt-5">
                  <div className="flex flex-col items-start gap-2.5 self-stretch">
                    <div className="flex items-center gap-[110px]">
                      <div
                        className={` text-base not-italic font-medium leading-7 ${
                          isNightMode ? "text-[#0000000]" : "text-[#090F5B]"
                        }`}
                      >
                        React
                      </div>
                      <div
                        className={`text-base not-italic font-normal leading-[27px] ${
                          isNightMode ? "text-[#0000000]" : "text-[#777777]"
                        }`}
                      >
                        Jan 13, 2022 - 6 min read
                      </div>
                    </div>
                    <div className=" text-[28px] not-italic font-bold leading-[34px] capitalize self-stretch">
                      10 tips on improving ware efficiency product.
                    </div>
                    <div className={`text-base not-italic font-light leading-7 self-stretch ${
              isNightMode ? "text-[#0000000]" : "text-[#777777]"
            }`}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and...
                    </div>
                  </div>
                  <div className="flex justify-between items-end self-stretch">
                    <div className="flex items-start gap-3.5 flex-[1_0_0]">
                      <div className="rounded-[55px]">
                        <CustomImage
                          src={person1}
                          alt="CustomImage 1"
                          className="w-full h-full object-cover object-center"
                        />
                      </div>

                      <div className="flex flex-col items-start gap-0.5">
                        <div className=" text-base not-italic font-medium leading-[27px]">
                          Joel Taylor
                        </div>
                        <div className=" text-sm not-italic font-normal leading-[27px]">
                          Sr. Billing Engineer at Github
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link href="/blog">
        <div className="flex justify-center items-center w-[10rem] gap-2.5 px-6 py-4 rounded-[82px] bg-[#7d34ff] mt-10">
          <div className="items-center gap-1.5">
            <div className="text-white text-center text-lg not-italic font-bold leading-[150%]">
              View More
            </div>
          </div>
        </div>
        </Link>
      </div>
    );
  }

  return (
    <div className="swiper-container">
      <div className="flex flex-col items-center justify-center mb-5">
        <div className=" mx-auto px-6 md:px-0 lg:px-10 flex flex-col gap-14 sm:w-full md:w-auto lg:w-auto xl:w-[1200px]">
          <div
            className={`text-2xl md:text-5xl not-italic items-start justify-start font-extrabold mt-6 md:ml-14 ${
              isNightMode ? "text-[#0000000]" : "text-[#090F5B]"
            }`}
          >
            Recent Blogs
          </div>
        </div>
      </div>

      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
      >
        <SwiperSlide>
          <div className="flex items-start px-5">
            <div className="border rounded-2xl border-solid border-[#BFBFBF] w-auto h-auto pb-4">
              <div className="flex justify-center items-center shrink-0 ">
                <CustomImage
                  src={blog1}
                  alt="CustomImage 1"
                  className="w-full h-full object-cover rounded-t-2xl"
                />
              </div>
              <div className="flex w-auto flex-col items-start gap-6 px-5 py-0 mt-5">
                <div className="flex flex-col items-start gap-2.5 self-stretch">
                  <div className="flex items-center gap-[110px]">
                    <div
                      className={` text-base not-italic font-medium leading-7 ${
                        isNightMode ? "text-[#0000000]" : "text-[#090F5B]"
                      }`}
                    >
                      React
                    </div>
                    <div
                      className={`text-base not-italic font-normal leading-[27px] ${
                        isNightMode ? "text-[#0000000]" : "text-[#777777]"
                      }`}
                    >
                      Jan 13, 2022 - 6 min read
                    </div>
                  </div>
                  <div className=" text-[28px] not-italic font-bold leading-[34px] capitalize self-stretch">
                    10 tips on improving ware efficiency product.
                  </div>
                  <div className={`text-base not-italic font-light leading-7 self-stretch ${
              isNightMode ? "text-[#0000000]" : "text-[#777777]"
            }`}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and...
                  </div>
                </div>
                <div className="flex justify-between items-end self-stretch">
                  <div className="flex items-start gap-3.5 flex-[1_0_0]">
                    <div className="rounded-[55px]">
                      <CustomImage
                        src={person1}
                        alt="CustomImage 1"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    <div className="flex flex-col items-start gap-0.5">
                      <div className=" text-base not-italic font-medium leading-[27px]">
                        Joel Taylor
                      </div>
                      <div className=" text-sm not-italic font-normal leading-[27px]">
                        Sr. Billing Engineer at Github
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-start px-5">
            <div className="border rounded-2xl border-solid border-[#BFBFBF] w-auto h-auto pb-4">
              <div className="flex justify-center items-center shrink-0 ">
                <CustomImage
                  src={blog2}
                  alt="CustomImage 1"
                  className="w-full h-full object-cover rounded-t-2xl"
                />
              </div>
              <div className="flex w-auto flex-col items-start gap-6 px-5 py-0 mt-5">
                <div className="flex flex-col items-start gap-2.5 self-stretch">
                  <div className="flex items-center gap-[110px]">
                    <div
                      className={`  text-base not-italic font-medium leading-7
                    ${isNightMode ? "text-[#0000000]" : "text-[#090F5B]"}`}
                    >
                      React
                    </div>
                    <div
                      className={`text-base not-italic font-normal leading-[27px] ${
                        isNightMode ? "text-[#0000000]" : "text-[#777777]"
                      }`}
                    >
                      Jan 13, 2022 - 6 min read
                    </div>
                  </div>
                  <div className=" text-[28px] not-italic font-bold leading-[34px] capitalize self-stretch">
                    10 tips on improving ware efficiency product.
                  </div>
                  <div className={`text-base not-italic font-light leading-7 self-stretch ${
              isNightMode ? "text-[#0000000]" : "text-[#777777]"
            }`}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and...
                  </div>
                </div>
                <div className="flex justify-between items-end self-stretch">
                  <div className="flex items-start gap-3.5 flex-[1_0_0]">
                    <div className="rounded-[55px]">
                      <CustomImage
                        src={person1}
                        alt="CustomImage 1"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    <div className="flex flex-col items-start gap-0.5">
                      <div className=" text-base not-italic font-medium leading-[27px]">
                        Joel Taylor
                      </div>
                      <div className=" text-sm not-italic font-normal leading-[27px]">
                        Sr. Billing Engineer at Github
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-start px-5">
            <div className="border rounded-2xl border-solid border-[#BFBFBF] w-auto h-auto pb-4">
              <div className="flex justify-center items-center shrink-0 ">
                <CustomImage
                  src={blog3}
                  alt="CustomImage 1"
                  className="w-full h-full object-cover rounded-t-2xl"
                />
              </div>
              <div className="flex w-auto flex-col items-start gap-6 px-5 py-0 mt-5">
                <div className="flex flex-col items-start gap-2.5 self-stretch">
                  <div className="flex items-center gap-[110px]">
                    <div
                      className={`  text-base not-italic font-medium leading-7 ${
                        isNightMode ? "text-[#0000000]" : "text-[#090F5B]"
                      }`}
                    >
                      React
                    </div>
                    <div
                      className={`text-base not-italic font-normal leading-[27px] ${
                        isNightMode ? "text-[#0000000]" : "text-[#777777]"
                      }`}
                    >
                      Jan 13, 2022 - 6 min read
                    </div>
                  </div>
                  <div className=" text-[28px] not-italic font-bold leading-[34px] capitalize self-stretch">
                    10 tips on improving ware efficiency product.
                  </div>
                  <div className={`text-base not-italic font-light leading-7 self-stretch ${
              isNightMode ? "text-[#0000000]" : "text-[#777777]"
            }`}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and...
                  </div>
                </div>
                <div className="flex justify-between items-end self-stretch">
                  <div className="flex items-start gap-3.5 flex-[1_0_0]">
                    <div className="rounded-[55px]">
                      <CustomImage
                        src={person1}
                        alt="CustomImage 1"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    <div className="flex flex-col items-start gap-0.5">
                      <div className=" text-base not-italic font-medium leading-[27px]">
                        Joel Taylor
                      </div>
                      <div className=" text-sm not-italic font-normal leading-[27px]">
                        Sr. Billing Engineer at Github
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerBlog;
