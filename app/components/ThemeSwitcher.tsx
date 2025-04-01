'use client';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import React, { useState, useEffect } from 'react';

function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className='fixed bottom-4 left-4 z-10'>
      <label
        className='switch cursor-pointer w-[30px] h-[30px]'
        onClick={toggleTheme}
      >
        {darkMode ? (
          <SunIcon
            color={`${darkMode ? '#ffbf00' : 'black'}`}
            width='25'
            height='25'
          />
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
