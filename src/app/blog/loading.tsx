"use client"
import React, { useEffect } from 'react';
import gsap from 'gsap';
import '../AnimatedCircles.css';

const loading = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1
    });

    tl.to('.a', {
      duration: 1,
      x: 100,
      scale: 0.5
    }, 'step1').to('.b', {
      duration: 1,
      x: -100,
      scale: 2
    }, 'step1');
    tl.to('.a', {
      duration: 1,
      x: 0,
      scale: 1,
      zIndex: 2,
    }, 'step2').to('.b', {
      duration: 1,
      x: 0,
      scale: 1
    }, 'step2');
  }, []); // Empty array means this effect runs once after initial render

  return (
    <div className="containerr">
      {/* blue */}
      <span className="circlee a"></span>
      {/* red */}
      <span className="circlee b"></span>
    </div>
  );
}

export default loading;
