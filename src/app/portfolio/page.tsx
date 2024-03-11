"use client"
import React from "react";
import PortfolioHeader from "../Components/PortfolioHeader";
import SinglePortfolio from "../Components/SinglePortfolio";
import DoublePortfolio from "../Components/DoublePortfolio";
import FooterCard from "../Components/FooterCard";
import Footer from "../Components/Footer";
import Portfoliodetails from "../Components/portfoliodetails";
import Careerheader from "../Components/careerheader";
import Careerjob from "../Components/careerjob";
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
        <PortfolioHeader />
        <SinglePortfolio />
        <DoublePortfolio />
        <SinglePortfolio />
        <DoublePortfolio />
        <FooterCard />
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default page;
