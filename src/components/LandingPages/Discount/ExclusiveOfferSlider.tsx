'use client';
import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';
import ScrollMotionEffect from '../Shared/motion/ScrollMotionEffect';
import { GoArrowDown, GoArrowUp } from 'react-icons/go';

const exclusiveEventData = [
  {
    month: 'January',
    date: 'January, 5',
    title: 'Closeplay: Music of the Spheres - World Tour',
    img: '/landing-pages/discount/exclusive-event-1.jpg',
  },
  {
    month: 'February',
    date: 'February, 15',
    title: 'Closeplay: Music of the Spheres - World Tour',
    img: '/landing-pages/discount/exclusive-event-2.jpg',
  },
  {
    month: 'March',
    date: 'March, 5',
    title: 'Closeplay: Music of the Spheres - World Tour',
    img: '/landing-pages/discount/exclusive-event-1.jpg',
  },
  {
    month: 'April',
    date: 'April, 10',
    title: 'Closeplay: Music of the Spheres - World Tour',
    img: '/landing-pages/discount/exclusive-event-2.jpg',
  },
  {
    month: 'May',
    date: 'May, 9',
    title: 'Closeplay: Music of the Spheres - World Tour',
    img: '/landing-pages/discount/exclusive-event-1.jpg',
  },
  {
    month: 'June',
    date: 'June, 20',
    title: 'Closeplay: Music of the Spheres - World Tour',
    img: '/landing-pages/discount/exclusive-event-2.jpg',
  },
  {
    month: 'July',
    date: 'July, 15',
    title: 'Closeplay: Music of the Spheres - World Tour',
    img: '/landing-pages/discount/exclusive-event-1.jpg',
  },
  {
    month: 'August',
    date: 'August, 10',
    title: 'Closeplay: Music of the Spheres - World Tour',
    img: '/landing-pages/discount/exclusive-event-2.jpg',
  },
  {
    month: 'September',
    date: 'September, 25',
    title: 'Closeplay: Music of the Spheres - World Tour',
    img: '/landing-pages/discount/exclusive-event-1.jpg',
  },
  {
    month: 'October',
    date: 'October, 30',
    title: 'Closeplay: Music of the Spheres - World Tour',
    img: '/landing-pages/discount/exclusive-event-2.jpg',
  },
  {
    month: 'November',
    date: 'November, 5',
    title: 'Closeplay: Music of the Spheres - World Tour',
    img: '/landing-pages/discount/exclusive-event-1.jpg',
  },
  {
    month: 'December',
    date: 'December, 15',
    title: 'Closeplay: Music of the Spheres - World Tour',
    img: '/landing-pages/discount/exclusive-event-2.jpg',
  },
];

const ExclusiveOfferSlider: React.FC = () => {
  const exclusiveEventData1 = [
    { month: 'January', date: 'January, 5' },
    { month: 'February', date: 'February, 15' },
    { month: 'March', date: 'March, 5' },
    { month: 'April', date: 'April, 10' },
    { month: 'May', date: 'May, 9' },
    { month: 'June', date: 'June, 20' },
    { month: 'July', date: 'July, 15' },
    { month: 'August', date: 'August, 10' },
    { month: 'September', date: 'September, 25' },
    { month: 'October', date: 'October, 30' },
    { month: 'November', date: 'November, 5' },
    { month: 'December', date: 'December, 15' },
  ];

  const [currentIndex, setCurrentIndex] = useState(2); // Start with the center item.

  const handleUp = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleDown = () => {
    if (currentIndex < exclusiveEventData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  // Refs for navigation buttons
  const prevButtonRef = useRef<HTMLButtonElement | null>(null);
  const nextButtonRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current) {
      // Attach the navigation buttons to Swiper when it’s initialized
      swiperRef.current.params.navigation.prevEl = prevButtonRef.current;
      swiperRef.current.params.navigation.nextEl = nextButtonRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);
  return (
    <div className=''>
      <div className=' flex items-center gap-6'>
        <div className='lg:w-[30%]'>
          <div className='mb-5 w-full text-end'>
            <button
              onClick={handleUp}
              className='ms-auto cursor-pointer  p-2 text-white duration-300 hover:bg-[#2DC6F5] hover:text-black'
            >
              <GoArrowUp className='text-2xl' />
            </button>
          </div>

          <div className='h-[300px] w-full space-y-4 overflow-hidden'>
            {exclusiveEventData.map((el, index) => {
              // Determine item styles based on its position relative to the center
              const isActive = index === currentIndex;
              const isNearby =
                index === currentIndex - 1 || index === currentIndex + 1;

              return (
                <div
                  key={index}
                  className={`w-full rounded-lg p-4 text-center text-white ${
                    isActive
                      ? 'bg-yellow-500 text-xl font-semibold'
                      : isNearby
                        ? 'bg-gray-600 text-lg'
                        : 'bg-gray-800 text-base opacity-70'
                  }`}
                >
                  {el?.month}
                </div>
              );
            })}
          </div>

          <div className='mt-5 w-full text-end'>
            <button
              onClick={handleDown}
              className=' cursor-pointer p-2 text-white duration-300 hover:bg-[#2DC6F5] hover:text-black'
            >
              <GoArrowDown className='text-2xl' />
            </button>
          </div>
        </div>

        <div className='grid grid-cols-1  gap-6 lg:grid-cols-2'>
          {exclusiveEventData.slice(0, 2).map((item, index) => (
            <div key={index}>
              <div className='group max-w-xl duration-300'>
                <div>
                  <ScrollMotionEffect effect='fade-up' duration='2000'>
                    <div className='relative'>
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={700}
                        height={500}
                      />
                      <div className='absolute bottom-0 w-full p-10'>
                        <p className='mb-1 uppercase text-white opacity-80'>
                          {item.date}
                        </p>
                        <h4 className='text-xl font-semibold text-white'>
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  </ScrollMotionEffect>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExclusiveOfferSlider;
