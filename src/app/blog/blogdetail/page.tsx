"use client";
import React from "react";
import Image from "next/image";
import person from "../../../../public/aseets/svg/person-1.svg";
import testimg from "../../../../public/aseets/svg/testimg.svg";
import { useNightMode } from "../../Components/NightModeContext";
import Footer from "../../Components/Footer";
import FooterCard from "../../Components/FooterCard";
import Blogshortcard from "../../Components/blogshortcard";
import Link from "next/link";

const blogdetail = () => {
  const { isNightMode } = useNightMode();
  return (
    <>
      <div className="container mx-auto px-4 md:px-6  mt-[146px]">
        <div className="inline-flex flex-col items-start gap-[50px]">
          <div className="flex flex-col items-start gap-[16px]">
            <div
              className={`text-[21px] not-italic font-medium leading-[28px]"
          ${isNightMode ? "text-[#FFFFFF]" : "text-[#7E34FF]"}`}
            >
              React
            </div>
            <div className="flex flex-col items-start gap-[16px] self-stretch">
              <div
                className={`text-[54px] sm:text-[44px] not-italic font-bold md:leading-[75px] sm:leading-[55px] self-stretch"
              ${isNightMode ? "text-[#FFFFFF]" : "text-[#090F5B]"}`}
              >
                Let's do some magic... together with Ludus Live Collaboration
              </div>
            </div>
            <div className="flex justify-between items-end">
              <div className="flex w-[563px] sm:w-[300px] justify-between items-end flex-shrink-0 self-stretch">
                <div className="flex items-start gap-[14px] flex-[1_0_0]">
                  <div>
                    <Image src={person} alt="img" />
                  </div>
                  <div className="flex flex-col items-start gap-[2px]">
                    <div
                      className={`text-[16px] not-italic font-medium leading-[27px]"
                   ${isNightMode ? "text-[#FFFFFF]" : "text-[#090F5B]"}`}
                    >
                      Joel Taylor
                    </div>
                    <div
                      className={`text-[14px] not-italic font-normal leading-[27px]"
                    ${isNightMode ? "text-[#FFFFFF]" : "text-[#A5A5A5]"}`}
                    >
                      Sr. Billing Engineer at Github
                    </div>
                    <div
                      className={`md:hidden text-[14px] not-italic font-normal leading-[27px]"
                  ${isNightMode ? "text-[#FFFFFF]" : "text-[#A5A5A5]"}`}
                    >
                      Jan 13, 2022 - 6 min read
                    </div>
                  </div>
                </div>
                <div
                  className={`sm:hidden text-[14px] not-italic font-normal leading-[27px]"
               ${isNightMode ? "text-[#FFFFFF]" : "text-[#A5A5A5]"}`}
                >
                  Jan 13, 2022 - 6 min read
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[24px]">
            <div className="flex justify-center items-center">
              <Image src={testimg} alt="img" />
            </div>
            <div className="flex px-[24px] py-[34px] flex-col justify-center items-center gap-[10px] self-stretch">
              <p
                className={`text-[16px] not-italic font-medium leading-[28px]"
               ${isNightMode ? "text-[#FFFFFF]" : "text-[#777777]"}`}
              >
                Ludus is a presentation tool that combines creativity,
                simplicity, and... a bit of magic! But Ludus is also much more
                than that. It is a space where your creativity has no limits. It
                is a software that allows you to work with Figma, Adobe XD,
                Photoshop, Illustrator, and many others. In short... create
                everything. Freedom is the new flexibility. Create for everyone:
                for speakers, for designers, for students, for agencies. And
                now...create together! Ludus launches its Live Collaboration.
                You already knew it on Google Slides or Figma, it's now
                available on Ludus! Are you a designer, a creative, a
                commercial, or an agency? We all agree that we work well alone.
                But when you're with others, you can go further.A document or
                presentation produced by several people is always more valuable.
                For several reasons: Everyone brings their own ideas and
                creativity. Each person feeds the document with his or her own
                perspective as a designer, PM, accountant, strategist, etc. If
                this presentation is to be presented externally and reflect your
                company's image, what could be more essential than for it to be
                a reflection of your team and the work you do together? You are
                overwhelmed with assignments, quick and efficient work is
                required. During the production of your document, you need a lot
                of information that you don't have. No more emails and messages
                that get lost on Slack, invite your colleagues/partners directly
                in your document. They easily join your work in Ludus and things
                finally take 3 times less time when you all work together Ludus
                is a presentation tool that combines creativity, simplicity,
                and... a bit of magic! But Ludus is also much more than that. It
                is a space where your creativity has no limits. It is a software
                that allows you to work with Figma, Adobe XD, Photoshop,
                Illustrator, and many others. In short... create everything.
                Freedom is the new flexibility. Create for everyone: for
                speakers, for designers, for students, for agencies. And
                now...create together! Ludus launches its Live Collaboration.
                You already knew it on Google Slides or Figma, it's now
                available on Ludus! Are you a designer, a creative, a
                commercial, or an agency? We all agree that we work well alone.
                But when you're with others, you can go further.A document or
                presentation produced by several people is always more valuable.
                For several reasons: Everyone brings their own ideas and
                creativity. Each person feeds the document with his or her own
                perspective as a designer, PM, accountant, strategist, etc. If
                this presentation is to be presented externally and reflect your
                company's image, what could be more essential than for it to be
                a reflection of your team and the work you do together? You are
                overwhelmed with assignments, quick and efficient work is
                required. During the production of your document, you need a lot
                of information that you don't have. No more emails and messages
                that get lost on Slack, invite your colleagues/partners directly
                in your document. They easily join your work in Ludus and things
                finally take 3 times less time when you all work together
              </p>
            </div>
          </div>
        </div>
        <div
          className={` text-2xl md:text-5xl not-italic items-start justify-start font-extrabold mt-6 md:ml-10 2xl:ml-[130px] ${
            isNightMode ? "text-[#0000000]" : "text-[#090F5B]"
          }`}
        >
          Find out more blog
        </div>
      </div>
      <Blogshortcard />
      <Link href="/blog">
        <div className="mx-auto flex justify-center items-center w-[10rem] gap-2.5 px-6 py-4 rounded-[82px] bg-[#7d34ff] mt-10">
          <div className="items-center gap-1.5">
            <div className="text-white text-center text-lg not-italic font-bold leading-[150%]">
              View More
            </div>
          </div>
        </div>
      </Link>
      <FooterCard />
      <Footer />
    </>
  );
};

export default blogdetail;
