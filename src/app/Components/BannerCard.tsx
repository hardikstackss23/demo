import React, { useEffect, useRef } from "react";
import about1 from "../../../public/aseets/png/about1.png";
import about2 from "../../../public/aseets/png/about2.png";
import about3 from "../../../public/aseets/png/about3.png";
import CustomImage from "./CustomImage";
import { useNightMode } from "./NightModeContext";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BannerCard = () => {
  const { isNightMode } = useNightMode();
  const textRef = useRef(null)

  useEffect(() => {
    gsap.utils.toArray(".parallax").forEach((container) => {
      const img = container.querySelector("img");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          scrub: true,
          pin: false,
         
        },
      });

      tl.fromTo(
        img,
        {
          yPercent: -20,
          ease: "none",
        },
        {
          yPercent: 20,
          ease: "none",
        }
      );
    });
  }, []);
  

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-0 ">
      <div
        className={`text-2xl md:text-5xl not-italic font-extrabold mt-6 md:ml-14 ${
          isNightMode ? "text-[#0000000]" : "text-[#090F5B]"
        }`}
      >
        We are a friendly and experienced IT Company
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-12 md:pl-10 md:pr-16 py-6 md:py-0 md:mt-24">
        <div className="flex flex-col md:w-1/2">
          <div className="parallax relative rounded-[190px] md:rounded-[190px] w-full xl:w-[20.75rem] h-[8.063rem] xl:h-[8.063rem] lg:w-[15.75rem] sm:w-[12.563rem] sm:h-[4.563rem] overflow-hidden img-container">
            <CustomImage
              src={about1}
              alt="CustomImage 1"
              className="img absolute bottom-[0] left-[0] w-full  object-cover object-center p-0"
            />
          </div>
          <div className="parallax relative rounded-[190px] md:rounded-[190px] w-full xl:w-[35.5rem] h-[8.75rem] xl:h-[8.75rem] mt-5 lg:w-[25.75rem] sm:w-[21.438rem] sm:h-[5rem] overflow-hidden img-container">
            <CustomImage
              src={about2}
              alt="CustomImage 2"
              className="img absolute bottom-[0] left-[0] w-full  object-cover object-center p-0"
            />
          </div>

          <div className="parallax flex justify-end items-end relative rounded-[190px] md:rounded-[190px] w-full xl:w-[17.375rem] h-[8.063rem] md:h-[8.75rem] mt-5 lg:w-[15.75rem] sm:w-[10.5rem] sm:h-[4.563rem]  overflow-hidden ml-auto">
            <CustomImage
              src={about3}
              alt="CustomImage 3"
              className="img absolute bottom-[0] left-[0] w-full  object-cover object-center p-0"
            />
          </div>
        </div>

        <div
         
          className={`w-full md:w-1/2  text-sm md:text-xl not-italic font-semibold leading-[180%] ${
            isNightMode ? "text-[#0000000]" : "text-[#777777]"
          } `}
        >
          <div>
            At our core, we are an IT firm driven by the mission to empower
            change through groundbreaking technological solutions. With a
            relentless pursuit of innovation, we strive to reshape industries,
            enhance efficiency, and unlock new possibilities.
          </div>
          <div className="mt-4 md:mt-8">
            Our aim is to provide cutting-edge software and services that
            empower our clients and enhance their digital presence.
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
