"use client"
import React from 'react'
import ServiceHeader from '../Components/ServiceHeader'
import ServiceServe from '../Components/ServiceServe'
import ServiceCard from '../Components/ServiceCard'
import ServiceLogo from '../Components/ServiceLogo'
import FooterCard from '../Components/FooterCard'
import Footer from '../Components/Footer'
import {motion, AnimatePresence} from "framer-motion"

const page = () => {
  return (
    <AnimatePresence mode='wait'>
    <motion.div
     initial={{ opacity: 0, y: 20 }}
     animate={{ opacity: 1, y: 0 }}
     exit={{ opacity: 0, y: -20 }}
     transition={{ duration: 0.5, delay: 0.1 }}
    >
     <ServiceHeader/>
     <ServiceServe/>
     <ServiceCard/>
     <ServiceLogo/>
     <FooterCard/>
     <Footer/>
    </motion.div>
    </AnimatePresence>
  )
}

export default page
