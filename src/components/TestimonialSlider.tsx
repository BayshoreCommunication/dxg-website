'use client';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import '@/style/custom.css';
import Image from 'next/image';
import { Icons } from './Icons';

import { TESTIMONIAL_DATA } from '@/config/data';
export default function TestimonialSlider() {
  return (
    <div>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className='mx-auto md:max-w-md lg:flex lg:max-w-3xl'
      >
        {TESTIMONIAL_DATA.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='flex flex-col items-center justify-center md:flex-row'>
                <div className='h-52 w-40 flex-none '>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={292}
                    height={357}
                  />
                </div>
                <div className='mb-20 flex flex-1 flex-col pl-2 pr-2 md:pl-6 lg:pl-10'>
                  <Icons.quote className='mb-4 text-brand' />
                  <p className='text-white'>
                    I am a person who is positive about every aspect of life.
                    There are many things I like to do, to see, and to
                    experience. I like to read, I like to write; I like to
                    think, I like to dream; I like to talk, I like to listen.
                  </p>
                  <h1 className='my-1 text-2xl font-semibold text-white'>
                    {item.name}
                  </h1>
                  <h2 className='font-bold text-brand'>{item.title}</h2>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* Custom navigation buttons should be inside the Swiper component */}
      <div className='swiper-button-next '>
        <Icons.rightArrow className='text-white' />
      </div>
      <div className='swiper-button-prev '>
        <Icons.leftArrow className='text-white' />
      </div>
    </div>
  );
}
