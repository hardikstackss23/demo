"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as SvgComponent from "../../../public/aseets/svg/svgcomponent";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../globals.css";

import { applyNightModeAnimation } from "./gsapAnimations";
import NightModeToggle from "./NightModeToggle";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isNightMode, setIsNightMode] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    applyNightModeAnimation(isNightMode);
  }, [isNightMode]);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
    console.log("Night mode toggled:", !isNightMode);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const handleSidebarClick = (event) => {
    // Prevent the event from propagating up and closing the sidebar
    event.stopPropagation();
  };

  const handleLinkClick = () => {
    // Close the sidebar when a link is clicked on a mobile screen
    if (isMobile) {
      closeSidebar();
    }
  };

  return (
    <header>
      <nav>
        <div
          className={`relative navbar-container ${
            isMobile && sidebarOpen ? "overflow-hidden" : ""
          } ${isNightMode ? "night-mode" : ""} `}
        >
          {/* Normal Navigation */}
          <div
            className={`flex top-0 fixed w-full justify-between px-20 sm:px-4 py-6 bg-opacity-50 shadow-lg backdrop-blur-lg ${
              isMobile ? "flex-col" : ""
            }`}
          >
            {/* Logo and Icons */}
            <div>
              <Link
                href="/"
                className={`flex items-center space-x-3 ${
                  isMobile ? "mb-3" : ""
                }`}
              >
                {isNightMode ? (
                  <>
                    <SvgComponent.Svg1logoWhite />
                    <SvgComponent.Svg2logoWhite />
                  </>
                ) : (
                  <>
                    <SvgComponent.Svg1 />
                    <SvgComponent.Svg2 />
                  </>
                )}
              </Link>
            </div>

            {/* Navigation Links */}
            {!isMobile && (
              <div
                className={`flex items-center space-x-10 text-lg not-italic font-semibold ${
                  isNightMode ? "text-white" : "text-black"
                }`}
              >
               
                <Link href="/about" legacyBehavior>
                  <a className={pathname === "/about" ? "active" : ""}>
                    About us
                  </a>
                </Link>
                <Link href="/services" legacyBehavior>
                  <a className={pathname === "/services" ? "active" : ""}>
                    Services
                  </a>
                </Link>
                <Link href="/blog" legacyBehavior>
                  <a className={pathname === "/blog" ? "active" : ""}>Blog</a>
                </Link>
                <Link href="/portfolio" legacyBehavior>
                  <a className={pathname === "/portfolio" ? "active" : ""}>
                    Portfolio
                  </a>
                </Link>
                <div className="cursor-pointer" onClick={toggleNightMode}>
                  <NightModeToggle />
                </div>
                <Link href="/letstalk" legacyBehavior>
                  <a className={pathname === "/letstalk" ? "active" : ""}>
                    <div className="flex flex-row gap-3 items-center">
                      <SvgComponent.MsgSvg />
                      <span
                        className={`text-purple-600 ${
                          isNightMode ? "text-white" : ""
                        }`}
                      >
                        Let’s talk
                      </span>
                    </div>
                  </a>
                </Link>
              </div>
            )}
          </div>
          {/* Mobile Navigation Icon */}
          {isMobile && (
            <div
              className="fixed top-6 right-4 cursor-pointer"
              onClick={toggleSidebar}
              style={{
                filter: isNightMode ? "brightness(0) invert(1)" : "none",
              }}
            >
              {sidebarOpen ? (
                <SvgComponent.CancelSvg
                  onClick={(e) => {
                    e.stopPropagation();
                    closeSidebar();
                  }}
                />
              ) : (
                <SvgComponent.MobileSvg />
              )}
            </div>
          )}

          {isMobile && (
            <div
              className="fixed top-6 right-16 cursor-pointer"
              onClick={toggleNightMode}
            >
              <NightModeToggle />
            </div>
          )}

          {/* Sidebar for mobile */}
          <AnimatePresence>
            {isMobile && sidebarOpen && (
              <motion.div
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "100%" }}
                transition={{ duration: 1, type: "tween", ease: "easeInOut" }}
                className={`fixed top-[81px] bottom-0 right-0 w-full  h-full  z-50
                ${isNightMode ? "bg-black " : "bg-white"}`}
                onClick={handleSidebarClick}
              >
                <motion.div
                  initial={{ opacity: 0, y: "50%" }}
                  animate={{ opacity: 1, y: "0%" }}
                  transition={{
                    delay: 0.1,
                    duration: 0.3,
                    type: "tween",
                    ease: "easeInOut",
                  }}
                  className={`flex flex-col items-start ml-6 space-y-10 text-[28px] not-italic font-semibold leading-[180%] pt-12 ${
                    isNightMode ? "text-white " : "text-black"
                  }`}
                >
                  <Link href="/about" onClick={handleLinkClick}>
                    About us
                  </Link>
                  <Link href="/services" onClick={handleLinkClick}>
                    Services
                  </Link>
                  <Link href="/blog" onClick={handleLinkClick}>
                    Blog
                  </Link>
                  <Link href="/portfolio" onClick={handleLinkClick}>
                    Portfolio
                  </Link>

                  <Link href="/letstalk" onClick={handleLinkClick}>
                    <div className="flex flex-row gap-3 items-center">
                      <SvgComponent.MsgSvg />
                      <span
                        className={`text-purple-600 ${
                          isNightMode ? "text-white" : ""
                        }`}
                      >
                        Let’s talk
                      </span>
                    </div>
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
