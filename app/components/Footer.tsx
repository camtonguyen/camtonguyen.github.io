"use client";

import React from 'react';
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <div className='bg-black px-5 lg:px-28 py-3 lg:py-6 flex items-center justify-between mt-16'>
      <div className='font-bold text-white text-xl'>Cam To.</div>

      <div className='text-white lg:font-semibold lg:text-sm font-normal text-[10px] text-right lg:space-y-3'>
        <p>{t.footer.rights}</p>
        <p>{t.footer.madeBy}</p>
      </div>
    </div>
  )
}
