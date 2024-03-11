"use client"
import React from "react";
import PortfolioHeader from "../components/PortfolioHeader";
import SinglePortfolio from "../components/SinglePortfolio";
import DoublePortfolio from "../components/DoublePortfolio";
import FooterCard from "../components/FooterCard";
import Footer from "../components/Footer";
import Portfoliodetails from "../components/portfoliodetails";
import Careerheader from "../components/careerheader";
import Careerjob from "../components/careerjob";
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
