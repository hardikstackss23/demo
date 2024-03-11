"use client";
import React from "react";
import Contentheader from "../Components/contentheader";
import Contentbody from "../Components/contentbody";
import Footer from "../Components/Footer";
import { motion, AnimatePresence } from "framer-motion";

const page = () => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Contentheader />
        <Contentbody />
        <Footer paddingTop="customValue" />
      </motion.div>
    </AnimatePresence>
  );
};

export default page;
