'use client';
import { BouncySectionType, SectionType } from '@/types/section.type';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import React, { useRef } from 'react';

const BouncySection2 = ({ children, delay = 0, direction = 'up' }: BouncySectionType) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 50 };
      case 'down':
        return { y: -50 };
      case 'left':
        return { x: 50 };
      case 'right':
        return { x: -50 };
      default:
        return { y: 50 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8, ...getInitialPosition() }}
      animate={{
        opacity: isInView ? 1 : 0,
        scale: isInView ? 1 : 0.8,
        x: isInView ? 0 : getInitialPosition().x,
        y: isInView ? 0 : getInitialPosition().y
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
        delay: isInView ? delay : 0
      }}>
      {children}
    </motion.div>
  );
};

const Section = ({ children, delay = 0 }: SectionType) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, translateY: 50 }}
      animate={{
        opacity: isInView ? 1 : 0,
        translateY: isInView ? 0 : 50
      }}
      transition={{
        duration: 0.5,
        ease: 'easeIn',
        delay: isInView ? delay : 0
      }}>
      {children}
    </motion.div>
  );
};

const First = () => {
  return (
    <div className="overflow-x-hidden relative w-full h-[1400px] sm:h-[1400px]">
      <div className="absolute inset-0">
        <Image
          src="/images/basket.svg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={70}
          priority
        />
      </div>
      <div className="hidden sm:block absolute sm:top-[350px] left-0 right-0 text-center sm:text-[64px] sm:font-bold text-white">
        스포팅은 <span className="text-[#00BEFF]">생활 체육</span>의 가치에 주목합니다.
      </div>
      <div className="sm:hidden absolute top-[100px] left-0 right-0 text-center text-[34px] font-extrabold text-white">
        <div>
          스포팅은 <span className="text-[#00BEFF]">생활 체육</span>의 가치에
        </div>
        <div>주목합니다</div>
      </div>
      <div className="absolute top-[350px] sm:top-[600px] left-1/2 transform -translate-x-1/2">
        <Image src="/images/toBottom.svg" alt="toBottom" width={45} height={20} />
      </div>

      {/* 데스크탑 */}
      <div className="hidden sm:block absolute top-[750px] left-1/2 transform -translate-x-1/2">
        <div className="py-[40px] px-[150px] rounded-[40px] bg-[#f7f7f733] bg-opacity-20 z-50 backdrop-blur-md border-2 shadow-md border-white">
          <BouncySection2 delay={0.2} direction="up">
            <div className="flex flex-col text-[32px] text-white font-bold items-center">
              <div>아직도 운동 약속 잡기 위해</div>
              <div>번거롭게 연락하시나요?</div>
            </div>
            <div className="flex items-center justify-center gap-[60px]">
              <div className="relative flex flex-col items-center">
                <div className="max-w-max max-h-max">
                  <img
                    src="/images/graph1.svg"
                    alt=""
                    className="w-[320px] max-w-max max-h-max"
                  />
                </div>

                <div className="text-[18px] font-normal text-white">
                  운동 약속을 잡는데 어려움을 겪은 비율
                </div>
              </div>
              <div className="relative flex flex-col items-center">
                <div className="max-w-max max-h-max">
                  <img
                    src="/images/graph2.svg"
                    alt=""
                    className="w-[320px] max-w-max max-h-max"
                  />
                </div>

                <div className="text-[18px] font-normal text-white">
                  함께 운동 하는 것에 대한 선호 비율
                </div>
              </div>
            </div>
          </BouncySection2>
        </div>
      </div>
      {/* 모바일 */}
      <div className="sm:hidden w-full absolute top-[450px] left-1/2 transform -translate-x-1/2 ">
        <div className="flex flex-col text-[24px] text-white font-[800] items-center">
          <div>아직도 운동 약속 잡기 위해</div>
          <div>번거롭게 연락하시나요?</div>
        </div>
        <Section delay={0.2}>
          <div className="mt-[72px] mx-6 py-[15px] px-[32px] rounded-[20px] bg-[#f7f7f733] bg-opacity-20 z-50 backdrop-blur-md border-2 shadow-md border-white">
            <div className="relative flex flex-col items-center">
              <div className="max-w-max max-h-max">
                <img
                  src="/images/graph1.svg"
                  alt=""
                  className="w-[250px] max-w-max max-h-max"
                />
              </div>

              <div className="text-[18px] font-[800] sm:font-bold text-gray-50 sm:text-white">
                운동 약속을 잡는데 어려움을 겪은 비율
              </div>
            </div>
          </div>
        </Section>
        <Section delay={0.2}>
          <div className="mt-[72px] mx-6 py-[15px] px-[32px] rounded-[20px] bg-[#f7f7f733] bg-opacity-20 z-50 backdrop-blur-md border-2 shadow-md border-white">
            <div className="relative flex flex-col items-center">
              <div className="max-w-max max-h-max">
                <img
                  src="/images/graph2.svg"
                  alt=""
                  className="w-[250px] max-w-max max-h-max"
                />
              </div>

              <div className="text-[18px] font-[800] sm:font-bold text-gray-50 sm:text-white">
                함께 운동 하는 것에 대한 선호 비율
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default First;
