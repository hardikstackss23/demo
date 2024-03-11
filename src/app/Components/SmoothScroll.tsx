"use client"
import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const lenis = new Lenis({
        lerp: 0.1,
        duration:3,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel:true,
        infinite:false,
        syncTouchLerp:0.1
      });

      lenis.on('scroll', (e) => {
        // console.log(e);
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    }
  }, []);

  return <div>{children}</div>;
};

export default SmoothScroll;
