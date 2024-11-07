import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Image from 'next/image';
import React from 'react';
import {
  IoArrowBack,
  IoArrowForwardOutline,
  IoLogoInstagram,
} from 'react-icons/io5';
import { FaDribbble } from 'react-icons/fa6';
import { FaBehance } from 'react-icons/fa6';
import Link from 'next/link';
import HomeSilderSection from './HomeSilderSection';

const Events = () => {
  return (
    <div className='bg-[#111617] '>
      <MaxWidthWrapper>
        <div className='flex items-stretch'>
          {/* Single Card */}
          <div className='relative w-[20%] overflow-hidden'>
            <Image
              src='/landing-pages/client-success-story/event-1.jpg'
              alt=''
              width={350}
              height={600}
              className='w-full'
            ></Image>
            {/* Social Media */}
            <div className='absolute bottom-0  flex w-full items-end gap-3 p-10'>
              <div className=' flex flex-col gap-2'>
                <Link
                  href='#'
                  className='bg-transparent p-4 duration-300 hover:bg-gray-300 hover:bg-opacity-40'
                >
                  <IoLogoInstagram className='  text-2xl text-white duration-300 ' />
                </Link>
                <Link
                  href='#'
                  className='bg-transparent p-4 duration-300 hover:bg-gray-300 hover:bg-opacity-40'
                >
                  {' '}
                  <FaDribbble className='  text-2xl text-white duration-300 ' />
                </Link>
                <Link
                  href=''
                  className=' bg-gray-300 bg-opacity-40 p-4 duration-300'
                >
                  {' '}
                  <FaBehance className='  text-2xl text-white ' />
                </Link>
              </div>
              <div className='text-white '>
                <h4 className='mb-1 text-2xl'>Hublot</h4>
                <p>New Product Launch</p>
              </div>
            </div>
          </div>
          <div className='w-[20%]'>
            <Image
              src='/landing-pages/client-success-story/event-2.jpg'
              alt=''
              width={350}
              height={600}
              className='w-full'
            ></Image>
          </div>
          <div className='relative w-[60%]'>
            <Image
              src='/landing-pages/client-success-story/event-3.jpg'
              alt='home-banner-bg'
              layout='fill'
              objectFit='cover'
              priority
              className='z-10'
              rel='preload'
            />

            <div className='absolute  right-20 top-1/2 z-20  max-w-2xl -translate-y-1/2 transform'>
              <HomeSilderSection />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Events;
