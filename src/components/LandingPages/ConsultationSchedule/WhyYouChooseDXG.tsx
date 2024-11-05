'use client';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import React, { useState } from 'react';
import { FaArrowRightLong, FaPlay } from 'react-icons/fa6';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';
import Link from 'next/link';

const WhyYouChooseDXG = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div
      className='w-full bg-cover bg-center py-3 md:py-10 lg:py-20'
      style={{
        backgroundImage: `url('/landing-pages/consultation-schedule/why-choose-dxg-bg.jpg')`,
      }}
    >
      <MaxWidthWrapper>
        <div className='relative'>
          {/* Video Section */}
          <div
            className='mx-auto min-h-[710px] w-full max-w-[50%] bg-cover bg-center'
            style={{
              backgroundImage: `url('/landing-pages/consultation-schedule/dxg-poster-bg.png')`,
            }}
          >
            <div className='flex flex-col items-center justify-center p-8 text-white md:p-12 lg:p-16'>
              <p className='font-semibold uppercase text-white opacity-60'>
                Special Show
              </p>
              <h4 className='my-4 text-center text-5xl font-bold'>
                Why You <br /> Choose DXG
              </h4>
              <p className='max-w-lg text-center text-lg font-semibold text-white opacity-70'>
                At the core of our ethos, we believe that the essence of our
                work transcends the boundaries of what we do and how we do it.
                Its about who we do it with, for, and why we do it.
              </p>

              {/* Play Button with Pulse Animation */}
              <div className='mt-20 cursor-pointer' onClick={toggleModal}>
                <div className='relative flex h-24 w-24 items-center justify-center'>
                  {/* Outer Pulsing Circle */}
                  <div className='absolute inset-0 h-full w-full animate-pulse rounded-full bg-white/40 p-5 '></div>

                  {/* Inner Button */}
                  <div className='flex items-center justify-center rounded-full bg-white/40 p-5'>
                    <FaPlay className='text-3xl text-white' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card */}
          <div className='absolute top-[20%] flex max-w-[490px] flex-col items-center justify-center rounded-sm bg-[#141414] p-4 text-white md:p-8 lg:p-9'>
            <Image
              src='/landing-pages/consultation-schedule/stress-free-planning-icon.png'
              alt=''
              width={60}
              height={60}
            ></Image>
            <h4 className=' my-3 text-xl font-medium md:text-2xl'>
              Stress-free planning
            </h4>
            <p className='text-center text-base opacity-75'>
              At the core of our ethos, we believe that the essence of our work
              transcends the boundaries of what we do and how we do it. Its
              about who we do it with, for, and why we do it.{' '}
            </p>
          </div>
          <div className='absolute right-0 top-[10%] flex max-w-[490px] flex-col items-center justify-center rounded-sm bg-[#141414] p-4 text-white md:p-8 lg:p-9'>
            <Image
              src='/landing-pages/consultation-schedule/tailored-solutions-icon.png'
              alt=''
              width={60}
              height={60}
            ></Image>
            <h4 className=' my-3 text-xl font-medium md:text-2xl'>
              Tailored solutions
            </h4>
            <p className='text-center text-base opacity-75'>
              At the core of our ethos, we believe that the essence of our work
              transcends the boundaries of what we do and how we do it. Its
              about who we do it with, for, and why we do it.{' '}
            </p>
          </div>
          <div className='relative bottom-20 flex items-start justify-center gap-6 md:gap-16'>
            <div className=' flex max-w-[490px] flex-col items-center justify-center rounded-sm bg-[#141414] p-4 text-white md:p-8 lg:p-9'>
              <Image
                src='/landing-pages/consultation-schedule/experienced-team-icon.png'
                alt=''
                width={60}
                height={60}
              ></Image>
              <h4 className=' my-3 text-xl font-medium md:text-2xl'>
                Experienced team
              </h4>
              <p className='text-center text-base opacity-75'>
                At the core of our ethos, we believe that the essence of our
                work transcends the boundaries of what we do and how we do it.
                Its about who we do it with, for, and why we do it.{' '}
              </p>
            </div>
            <Link
              href='#'
              className=' mt-10 flex flex-col gap-2 bg-[#F57141] p-6 text-white'
            >
              <FaArrowRightLong size={24} />
              <p>Join the Gig</p>
            </Link>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div
            className='fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50'
            onClick={handleBackdropClick}
            aria-hidden='true'
          >
            <div className='relative w-full max-w-3xl p-4'>
              <div className='relative rounded-lg bg-slate-900'>
                <div className='flex items-center justify-between border-gray-800 p-4 md:p-5'>
                  <button
                    onClick={toggleModal}
                    type='button'
                    className='ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900'
                  >
                    <FaTimes className='h-4 w-4' />
                  </button>
                </div>
                <div className='!mt-0 space-y-4 p-4 !pt-0 md:p-6'>
                  <div className='overflow-hidden rounded-xl'>
                    {' '}
                    <div className='h-[400px] w-full'>
                      <iframe
                        width='100%'
                        height='100%'
                        src='https://www.youtube.com/embed/dQw4w9WgXcQ' // Replace with your video URL
                        title='Video player'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </MaxWidthWrapper>
    </div>
  );
};

export default WhyYouChooseDXG;
