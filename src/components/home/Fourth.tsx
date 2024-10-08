'use client';
import React, { ReactNode, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionType } from '@/types/section.type';

const Section = ({ children, delay = 0 }: SectionType) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, translateX: -90 }}
      animate={{
        opacity: isInView ? 1 : 0,
        translateX: isInView ? 0 : -90
      }}
      transition={{
        duration: 0.4,
        ease: 'easeIn',
        delay: isInView ? delay : 0
      }}>
      {children}
    </motion.div>
  );
};

const Fourth = () => {
  const [category, setCategory] = useState('recruit');

  return (
    <div>
      <div className="sm:py-[25px] bg-gray-100 sm:bg-gray-50">
        <div className="pt-6 sm:pt-0 flex items-center justify-center text-[#325EFF] text-[26px] sm:text-[22px] font-bold">
          How to use
        </div>

        {/* 데스크톱 */}
        <div className="hidden sm:flex items-center justify-center gap-5 sm:gap-[55px] my-[12px] sm:my-[40px]">
          <div
            onClick={() => setCategory('recruit')}
            className={`bg-white cursor-pointer px-6 py-4 sm:px-[80px] sm:py-[30px] rounded-md shadow-md sm:shadow-xl sm:rounded-[16px] text-[17px] sm:text-[20px]
            ${category === 'recruit' ? 'text-gray-900 font-extrabold sm:font-bold' : 'text-gray-400 font-extrabold sm:font-semibold'}
            `}>
            운동 약속 모집하기
          </div>
          <div
            onClick={() => setCategory('participation')}
            className={`bg-white cursor-pointer px-6 py-4 sm:px-[80px] sm:py-[30px] rounded-md shadow-md sm:shadow-xl sm:rounded-[16px] text-[17px] sm:text-[20px]
            ${category === 'participation' ? 'text-gray-900 font-extrabold sm:font-bold' : 'text-gray-400 font-extrabold sm:font-semibold'}
            `}>
            운동 약속 참여하기
          </div>
        </div>
        {/* 모바일 */}
        <div className="flex sm:hidden mt-2">
          <div
            onClick={() => setCategory('recruit')}
            className={`cursor-pointer flex-1 flex items-center justify-center py-4 font-extrabold text-[18px]
            ${category === 'recruit' ? 'border-b-2 border-black text-gray-900' : 'text-gray-400 '}
            `}>
            운동 약속 모집하기
          </div>
          <div
            onClick={() => setCategory('participation')}
            className={`cursor-pointer flex-1 flex items-center justify-center py-4 font-extrabold text-[18px]
            ${category === 'participation' ? 'border-b-2 border-black text-gray-900' : 'text-gray-400'}
            `}>
            운동 약속 참여하기
          </div>
        </div>
      </div>

      {/* 모집하기 */}
      {category === 'recruit' && (
        <div className="bg-gradient">
          <Section delay={0.3}>
            <div className="mt-10 sm:mt-[100px] flex items-center justify-center text-[25px] sm:text-[50px] text-gray-900 font-bold">
              스포팅 이용 방법
            </div>
          </Section>
          <Section delay={0.6}>
            <div className="hidden sm:flex items-center gap-[70px] justify-center mt-[110px] ">
              <div className="flex flex-col items-center -mt-8">
                <div className="w-4 h-4 bg-[#C7D3FF] rounded-full" />
                <div className="w-[2px] h-[220px] bg-[#C7D3FF] border border-[#C7D3FF] rounded-full" />
                <div className="w-4 h-4 bg-white border border-[#C7D3FF] rounded-full" />
                <div className="w-[2px] h-[220px] bg-[#C7D3FF]" />
                <div className="w-4 h-4 bg-white border border-[#C7D3FF] rounded-full" />
              </div>
              <div className="flex flex-col gap-[100px] items-center">
                <div className="py-[22px] px-[24px] bg-white border border-[#E3E3E3] rounded-[10px]">
                  <div className="text-gray-900 text-[20px] font-bold">메인 홈 화면</div>
                  <div className="mt-[18px] text-[16px] text-gray-500">
                    첫째, 앱 첫 메인 홈 화면의 우측 하단
                  </div>
                  <div className="text-[16px] text-gray-500">
                    연필 모양 버튼을 터치해 주세요.
                  </div>
                </div>
                <div>
                  <div className="text-gray-900 text-[20px] font-bold">
                    운동 약속 등록
                  </div>
                  <div className="mt-[18px] text-[16px] text-gray-500">
                    둘째, 종목, 장소, 모집 인원, 참여 조건,{' '}
                  </div>
                  <div className="text-[16px] text-gray-500">
                    일시, 제목, 내용을 입력한 후{' '}
                  </div>
                  <div className="text-[16px] text-gray-500">등록하기를 눌러주세요.</div>
                </div>
                <div>
                  <div className="text-gray-900 text-[20px] font-bold">
                    운동 약속 게시물 생성
                  </div>
                  <div className="mt-[18px] text-[16px] text-gray-500">
                    셋째, ‘등록하기’ 버튼을 누르면, 동네{' '}
                  </div>
                  <div className="text-[16px] text-gray-500">
                    운동 약속 게시물이 생성됩니다.
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="/images/use1.svg"
                  alt=""
                  className="rounded-xl shadow-xl border-2 border-gray-500"
                />
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="/images/use2.svg"
                  alt=""
                  className="rounded-xl shadow-xl border-2 border-gray-500"
                />
                <img
                  src="/images/use3.svg"
                  alt=""
                  className="rounded-xl shadow-xl border-2 border-gray-500"
                />
              </div>
            </div>
          </Section>
          {/* 모바일 */}
          <div className="block sm:hidden">
            <Section delay={0.3}>
              <div className="flex justify-center mt-10">
                <img
                  src="/images/use1.svg"
                  alt=""
                  className="rounded-xl shadow-xl border-2 border-gray-500"
                />
              </div>
              <div className="mx-6 mt-5 py-[16px] px-[16px] bg-white border border-[#E3E3E3] shadow-md rounded-[10px]">
                <div className="text-gray-900 text-[20px] font-bold">메인 홈 화면</div>
                <div className="mt-[18px] text-[16px] text-gray-500 font-semibold">
                  첫째, 앱 첫 메인 홈 화면의 우측 하단 연필 모양 <br />
                  버튼을 터치해 주세요.
                </div>
              </div>
            </Section>
            <Section delay={0.3}>
              <div className="flex justify-center mt-14">
                <img
                  src="/images/use2.svg"
                  alt=""
                  className="rounded-xl shadow-xl border-2 border-gray-500"
                />
              </div>
              <div className="mx-6 mt-5 py-[16px] px-[16px] bg-white border border-[#E3E3E3] shadow-md rounded-[10px]">
                <div className="text-gray-900 text-[20px] font-bold">운동 약속 등록</div>
                <div className="mt-[18px] text-[16px] text-gray-500 font-semibold">
                  둘째, 종목, 장소, 모집 인원, 참여 조건, 일시, 제목, 내용을 입력한 후
                  등록하기를 눌러주세요.
                </div>
              </div>
            </Section>
            <Section delay={0.3}>
              <div className="flex justify-center mt-14">
                <img
                  src="/images/use3.svg"
                  alt=""
                  className="rounded-xl shadow-xl border-2 border-gray-500"
                />
              </div>
              <div className="mx-6 mt-5 py-[16px] px-[16px] bg-white border border-[#E3E3E3] shadow-md rounded-[10px]">
                <div className="text-gray-900 text-[20px] font-bold">
                  운동 약속 게시물 생성
                </div>
                <div className="mt-[18px] text-[16px] text-gray-500 font-semibold">
                  셋째, ‘등록하기’ 버튼을 누르면, 동네 운동 약속 <br />
                  게시물이 생성됩니다.
                </div>
              </div>
            </Section>
          </div>
          <img src="/images/sporting2.svg" alt="" className="w-full mt-8 sm:mt-0" />
        </div>
      )}

      {/* 참여하기 */}
      {category === 'participation' && (
        <div className="bg-gradient">
          <Section delay={0.3}>
            <div className="mt-8 sm:mt-[100px] flex items-center justify-center text-[25px] sm:text-[50px] text-gray-900 font-bold">
              스포팅 이용 방법
            </div>
          </Section>
          <Section delay={0.6}>
            <div className="hidden sm:flex items-center gap-[30px] justify-center mt-[110px] ">
              <div className="flex flex-col items-center -mt-3">
                <div className="w-4 h-4 bg-[#C7D3FF] rounded-full" />
                <div className="w-[2px] h-[160px] bg-[#C7D3FF] border border-[#C7D3FF] rounded-full" />
                <div className="w-4 h-4 bg-white border border-[#C7D3FF] rounded-full" />
                <div className="w-[2px] h-[160px] bg-[#C7D3FF]" />
                <div className="w-4 h-4 bg-white border border-[#C7D3FF] rounded-full" />
                <div className="w-[2px] h-[160px] bg-[#C7D3FF]" />
                <div className="w-4 h-4 bg-white border border-[#C7D3FF] rounded-full" />
              </div>
              <div className="flex flex-col gap-[50px] items-center">
                <div className="py-[22px] px-[24px] bg-white border border-[#E3E3E3] rounded-[10px]">
                  <div className="text-gray-900 text-[20px] font-bold">홈 메인 화면</div>
                  <div className="mt-[18px] text-[16px] text-gray-500">
                    첫째, 참여하고 싶은 종목 및 위치의
                  </div>
                  <div className="text-[16px] text-gray-500">아이콘을 터치하세요.</div>
                </div>
                <div>
                  <div className="text-gray-900 text-[20px] font-bold">
                    운동 약속 리스트
                  </div>
                  <div className="mt-[18px] text-[16px] text-gray-500">
                    모집 중인 운동 약속 게시글 중 참여{' '}
                  </div>
                  <div className="text-[16px] text-gray-500">
                    하고 싶은 게시글을 터치하세요.{' '}
                  </div>
                </div>
                <div>
                  <div className="text-gray-900 text-[20px] font-bold">
                    운동 약속 게시글
                  </div>
                  <div className="mt-[18px] text-[16px] text-gray-500">
                    운동 약속 게시글 우측 상단 ‘참여하기’{' '}
                  </div>
                  <div className="text-[16px] text-gray-500">버튼을 눌러 참여하세요.</div>
                </div>
                <div className="-ml-4">
                  <div className="text-gray-900 text-[20px] font-bold">보증금 안내</div>
                  <div className="mt-[18px] text-[16px] text-gray-500">
                    건강한 운동 문화를 위해{' '}
                  </div>
                  <div className="text-[16px] text-gray-500">
                    보증금을 지불합니다. 건강한 운동
                  </div>
                  <div className="text-[16px] text-gray-500">
                    약속 후 보증금은 반환됩니다.
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="/images/use4.svg"
                  alt=""
                  className="rounded-xl shadow-xl border-2 border-gray-500"
                />
              </div>
              <div className="flex items-center gap-3">
                <img
                  src="/images/use5.svg"
                  alt=""
                  className="rounded-xl shadow-xl border-2 border-gray-500"
                />
                <img
                  src="/images/use6.svg"
                  alt=""
                  className="rounded-xl shadow-xl border-2 border-gray-500"
                />
                <img
                  src="/images/use7.svg"
                  alt=""
                  className="rounded-xl shadow-xl border-2 border-gray-500"
                />
              </div>
            </div>
          </Section>
          {/* 모바일 */}
          <div className="block sm:hidden">
            <Section delay={0.3}>
              <div className="flex justify-center mt-10">
                <img
                  src="/images/use4.svg"
                  alt=""
                  className="rounded-xl shadow-xl border-2 border-gray-500"
                />
              </div>
              <div className="mx-6 mt-5 py-[16px] px-[16px] bg-white border border-[#E3E3E3] shadow-md rounded-[10px]">
                <div className="text-gray-900 text-[20px] font-bold">홈 메인 화면</div>
                <div className="mt-[18px] text-[16px] text-gray-500 font-semibold">
                  첫째, 참여하고 싶은 종목 및 위치의 아이콘을 <br />
                  터치하세요.
                </div>
              </div>
            </Section>
            <Section delay={0.5}>
              <div className="flex justify-center mt-14">
                <img
                  src="/images/use5.svg"
                  alt=""
                  className="rounded-xl shadow-xl border-2 border-gray-500"
                />
              </div>
              <div className="mx-6 mt-5 py-[16px] px-[16px] bg-white border border-[#E3E3E3] shadow-md rounded-[10px]">
                <div className="text-gray-900 text-[20px] font-bold">
                  운동 약속 리스트
                </div>
                <div className="mt-[18px] text-[16px] text-gray-500 font-semibold">
                  모집 중인 운동 약속 게시글 중 참여 하고 싶은 <br />
                  게시글을 터치하세요.
                </div>
              </div>
            </Section>
            <Section delay={0.3}>
              <div className="flex justify-center mt-14">
                <img
                  src="/images/use6.svg"
                  alt=""
                  className="rounded-xl shadow-xl border-2 border-gray-500"
                />
              </div>
              <div className="mx-6 mt-5 py-[16px] px-[16px] bg-white border border-[#E3E3E3] shadow-md rounded-[10px]">
                <div className="text-gray-900 text-[20px] font-bold">
                  운동 약속 게시글
                </div>
                <div className="mt-[18px] text-[16px] text-gray-500 font-semibold">
                  운동 약속 게시글 우측 상단 ‘참여하기’ 버튼을 <br />
                  눌러 참여하세요.
                </div>
              </div>
            </Section>
            <Section delay={0.3}>
              <div className="flex justify-center mt-14">
                <img
                  src="/images/use7.svg"
                  alt=""
                  className="rounded-xl shadow-xl border-2 border-gray-500"
                />
              </div>
              <div className="mx-6 mt-5 py-[16px] px-[16px] bg-white border border-[#E3E3E3] shadow-md rounded-[10px]">
                <div className="text-gray-900 text-[20px] font-bold">보증금 안내</div>
                <div className="mt-[18px] text-[16px] text-gray-500 font-semibold">
                  건강한 운동 문화를 위해 보증금을 지불합니다. <br />
                  건강한 운동 약속 후 보증금은 반환됩니다.
                </div>
              </div>
            </Section>
          </div>
          <div className="mt-[80px] sm:mt-0">
            <img src="/images/sporting2.svg" alt="" className="w-full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Fourth;
