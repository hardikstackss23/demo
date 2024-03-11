"use client"
import React from 'react'
import {motion, AnimatePresence} from "framer-motion"
import AboutHeader from '../Components/AboutHeader'
import AboutPhoto from '../Components/AboutPhoto'
import AboutCards from '../Components/AboutCards'
import AboutMessage from '../Components/AboutMessage'
import AboutJoin from '../Components/AboutJoin'
import FooterCard from '../Components/FooterCard'
import Footer from '../Components/Footer'

const page = () => {
  return (
    <AnimatePresence mode='wait'>
    <motion.div
     initial={{ opacity: 0, y: 20 }}
     animate={{ opacity: 1, y: 0 }}
     exit={{ opacity: 0, y: -20 }}
     transition={{ duration: 0.5, delay: 0.1 }}
    >
     <AboutHeader/>
     <AboutPhoto/>
     <AboutCards/>
     <AboutMessage/>
     <AboutJoin/>
     <FooterCard/>
     <Footer/>
    </motion.div>
    </AnimatePresence>
  )
}

export default page