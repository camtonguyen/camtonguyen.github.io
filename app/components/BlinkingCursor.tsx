'use client';

import { useEffect, useState } from 'react';

export function BlinkingCursor() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className='inline-block w-1 h-4 bg-black dark:bg-white ml-[2px] relative top-[2px]'
      style={{ visibility: visible ? 'visible' : 'hidden' }}
    />
  );
}
