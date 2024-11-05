import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Image from 'next/image';
import React from 'react';
import { FaCamera } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <div
      className='w-full  bg-cover bg-center'
      style={{
        backgroundImage: `url('/landing-pages/my-event/hero-bg.jpg')`,
      }}
    >
      <MaxWidthWrapper>
        <div className='flex flex-col gap-5 py-8 md:py-10 lg:gap-12 lg:py-20'>
          <h1 className=' text-3xl  font-bold text-white md:text-5xl lg:text-8xl'>
            Let{'’'}s{' '}
            <span className='inline-flex items-center justify-center bg-[#2DC6F5] px-4  py-2 md:px-8 md:py-5 '>
              <FaCamera className='md:text2xl text-xl lg:text-6xl' />
            </span>{' '}
            Make Your <br />
            Next Event Unforgettable!
          </h1>
          <div className='grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-10 lg:gap-16'>
            <div>
              <Image
                src='/landing-pages/my-event/hero-img.jpg'
                alt='hero image'
                width={820}
                height={600}
              ></Image>
            </div>
            <div>
              <div className='max-w-2xl'>
                <h4 className="relative text-2xl font-bold uppercase text-white before:absolute before:-left-4 before:top-1/2 before:h-6 before:w-1 before:-translate-y-1/2 before:rounded before:bg-[#6FD0FC] before:content-['']">
                  About Us
                </h4>

                <p className='mt-4 text-xl text-white opacity-70'>
                  We are a music event organizer with various challenges.
                  Satisfaction is our main goal.{' '}
                </p>
                <p className='mt-6 text-xl text-white opacity-70'>
                  We also have some articles that you can read for free
                </p>
                <div className='mt-8 flex flex-wrap items-center gap-8 text-white'>
                  <div className='flex items-center gap-3'>
                    <p className='text-6xl font-semibold'>15</p>
                    <p className='opacity-70'>
                      Years
                      <br /> Experience
                    </p>
                  </div>
                  <div className='flex items-center gap-3'>
                    <p className='text-6xl font-semibold'>1K</p>
                    <p className='opacity-70'>
                      Event
                      <br /> Handled
                    </p>
                  </div>
                  <div className='flex items-center gap-3'>
                    <p className='text-6xl font-semibold'>120</p>
                    <p className='opacity-70'>
                      Artist <br /> Agencies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default HeroSection;
