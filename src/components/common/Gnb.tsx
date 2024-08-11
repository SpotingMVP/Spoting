'use client';
import { useNavStore } from '@/store/nav.store';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Gnb = () => {
  const { currentNav, setCurrentNav } = useNavStore();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleMenuToggle = () => setIsMenuOpen((prev) => !prev);
  return (
    <div className="fixed z-[9998] bg-white top-0 w-full h-[66px] sm:h-[76px] flex items-center justify-between px-3 py-1 shadow-md sm:px-6 sm:py-4">
      <div onClick={() => router.push('/')} className="cursor-pointer">
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={147}
          height={27}
          className="w-[130px] sm:w-full"
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-[18px] text-[19px]">
        <div
          onClick={() => {
            setCurrentNav('home');
            router.replace('/');
          }}
          className={`px-3 py-2 flex justify-center items-center cursor-pointer font-[700]
          ${pathname === '/' && currentNav === 'home' ? 'text-black' : 'text-gray-600 font-[500]'}
        `}>
          Home
        </div>
        <div
          onClick={() => {
            setCurrentNav('company');
            router.replace('/');
          }}
          className={`px-3 py-2 flex justify-center items-center cursor-pointer font-[800]
          ${pathname === '/' && currentNav === 'company' ? 'text-black' : 'text-gray-600 font-[500]'}
        `}>
          Company
        </div>
        <div
          onClick={() => {
            setCurrentNav('center');
            router.replace('/');
          }}
          className={`px-3 py-2 flex justify-center items-center cursor-pointer font-[800]
          ${pathname === '/' && currentNav === 'center' ? 'text-black' : 'text-gray-600 font-[500]'}
        `}>
          Customer Center
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center">
        <div onClick={handleMenuToggle} className="cursor-pointer text-2xl mr-2">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {isMenuOpen && (
          <div className="fixed border-t-2 border-gray-400 top-[60px] right-0 gap-1 bg-white w-full h-full shadow-lg flex flex-col items-start px-6 py-6">
            <div
              onClick={() => {
                setCurrentNav('home');
                setIsMenuOpen(false);
                router.replace('/');
              }}
              className={`py-2 text-2xl cursor-pointer font-[900]
              ${pathname === '/' && currentNav === 'home' ? 'text-black' : 'text-gray-400 font-[600]'}
            `}>
              Home
            </div>
            <div
              onClick={() => {
                setCurrentNav('company');
                setIsMenuOpen(false);
                router.replace('/');
              }}
              className={`py-2 text-2xl cursor-pointer font-[900]
              ${pathname === '/' && currentNav === 'company' ? 'text-black ' : 'text-gray-400 font-[600]'}
            `}>
              Company
            </div>
            <div
              onClick={() => {
                setCurrentNav('center');
                setIsMenuOpen(false);
                router.replace('/');
              }}
              className={`py-2 text-2xl cursor-pointer font-[900]
              ${pathname === '/' && currentNav === 'center' ? 'text-black ' : 'text-gray-400 font-[600]'}
            `}>
              Customer
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gnb;
