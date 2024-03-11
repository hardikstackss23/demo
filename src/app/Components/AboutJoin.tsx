import React, { useEffect } from 'react';
import { useNightMode } from './NightModeContext';
import '../globals.css';

const AboutJoin = () => {
  const { isNightMode } = useNightMode();

  const handleButtonClick = () => {
    console.log('Button clicked!');
  };

  useEffect(() => {
    const button = document.querySelector('.primary-button');
    const item = document.querySelector('.primary-button .round');

    const handleMouseEnter = (event) => {
      button.classList.add('animate');

      const buttonX = event.offsetX;
      const buttonY = event.offsetY;

      if (buttonY < 24) {
        item.style.top = 0 + 'px';
      } else if (buttonY > 30) {
        item.style.top = 48 + 'px';
      }

      item.style.left = buttonX + 'px';
      item.style.width = '1px';
      item.style.height = '1px';
    };

    const handleMouseLeave = (event) => {
      button.classList.remove('animate');

      const buttonX = event.offsetX;
      const buttonY = event.offsetY;

      if (buttonY < 24) {
        item.style.top = 0 + 'px';
      } else if (buttonY > 30) {
        item.style.top = 48 + 'px';
      }
      item.style.left = buttonX + 'px';
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className='container mx-auto sm:flex-col justify-center flex items-center gap-[172px] sm:gap-11 mt-[7.5rem] sm:mt-[5rem] px-4 sm:px-6 md:px-6 lg:px-8'>
      <div
        className={`sm:text-[30px] md:text-[30px] lg:text-[44px] xl:text-[54px] not-italic font-bold leading-[160%] w-auto max-w-[777px] ${
          isNightMode ? 'text-[#0000000]' : 'text-[#090F5B]'
        }`}
      >
        Join our delightful team and be a stackss.
      </div>

      <div
        id='button-container'
        className={`
          ${
            isNightMode
              ? 'text-[#ffffff] border-[1px] border-[solid] border-[hsla(0,0%,100%,.2)] rounded-[500px]'
              : 'text-[#000000] border-[1px] border-[solid] border-[rgba(3,3,15,.2)] rounded-[500px]'
          }`}
      >
        <button className='primary-button' onClick={handleButtonClick}>
          Join Team
          <span className='round' />
        </button>
      </div>
    </div>
  );
};

export default AboutJoin;
