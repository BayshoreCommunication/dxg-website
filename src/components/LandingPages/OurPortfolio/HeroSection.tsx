import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Image from 'next/image';
import React from 'react';
import { FaCamera } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <div
      className='w-full  bg-cover bg-center'
      style={{
        backgroundImage: `url('/landing-pages/our-portfolio/our-portfolio-bg.png')`,
      }}
    >
      <MaxWidthWrapper>
        <div className='flex min-h-[85vh] flex-col items-center justify-center gap-5 py-8 md:py-10 lg:gap-12 lg:py-20'>
          <h1 className='max-w-5xl text-center text-5xl font-bold text-white md:text-6xl lg:text-8xl'>
            Explore Our Custom Event{' '}
            <span className='relative'>
              Solutions{' '}
              <Image
                src='/landing-pages/our-portfolio/heading-after.png'
                alt=''
                width={400}
                height={70}
                className='top-100 absolute right-0'
              ></Image>
            </span>
          </h1>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default HeroSection;
