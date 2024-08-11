import Image from 'next/image';
import React from 'react';

const NotFoundPage = () => {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mt-[130px] ">
          <div className="flex justify-center">
            <Image src={'/images/404.svg'} width={400} height={400} alt="404" />
          </div>

          <h1 className="mb-4 text-xl text-[#325EFF] tracking-tight font-bold lg:text-xl text-primary-600 ">
            404 Not Found
          </h1>
          <p className="mb-16 text-2xl tracking-tight font-bold text-gray-900 md:text-2xl ">
            페이지가 존재하지 않습니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
