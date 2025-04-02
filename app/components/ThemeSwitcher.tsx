'use client';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import React, { useState, useEffect } from 'react';

function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(true);
  const [animateRotate, setAnimateRotate] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);

    // Start rotation animation every 10 seconds
    const rotationInterval = setInterval(() => {
      setAnimateRotate(true);

      // Reset animation after it completes
      setTimeout(() => {
        setAnimateRotate(false);
      }, 1000); // Animation takes 1 second
    }, 5000);

    return () => clearInterval(rotationInterval);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className='fixed bottom-4 left-4 z-10'>
      <style jsx>{`
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .icon-container {
          display: inline-block;
        }

        .rotate-animation {
          animation: rotate 1s ease-in-out;
        }
      `}</style>
      <label
        className='switch cursor-pointer w-[30px] h-[30px]'
        onClick={toggleTheme}
      >
        {darkMode ? (
          <div
            className={`icon-container ${
              animateRotate ? 'rotate-animation' : ''
            }`}
          >
            <SunIcon
              color={`${darkMode ? '#ffbf00' : 'black'}`}
              width='25'
              height='25'
            />
          </div>
        ) : (
          <MoonIcon
            color={`${darkMode ? 'white' : 'black'}`}
            width='25'
            height='25'
          />
        )}
      </label>
    </div>
  );
}

export default ThemeSwitcher;
