"use client"
import React from 'react'
import {motion, AnimatePresence} from "framer-motion"
import AboutHeader from '../components/AboutHeader'
import AboutPhoto from '../components/AboutPhoto'
import AboutCards from '../components/AboutCards'
import AboutMessage from '../components/AboutMessage'
import AboutJoin from '../components/AboutJoin'
import FooterCard from '../components/FooterCard'
import Footer from '../components/Footer'

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