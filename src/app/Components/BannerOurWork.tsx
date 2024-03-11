import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import CustomImage from "./CustomImage";
import img1 from "../../../public/aseets/png/ourworkimg-1.png";
import img2 from "../../../public/aseets/png/ourworkimg-2.png";
import img3 from "../../../public/aseets/png/ourworkimg-3.png";
import img4 from "../../../public/aseets/png/ourworkimg-4.png";
import { useNightMode } from "./NightModeContext";
import Buttonarrow from "../../../public/aseets/svg/buttonarrow.svg";

gsap.registerPlugin(ScrollTrigger);
const BannerOurWork = () => {
  const { isNightMode } = useNightMode();
  useEffect(() => {
    console.log("Gsap works");

    const details = gsap.utils.toArray(".details");

    gsap.set(".photo:not(:first-child)", {
      opacity: 1,
      scale: 1,
      clipPath: "circle(0% at 50% 100%)", 
      transformOrigin: "bottom center",
      scale: 1,
    });

    gsap.set(".photo img", {
      y: 5,
    });

    const animation = gsap.to(".photo:not(:first-child)", {
      opacity: 1,
      scale: 1,
      duration: 1,
      stagger: 1,
      clipPath: "circle(100% at 50% 80%)",
      scale: 1,
      snap: true,
      
      ease: "power1.inOut",
    });

    gsap.to(".photo img", {
      y: -5,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      
    });

    ScrollTrigger.create({
      trigger: ".gallery",
      start: "top top",
      end: "bottom bottom",
      pin: ".right",
      animation: animation,
      scrub: 2,
      
    });

    // Clean up the animations and ScrollTrigger instances on unmount
    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  

  return (
    <>
      <div className="gallery">
        <div className="left">
          <div className="detailsWrapper">
            <div className="details d1">
              <div className=" flex flex-col items-start gap-4">
                <div
                  className={`text-lg not-italic font-bold ${
                    isNightMode ? "text-[#0000000]" : "text-[#777777]"
                  }`}
                >
                  Entertainment
                </div>
                <div className="flex flex-col items-start gap-2">
                  <div
                    className={`text-[24px] md:text-[24px]  xl:text-[34px] not-italic font-extrabold ${
                      isNightMode ? "text-[#0000000]" : "text-[#090F5B]"
                    }`}
                  >
                    A redesign concept of the Swell’s Entertainment mobile app
                  </div>
                  <div
                    className={`text-base md:text-[16px]  xl:text-xl not-italic font-semibold ${
                      isNightMode ? "text-[#0000000]" : "text-[#777777]"
                    }`}
                  >
                    Transforming ideas into powerful digital products that
                    redefine industry standards while establishing a distinct
                    brand presence through innovative IT solutions
                  </div>
                  <div className="flex items-start gap-2 md:gap-4">
                    <div className="flex justify-center bg-[#EBFCFF] items-center gap-2.5 px-4 md:px-[25px] py-2 rounded-[60px]">
                      <div className="text-xs md:text-sm text-[#2EABC1] not-italic font-semibold">
                        Mobile Design
                      </div>
                    </div>
                    <div className="flex justify-center bg-[#EBFCFF] items-center gap-2.5 px-4 md:px-[25px] py-2 rounded-[60px]">
                      <div className="text-xs md:text-sm not-italic text-[#2EABC1] font-semibold">
                        User Research
                      </div>
                    </div>
                    <div className="flex justify-center bg-[#EBFCFF] items-center gap-2.5 px-4 md:px-[25px] py-2 rounded-[60px]">
                      <div className="text-xs md:text-sm not-italic text-[#2EABC1] font-semibold">
                        App Design
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center mt-4 md:mt-8 px-6 py-4 rounded-[82px] bg-[#7D34FF]">
                  <div className="flex items-center gap-2">
                    <div className="text-white text-center text-sm sm:text-base md:text-lg not-italic font-bold">
                      View More
                    </div>
                    <div className="flex items-center gap-2">
                      <CustomImage src={Buttonarrow} alt="CustomImage 1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="details d2">
              <div className=" flex flex-col items-start gap-4">
                <div
                  className={`text-lg not-italic font-bold ${
                    isNightMode ? "text-[#0000000]" : "text-[#777777]"
                  }`}
                >
                  Financial
                </div>
                <div className="flex flex-col items-start gap-2">
                  <div
                    className={`text-[24px] md:text-[24px]  xl:text-[34px] not-italic font-extrabold ${
                      isNightMode ? "text-[#0000000]" : "text-[#090F5B]"
                    }`}
                  >
                    An employee engagement and training web app
                  </div>
                  <div
                    className={`text-base md:text-[16px]  xl:text-xl not-italic font-semibold ${
                      isNightMode ? "text-[#0000000]" : "text-[#777777]"
                    }`}
                  >
                    Transforming ideas into powerful digital products that
                    redefine industry standards while establishing a distinct
                    brand presence through innovative IT solutions
                  </div>
                  <div className="flex items-start gap-2 md:gap-4">
                    <div className="flex justify-center bg-[#EBFCFF] items-center gap-2.5 px-4 md:px-[25px] py-2 rounded-[60px]">
                      <div className="text-xs md:text-sm text-[#2EABC1] not-italic font-semibold">
                        Mobile Design
                      </div>
                    </div>
                    <div className="flex justify-center bg-[#EBFCFF] items-center gap-2.5 px-4 md:px-[25px] py-2 rounded-[60px]">
                      <div className="text-xs md:text-sm not-italic text-[#2EABC1] font-semibold">
                        User Research
                      </div>
                    </div>
                    <div className="flex justify-center bg-[#EBFCFF] items-center gap-2.5 px-4 md:px-[25px] py-2 rounded-[60px]">
                      <div className="text-xs md:text-sm not-italic text-[#2EABC1] font-semibold">
                        App Design
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center mt-4 md:mt-8 px-6 py-4 rounded-[82px] bg-[#7D34FF]">
                  <div className="flex items-center gap-2">
                    <div className="text-white text-center text-sm sm:text-base md:text-lg not-italic font-bold ">
                      View More
                    </div>
                    <div className="flex items-center gap-2">
                      <CustomImage src={Buttonarrow} alt="CustomImage 1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="details d3">
              <div className="flex flex-col items-start gap-4">
                <div
                  className={`text-lg not-italic font-bold ${
                    isNightMode ? "text-[#0000000]" : "text-[#777777]"
                  }`}
                >
                  Financial
                </div>
                <div className="flex flex-col items-start gap-2">
                  <div
                    className={`text-[24px] md:text-[24px]  xl:text-[34px] not-italic font-extrabold ${
                      isNightMode ? "text-[#0000000]" : "text-[#090F5B]"
                    }`}
                  >
                    An employee engagement and training web app
                  </div>
                  <div
                    className={`text-base md:text-[16px]  xl:text-xl not-italic font-semibold ${
                      isNightMode ? "text-[#0000000]" : "text-[#777777]"
                    }`}
                  >
                    Transforming ideas into powerful digital products that
                    redefine industry standards while establishing a distinct
                    brand presence through innovative IT solutions
                  </div>
                  <div className="flex items-start gap-2 md:gap-4">
                    <div className="flex justify-center bg-[#EBFCFF] items-center gap-2.5 px-4 md:px-[25px] py-2 rounded-[60px]">
                      <div className="text-xs md:text-sm text-[#2EABC1] not-italic font-semibold">
                        Mobile Design
                      </div>
                    </div>
                    <div className="flex justify-center bg-[#EBFCFF] items-center gap-2.5 px-4 md:px-[25px] py-2 rounded-[60px]">
                      <div className="text-xs md:text-sm not-italic text-[#2EABC1] font-semibold">
                        User Research
                      </div>
                    </div>
                    <div className="flex justify-center bg-[#EBFCFF] items-center gap-2.5 px-4 md:px-[25px] py-2 rounded-[60px]">
                      <div className="text-xs md:text-sm not-italic text-[#2EABC1] font-semibold">
                        App Design
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center mt-4 md:mt-8 px-6 py-4 rounded-[82px] bg-[#7D34FF]">
                  <div className="flex items-center gap-2">
                    <div className="text-white text-center text-sm sm:text-base md:text-lg not-italic font-bold">
                      View More
                    </div>
                    <div className="flex items-center gap-2">
                      <CustomImage src={Buttonarrow} alt="CustomImage 1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="details d4">
              <div className="flex flex-col items-start gap-4">
                <div
                  className={`text-lg not-italic font-bold ${
                    isNightMode ? "text-[#0000000]" : "text-[#777777]"
                  }`}
                >
                  Financial
                </div>
                <div className="flex flex-col items-start gap-2">
                  <div
                    className={`text-[24px] md:text-[24px]  xl:text-[34px] not-italic font-extrabold ${
                      isNightMode ? "text-[#0000000]" : "text-[#090F5B]"
                    }`}
                  >
                    An employee engagement and training web app
                  </div>
                  <div
                    className={`md:text-[16px]  xl:text-xl not-italic font-semibold ${
                      isNightMode ? "text-[#0000000]" : "text-[#777777]"
                    }`}
                  >
                    Transforming ideas into powerful digital products that
                    redefine industry standards while establishing a distinct
                    brand presence through innovative IT solutions
                  </div>
                  <div className="flex items-start gap-2 md:gap-4">
                    <div className="flex justify-center bg-[#EBFCFF] items-center gap-2.5 px-4 md:px-[25px] py-2 rounded-[60px]">
                      <div className="text-xs md:text-sm text-[#2EABC1] not-italic font-semibold">
                        Mobile Design
                      </div>
                    </div>
                    <div className="flex justify-center bg-[#EBFCFF] items-center gap-2.5 px-4 md:px-[25px] py-2 rounded-[60px]">
                      <div className="text-xs md:text-sm not-italic text-[#2EABC1] font-semibold">
                        User Research
                      </div>
                    </div>
                    <div className="flex justify-center bg-[#EBFCFF] items-center gap-2.5 px-4 md:px-[25px] py-2 rounded-[60px]">
                      <div className="text-xs md:text-sm not-italic text-[#2EABC1] font-semibold">
                        App Design
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center mt-4 md:mt-8 px-6 py-4 rounded-[82px] bg-[#7D34FF]">
                  <div className="flex items-center gap-2">
                    <div className="text-white text-center text-sm sm:text-base md:text-lg not-italic font-bold">
                      View More
                    </div>
                    <div className="flex items-center gap-2">
                      <CustomImage src={Buttonarrow} alt="CustomImage 1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="photos">
            <div className="photos-box">
              <div className="photo col1">
                <CustomImage src={img1} alt="CustomImage 1" />
              </div>
              <div className="photo col2">
                <CustomImage src={img2} alt="CustomImage 1" />
              </div>
              <div className="photo col3">
                <CustomImage src={img3} alt="CustomImage 1" />
              </div>
              <div className="photo col4">
                <CustomImage src={img4} alt="CustomImage 1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerOurWork;
