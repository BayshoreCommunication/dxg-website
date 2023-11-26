'use client';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles

import 'swiper/css';
import 'swiper/css/navigation';

import '@/style/custom.css';

import Link from 'next/link';
import { Icons } from '../Icons';
import { Button } from '../ui/button';

import { SERVICE_DATA } from '@/config/data';

export default function ServiceSlider() {
  return (
    <div className='relative'>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
      >
        {SERVICE_DATA.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              className={`h-full w-full overflow-hidden bg-cover bg-center bg-no-repeat`}
              style={{ backgroundImage: `url('${item.image}')` }}
            >
              <div
                className={`group relative  h-full  bg-black bg-opacity-60 hover:bg-sky-700 hover:bg-opacity-80`}
              >
                <div className='group-hover:hidden '>
                  <div className='flex min-h-[380px] -rotate-90 transform flex-col items-start justify-center '>
                    {item.heading.split(';').map((word, index) => {
                      return (
                        <div key={index} className=''>
                          <h1 className='text-xl font-bold uppercase text-white'>
                            {word}
                          </h1>
                        </div>
                      );
                    })}
                  </div>
                  <div className='flex justify-center'>
                    <Icons.customArrowUp className='flex h-20 w-20  items-center justify-center  pb-5 text-white' />
                  </div>
                </div>

                <div className='hidden  flex-col px-5 group-hover:flex'>
                  <div className='min-h-[380px] pt-16'>
                    <h1 className='py-2 text-xl font-bold uppercase text-white'>
                      {item.title}
                    </h1>
                    <p className='text-base text-white'>{item.excerpt}</p>
                  </div>
                  <div className='flex justify-center'>
                    <Icons.customRightArrow className='h-20 w-20  pb-5 text-white ' />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className='swiper-button-next'>
        <Icons.rightArrow className=' text-white' />
      </div>
      <div className='swiper-button-prev'>
        <Icons.leftArrow className=' text-white' />
      </div>
    </div>
  );
}
