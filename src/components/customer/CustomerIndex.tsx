'use client';
import React, { useEffect, useState } from 'react';
import First from './First';
import ToTop from '../common/ToTop';

const debounce = (func, wait) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
};

const CustomerIndex = () => {
  const [showToTop, setShowToTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (window.pageYOffset > 1500) {
        setShowToTop(true);
      } else {
        setShowToTop(false);
      }
    }, 200);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="mt-[66px] sm:mt-[76px]">
      <First />

      {showToTop && <ToTop />}
    </div>
  );
};

export default CustomerIndex;
