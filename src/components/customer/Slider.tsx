import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

const Slider = () => {
  return (
    <div className="mt-10 flex justify-center mb-20">
      {/* 모바일에서는 x */}
      <div className="hidden sm:block">
        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          pagination={{
            clickable: true
          }}
          modules={[Pagination]}
          navigation={true}
          className="mySwiper">
          <SwiperSlide className="mb-8">
            <Image
              src={'/images/slide1.svg'}
              alt="slide"
              width={350}
              height={250}
              className="rounded-[30px]"
            />
          </SwiperSlide>
          <SwiperSlide className="mb-8">
            <Image
              src={'/images/slide2.svg'}
              alt="slide"
              width={350}
              height={250}
              className="rounded-[30px]"
            />
          </SwiperSlide>{' '}
          <SwiperSlide className="mb-8">
            <Image
              src={'/images/slide3.svg'}
              alt="slide"
              width={350}
              height={250}
              className="rounded-[30px]"
            />
          </SwiperSlide>{' '}
          <SwiperSlide className="mb-8">
            <Image
              src={'/images/slide4.svg'}
              alt="slide"
              width={350}
              height={250}
              className="rounded-[30px]"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
