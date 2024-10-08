'use client';
import React from 'react';
import { BiSolidToTop } from 'react-icons/bi';

const ToTop = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div
      className="right-[20px] bottom-[30px] text-sm font-bold  cursor-pointer fixed z-50 flex items-center justify-center w-[44px] h-[44px] rounded-full bg-white text-black shadow-2xl sm:right-[60px] sm:bottom-[60px]"
      onClick={handleClick}
      style={{ boxShadow: '0 0 1px 1px #b9b9b9' }}>
      <BiSolidToTop size={28} color="#2b2a2a" />
    </div>
  );
};

export default ToTop;
