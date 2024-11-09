import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Image from 'next/image';
import React from 'react';
import { FaCamera } from 'react-icons/fa';
import ScrollMotionEffect from '../Shared/motion/ScrollMotionEffect';

const HeroSection = () => {
  return (
    <div
      className='w-full  bg-cover bg-center'
      style={{
        backgroundImage: `url('/landing-pages/client-success-story/client-success-story-bg.jpg')`,
      }}
    >
      <MaxWidthWrapper>
        <div className='flex min-h-[85vh] flex-col items-center justify-center gap-5 py-8 md:py-10 lg:gap-12 lg:py-20'>
          <div className='relative flex items-center justify-center'>
            <div className='relative z-10 '>
              {' '}
              <ScrollMotionEffect effect='fade-right' duration='1000'>
                <h1 className='max-w-5xl text-center text-5xl font-black text-white drop-shadow-lg md:text-8xl lg:text-[160px] '>
                  Discover
                </h1>
              </ScrollMotionEffect>
            </div>
            <div className='absolute left-1/2 top-1/2 z-0 w-full max-w-[30%] -translate-x-1/2 -translate-y-1/2  opacity-70'>
              <ScrollMotionEffect effect='zoom-in' duration='1500'>
                {' '}
                <Image
                  src='/landing-pages/client-success-story/X.png'
                  alt=''
                  width={200}
                  height={200}
                  className=''
                />
              </ScrollMotionEffect>
            </div>
          </div>
          <ScrollMotionEffect effect='fade-right' duration='2000'>
            {' '}
            <p className='text-center text-2xl  font-medium text-white md:text-5xl'>
              How we create unforgettable events
            </p>
          </ScrollMotionEffect>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default HeroSection;
