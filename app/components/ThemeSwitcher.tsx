import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import React, { useState, useEffect } from 'react';

function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="text-right">
      <label className="switch cursor-pointer w-[30px] h-[30px]" onClick={toggleTheme}>
        {darkMode ? <SunIcon color="white" width="25" height="25" /> : <MoonIcon color="white" width="25" height="25" />}
      </label>
    </div>
  );
}

export default ThemeSwitcher;
