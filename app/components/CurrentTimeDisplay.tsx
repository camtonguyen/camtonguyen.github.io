'use client';

import { useState, useEffect } from 'react';

const CurrentTimeDisplay = () => {
  // Start with null to prevent hydration mismatch
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {
    // Set the initial time only on the client
    setCurrentTime(new Date());

    // Update the time every second
    const timerInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(timerInterval);
  }, []);

  // Format the time as MM/DD/YYYY, HH:MM:SS AM/PM
  const formatTime = (date: Date) => {
    if (!date) return '';

    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    };

    // Creates format like: 03/28/2025, 07:10:42 AM
    return date.toLocaleString('en-US', options);
  };

  return (
    <>
      {/* Only render when we have a time (client-side only) */}
      {currentTime ? (
        <span className='text-red-400 dark:text-red-200'>{formatTime(currentTime)}</span>
      ) : (
        <span className='text-red-400 dark:text-red-200'>Loading...</span>
      )}
    </>
  );
};

export default CurrentTimeDisplay;
