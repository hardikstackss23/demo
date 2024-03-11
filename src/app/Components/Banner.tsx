"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import CustomImage from "./CustomImage";
import { gsap } from "gsap";
import { useMediaQuery } from "react-responsive";
import Array from "../../../public/aseets/svg/array.svg";
import Svg from "../../../public/RoundText.svg";
import Arraywhite from "../../../public/aseets/svg/arrowwhite.svg";
import Groupwhite from "../../../public/aseets/svg/Groupwhite.svg";
import Buttonarrow from "../../../public/aseets/svg/buttonarrow.svg";
import { useNightMode } from "./NightModeContext";
import "../globals.css";

const Banner = () => {
  const circleRef = useRef(null);
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const { isNightMode } = useNightMode();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const tl = gsap.timeline({ repeat: -1 });
      tl.to(circleRef.current, {
        rotation: 360,
        duration: 4,
        ease: "power2.inOut",
      });
      return () => tl.kill();
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const textAnimation = gsap.timeline();
      // Animation for each text element
      textAnimation.fromTo(
        ".text-animation",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.5, duration: 0.5 }
      );

      return () => textAnimation.kill();
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const textAnimation = gsap.timeline();
      // Animation for each text element
      textAnimation.fromTo(
        ".text-animation-1",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.5, duration: 0.5 }
      );

      return () => textAnimation.kill();
    }
  }, []);

  return (
    <div>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div
          className={`flex flex-col gap-12 md:flex-row justify-center items-center pt-10 md:pt-40 mt-2  ${
            isMobile ? "pt-28 " : ""
          }`}
        >
          <div
            className={`flex flex-col items-start md:items-start gap-4  md:text-left ${
              isNightMode ? "text-[#0000000]" : "text-[#090F5B]"
            }`}
          >
            <div className="text-animation text-4xl md:text-4xl lg:text-4xl xl:text-6xl not-italic font-extrabold uppercase ">
              Let us alter your
            </div>
            <div className="text-animation text-4xl md:text-4xl lg:text-4xl xl:text-6xl not-italic font-extrabold uppercase">
              perspective on
            </div>
            <div className="text-animation text-4xl md:text-4xl lg:text-4xl xl:text-6xl not-italic font-extrabold uppercase">
              technology
            </div>
          </div>

          <div
            className={`flex flex-col items-center md:items-start gap-7 mt-6 md:mt-0 ${
              isNightMode ? "text-[#0000000]" : "text-[#777777]"
            }`}
          >
            <div className="text-animation-1 text-lg md:text-xl not-italic font-semibold md:w-[330px] xl:w-[550px] lg:w-[430px]">
              Experience a paradigm shift with us in how you perceive
              technology. We innovate, inspire, and redefine technological
              boundaries for you.
            </div>
            {isMobile ? null : (
              <div className="text-animation-1 animation flex bg-[#7D34FF] text-white justify-center items-center px-6 py-4 rounded-full md:rounded-[82px] mt-4 md:mt-0">
                <p>  Get in touch with us</p>
                <p><Image src={Buttonarrow} alt="Image" draggable={false} /></p>
                
              </div>
            )}
          </div>
        </div>
        <div className="flex items-end justify-end mt-5 z-auto">
          {isMobile ? (
            <div className="flex items-center gap-6">
              <div className="text-animation-1 flex bg-[#7D34FF]  text-white justify-center items-center px-6 py-4 sm:py-4 rounded-full md:rounded-[82px] mt-4 md:mt-0">
                Get in touch with us
                <Image src={Buttonarrow} alt="Image" draggable={false} />
              </div>
              <div className="flex flex-col items-center gap-2 text-animation-1">
                <div className="absolute mt-9 ">
                  {isNightMode ? (
                    <Image
                      src={Arraywhite}
                      alt="ArrayWhite Image"
                      draggable={false}
                    />
                  ) : (
                    <Image src={Array} alt="Array Image" draggable={false} />
                  )}
                </div>
                <div>
                  {isNightMode ? (
                    <Image src={Groupwhite} alt="Image" draggable={false} />
                  ) : (
                    <Image
                      src={Svg}
                      ref={circleRef}
                      alt="Image"
                      draggable={false}
                    />
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-end justify-end mt-5 text-animation-1">
              <div className="absolute mb-12 mr-11">
                {isNightMode ? (
                  <Image
                    src={Arraywhite}
                    alt="ArrayWhite Image"
                    draggable={false}
                  />
                ) : (
                  <Image src={Array} alt="Array Image" draggable={false} />
                )}
              </div>
              <div className="flex items-center">
                {isNightMode ? (
                  <Image src={Groupwhite} alt="Image" draggable={false} />
                ) : (
                  <Image
                    src={Svg}
                    ref={circleRef}
                    alt="Image"
                    draggable={false}
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
