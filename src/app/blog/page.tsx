"use client";
import React, { useState, useEffect } from "react";
import Blogheader from "../components/blogheader";
import Blognav from "../components/blognav";
import Blogshortcard from "../components/blogshortcard";
import Bloglongcard from "../components/bloglongcard";
import FooterCard from "../components/FooterCard";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useNightMode } from "../components/NightModeContext";
import "../globals.css";
import Loader from '../components/loader/loader'

const Page = () => {
  const { isNightMode } = useNightMode();
  const [showThirdCard, setShowThirdCard] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleViewMore = () => {
    setLoading(true);
    setTimeout(() => {
      setShowThirdCard(true);
      setLoading(false);
    }, 2000); 
  };
  useEffect(() => {
    const button = document.querySelector(".primary-button");
    const item = document.querySelector(".primary-button .round");

    const handleMouseEnter = (event) => {
      button.classList.add("animate");

      const buttonX = event.offsetX;
      const buttonY = event.offsetY;

      if (buttonY < 24) {
        item.style.top = 0 + "px";
      } else if (buttonY > 30) {
        item.style.top = 48 + "px";
      }

      item.style.left = buttonX + "px";
      item.style.width = "1px";
      item.style.height = "1px";
    };

    const handleMouseLeave = (event) => {
      button.classList.remove("animate");

      const buttonX = event.offsetX;
      const buttonY = event.offsetY;

      if (buttonY < 24) {
        item.style.top = 0 + "px";
      } else if (buttonY > 30) {
        item.style.top = 48 + "px";
      }
      item.style.left = buttonX + "px";
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Blogheader />
        <Blognav />
        <Bloglongcard />
        <Blogshortcard />
        <Blogshortcard />
        {showThirdCard && <Blogshortcard />}
        {!showThirdCard && (
          <>
            {loading ? (
              <Loader/>
            ) : (
              <div id="button-container" className="flex justify-center mt-10">
                <button
                  onClick={handleViewMore}
                  className={`primary-button
                ${
                  isNightMode
                    ? "text-[#ffffff] border-[1px] border-[solid] border-[hsla(0,0%,100%,.2)] rounded-[500px]"
                    : "text-[#000000] border-[1px] border-[solid] border-[rgba(3,3,15,.2)] rounded-[500px]"
                }`}
                >
                  View More
                  <span className="round" />
                </button>
              </div>
            )}
          </>
        )}
        <FooterCard />
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Page;
