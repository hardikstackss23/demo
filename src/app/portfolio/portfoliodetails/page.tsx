"use client";
import React from "react";
import CustomImage from "../../components/CustomImage";
import test from "../../../../public/aseets/svg/test1.svg";
import frame1 from "../../../../public/aseets/svg/portfoliodetailsFrame1.svg";
import frame2 from "../../../../public/aseets/svg/portfoliodetailsFrame2.svg";
import frame3 from "../../../../public/aseets/svg/portfoliodetailsFrame3.svg";
import frame4 from "../../../../public/aseets/svg/portfoliodetailsFrame4.svg";
import frame5 from "../../../../public/aseets/svg/portfoliodetailsFrame5.svg";
import frame6 from "../../../../public/aseets/svg/portfoliodetailsFrame6.svg";
import frame7 from "../../../../public/aseets/svg/portfoliodetailsFrame7.svg";
import frame8 from "../../../../public/aseets/svg/portfoliodetailsFrame8.svg";
import tablet from "../../../../public/aseets/svg/tablet.svg";
import monitor from "../../../../public/aseets/svg/monitor.svg";
import { useNightMode } from "../../components/NightModeContext";
import Footer from "../../components/Footer";
import FooterCard from "../../components/FooterCard";

const portfoliodetails = () => {
    const { isNightMode } = useNightMode();
  return (
    <>
      <div className="container mx-auto px-4 md:px-6 lg:px-24 mt-[146px]">
        <div className="flex flex-col items-start gap-[25px]">
          <div className="flex flex-col items-start gap-[16px]">
            <div className={` text-[54px] sm:text-[34px] not-italic font-semibold leading-[75px] sm:leading-[55px] self-stretch
              ${
                isNightMode ? "text-[#FFFFFF]" : "text-[#090F5B]"
              }`}>
              A redesign concept of the Swell’s Entertainment mobile app
            </div>
            <div className={`text-[18px] not-italic font-semibold leading-[30px]
               ${
                isNightMode ? "text-[#FFFFFF]" : "text-[#777777]"
              }`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting.
            </div>
          </div>
          <div className="flex items-start gap-[84px] self-stretch">
            <div className="flex items-center gap-[24px] sm:flex-col sm:items-start">
              <div className={` text-[18px] not-italic font-semibold leading-[30px]
               ${
                isNightMode ? "text-[#FFFFFF]" : "text-[#777777]"
              }`}>
                Services
              </div>
              <div className="flex items-start gap-[18px]">
                <div className="flex px-[25px] py-[8px] justify-center items-center gap-[10px] rounded-[60px] bg-[#EBFCFF]">
                  <div className="text-[#2EABC1] text-[14px] not-italic font-semibold leading-[180%]">
                    Mobile Design
                  </div>
                </div>
                <div className="flex px-[25px] py-[8px] justify-center items-center gap-[10px] rounded-[60px] bg-[#EBFCFF]">
                  <div className="text-[#2EABC1] text-[14px] not-italic font-semibold leading-[180%]">
                    User Research
                  </div>
                </div>
                <div className="flex px-[25px] py-[8px] justify-center items-center gap-[10px] rounded-[60px] bg-[#EBFCFF]">
                  <div className="text-[#2EABC1] text-[14px] not-italic font-semibold leading-[180%]">
                    App Design
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[80px] mb-[80px] sm:mb-[20px] sm:mt-[30px]">
        <CustomImage src={test} alt="img" className="w-[100%]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-24 mt-[146px] sm:mt-0">
        <div className="flex flex-col justify-center items-start gap-[32px]">
          <div className="flex  flex-col items-start gap-[9px]">
            <div className={` text-[32px] not-italic font-extrabold leading-[52px]
              ${
                isNightMode ? "text-[#FFFFFF]" : "text-[#090F5B]"
              }`}>
              Scope Of Work.
            </div>
            <div className={`text-[18px] not-italic font-semibold leading-[30px]
              ${
                isNightMode ? "text-[#FFFFFF]" : "text-[#777777]"
              }`}>
              The project involved Graphic designers, UX-UI designers,
              illustrators and developers who combined their efforts to deliver
              a robust digital product. First hand insight into how our
              processes have been implemented in all the projects we’ve worked
              on.
            </div>
          </div>
          <div className="flex items-start gap-[100px] sm:gap-0 sm:items-center sm:justify-center">
            <div className="flex flex-col justify-center items-center gap-[5px]">
              <div className="">
                <CustomImage src={frame1} alt="img"
                style={{
                    filter: isNightMode ? "brightness(85%) invert(1) saturate(0) " : "none",
                  }} />
              </div>
              <div className={`text-center text-[24px] sm:text-[16px] not-italic font-bold leading-[30px]
                ${
                    isNightMode ? "text-[#FFFFFF]" : "text-[#090F5B]"
                  }`}>
                UI Design
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-[5px]">
              <div className="">
                <CustomImage src={frame2} alt="img"
                style={{
                    filter: isNightMode ? "brightness(85%) invert(1) saturate(0) " : "none",
                  }} />
              </div>
              <div className={` text-center text-[24px] sm:text-[16px] not-italic font-bold leading-[30px]
               ${
                isNightMode ? "text-[#FFFFFF]" : "text-[#090F5B]"
              }`}>
                UX Research
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-[5px]">
              <div className="">
                <CustomImage src={frame3} alt="img" 
                style={{
                    filter: isNightMode ? "brightness(85%) invert(1) saturate(0) " : "none",
                  }}/>
              </div>
              <div className={` text-center text-[24px] sm:text-[16px] not-italic font-bold leading-[30px]
                 ${
                    isNightMode ? "text-[#FFFFFF]" : "text-[#090F5B]"
                  }`}>
                Development
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-[64px] mt-[80px] sm:mt-[30px]">
          <div className="flex flex-col items-start gap-[32px] self-stretch">
            <div className={`text-[32px] not-italic font-extrabold leading-[52px]
             ${
                isNightMode ? "text-[#FFFFFF]" : "text-[#090F5B]"
              }`}>
              Challenges
            </div>
            <div className="flex flex-col items-start gap-[16px] self-stretch">
              <div className={` text-[18px] not-italic font-semibold leading-[30px]
                ${
                    isNightMode ? "text-[#FFFFFF]" : "text-[#777777]"
                  }`}>
                The project involved Graphic designers, UX-UI designers,
                illustrators and developers who combined their efforts to
                deliver a robust digital product. First hand insight into how
                our processes have been implemented in all the projects we’ve
                worked on.The project involved Graphic designers, UX-UI
                designers, illustrators and developers who combined their
                efforts to deliver a robust digital product. First hand insight
                into how our processes have been implemented in all the projects
                we’ve worked on.The project involved Graphic designers, UX-UI
                designers, illustrators and developers who combined their
                efforts to deliver a robust digital product. First hand insight
                into how our processes have been implemented in all the projects
                we’ve worked on.The project involved Graphic designers, UX-UI
                designers, illustrators and developers who combined their
                efforts to deliver a robust digital product. First hand insight
                into how our processes have been implemented in all the projects
                we’ve worked on.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-[12px]">
            <div className="flex px-[24px] py-[16px] justify-center items-center gap-[10px]">
              <div>
                <CustomImage src={tablet} alt="img" />
              </div>
              <div className="flex items-center gap-[6px]">
                <div className={`text-center text-[20px] not-italic font-bold leading-[150%]
                  ${
                    isNightMode ? "text-[#FFFFFF]" : "text-[#7E34FF]"
                  }`}>
                  Live website
                </div>
              </div>
            </div>
            <div className="flex px-[24px] py-[16px] justify-center items-center gap-[10px]">
              <div>
                <CustomImage src={monitor} alt="img" />
              </div>
              <div className="flex items-center gap-[6px]">
                <div className={`text-center text-[20px] not-italic font-bold leading-[150%]
                 ${
                    isNightMode ? "text-[#FFFFFF]" : "text-[#7E34FF]"
                  }`}>
                  Download Application
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-[80px] sm:flex-col sm:gap-10 lg:gap-10 md:gap-10 sm:mt-[30px]">
          <div>
            <CustomImage src={frame4} alt="" className="rounded-[32px]" />
          </div>
          <div>
            <CustomImage src={frame5} alt="" className="rounded-[32px]" />
          </div>
        </div>

        <div className="flex justify-center items-center mt-[80px] rounded-[24px] sm:mt-[30px] bg-[#FAFAFA]">
          <div>
            <CustomImage
              src={frame6}
              alt="img"
              className="sm:rounded-[24px] md:rounded-[24px]"
            />
          </div>
        </div>

        <div className="flex justify-between mt-[80px] sm:flex-col sm:gap-10 lg:gap-10 sm:mt-[30px] md:gap-10">
          <div>
            <CustomImage src={frame7} alt="" className="rounded-[32px]" />
          </div>
          <div>
            <CustomImage src={frame8} alt="" className="rounded-[32px]" />
          </div>
        </div>

        <div className="flex flex-col items-start gap-[32px] mt-[80px] sm:mt-[30px]">
          <div className="flex items-start gap-[10px] self-stretch">
            <div className="w-[10px] self-stretch rounded-[8px] bg-[#7E34FF]"></div>
            <div className={` text-[24px] not-italic font-extrabold leading-[32px]
              ${
                isNightMode ? "text-[#FFFFFF]" : "text-[#090F5B]"
              }`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting.
            </div>
          </div>
          <div className={` text-[18px] not-italic font-semibold leading-[30px]
           ${
            isNightMode ? "text-[#FFFFFF]" : "text-[#777777]"
          }`}>
            The project involved Graphic designers, UX-UI designers,
            illustrators and developers who combined their efforts to deliver a
            robust digital product. First hand insight into how our processes
            have been implemented in all the projects we’ve worked on.The
            project involved Graphic designers, UX-UI designers, illustrators
            and developers who combined their efforts to deliver a robust
            digital product. First hand insight into how our processes have been
            implemented in all the projects we’ve worked on.The project involved
            Graphic designers, UX-UI designers, illustrators and developers who
            combined their efforts to deliver a robust digital product. First
            hand insight into how our processes have been implemented in all the
            projects we’ve worked on.
          </div>
        </div>
      </div>
      <FooterCard/>
      <Footer/>

    </>
  );
};

export default portfoliodetails;
