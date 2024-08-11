'use client';
import { useModalStore } from '@/store/modal.store';
import React from 'react';
import { IoLogoApple } from 'react-icons/io5';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Top = () => {
  const { setModalType, setOpen } = useModalStore();
  return (
    <div className="relative">
      <img
        src="/images/bg1.svg"
        alt=""
        className="-left-[150px] -top-[150px] absolute sm:top-[300px] sm:left-0"
      />
      <img
        src="/images/bg2.svg"
        alt=""
        className="-top-[30px] -right-[120px] absolute sm:-top-[120px] sm:right-0"
      />

      <div className="max-w-[1440px] w-full mx-auto mt-[100px] relative">
        <motion.div
          initial={{ opacity: 0, translateX: -90 }}
          transition={{
            duration: 0.2,
            ease: 'easeIn'
          }}
          animate={{
            opacity: 1,
            translateX: 0
          }}>
          <div className="sm:hidden px-4">
            <div className="text-[24px] font-extrabold ">건강한 만남,</div>
            <div className="text-[24px] font-extrabold ">
              <span className="text-[#325EFF]">함께 운동</span> 하세요
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateX: -90 }}
          transition={{
            duration: 0.3,
            ease: 'easeIn'
          }}
          animate={{
            opacity: 1,
            translateX: 0
          }}>
          <div className="flex items-center justify-center relative">
            <div className="hidden sm:block absolute left-0 text-[64px] text-[#313131] font-extrabold">
              건강한 만남,
            </div>

            <Image
              src="/images/phone.png"
              alt="phone"
              width={700}
              height={600}
              priority
            />

            <div className="hidden sm:block absolute right-0 text-[64px] text-[#313131] font-extrabold">
              <span className="text-[#325EFF]">함께 운동</span> 하세요
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex items-center justify-center mt-[26px] z-[30]">
        <img src="/images/shadow.svg" alt="" className="z-[30]" />
      </div>

      <motion.div
        initial={{ opacity: 0, translateX: -90 }}
        transition={{
          duration: 0.5,
          ease: 'easeIn',
          delay: 0.7
        }}
        animate={{
          opacity: 1,
          translateX: 0
        }}>
        <div className="px-4 flex justify-center items-center gap-[30px] mt-[22px] sm:px-0 sm:mt-[52px]">
          <div
            onClick={() => {
              setOpen(true);
              setModalType('prepare');
            }}
            className="z-[30] shadow-sm cursor-pointer w-[246px] h-[65px] rounded-xl flex items-center justify-center gap-[10px] bg-gray-900 text-xl text-white font-bold ">
            <div>
              <IoLogoApple color="white" size={30} />
            </div>
            <div>App Store</div>
          </div>

          <div
            onClick={() => {
              setOpen(true);
              setModalType('prepare');
            }}
            className="z-[30] shadow-sm cursor-pointer w-[246px] h-[65px] rounded-xl flex items-center justify-center gap-[10px] bg-gray-900 text-xl text-white font-bold">
            <div>
              <img src="/images/playstore.png" alt="playstore" className="w-6" />
            </div>
            <div>Google Play</div>
          </div>
        </div>
      </motion.div>
      <div className="mt-[60px] sm:mt-[78px] flex flex-col sm:flex-row items-center justify-center gap-[29px]">
        <div className="bg-[#EAF3FF] py-[23px] px-[33px] rounded-[10px] max-w-[400px] w-full">
          <div className="text-[24px] text-[#0029BD] font-extrabold sm:font-bold">
            생활 체육에 주목합니다.
          </div>
          <div className="mt-4 text-[16px] text-gray-500 font-bold  sm:font-normal ">
            스포팅은 ‘생활 체육’의 가치에 주목합니다.
          </div>
          <div className="text-[16px] text-gray-500 font-bold sm:font-normal">
            혼자 하기 어려웠던 운동을 근처 이웃들과 함께 합니다.
          </div>
          <div className="flex justify-end  sm:mt-6">
            <img src="/images/check.svg" alt="" />
          </div>
        </div>
        <div className="bg-[#EAF3FF] rounded-[10px] py-[23px] px-[33px] max-w-[400px] w-full">
          <div className="text-[24px] text-[#0029BD] font-extrabold sm:font-bold">
            건강한 만남에 주목합니다.
          </div>
          <div className="mt-4 text-[16px] text-gray-500 font-bold  sm:font-normal ">
            가벼운 산책부터 축구, 헬스와 같은 팀 스포츠까지.{' '}
          </div>
          <div className="text-[16px] text-gray-500 font-bold  sm:font-normal">
            함께 하는 단 하루의 건강한 추억을 만드는
          </div>
          <div className="text-[16px] text-gray-500 font-bold  sm:font-normal">
            커뮤니티를 꿈꿉니다.
          </div>
          <div className="flex justify-end sm:mt-6">
            <img src="/images/chat.svg" alt="" />
          </div>
        </div>
      </div>

      <div className="py-6 sm:mt-[130px] sm:py-0">
        <img src="/images/sporting.svg" alt="" className="w-full" />
      </div>
    </div>
  );
};

export default Top;
