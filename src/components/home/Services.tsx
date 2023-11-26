import React from 'react';
import Image from 'next/image';
import { SERVICE_DATA } from '@/config/data';
import { Icons } from '@/components/Icons';

export default function Services() {
  return (
    <div>
      <div className='flex flex-col md:flex-row'>
        {SERVICE_DATA.map((item, index) => {
          return (
            <div
              key={index}
              className={`min-h-[200px] flex-1 justify-center overflow-hidden bg-cover bg-center bg-no-repeat md:min-h-[420px]`}
              style={{ backgroundImage: `url('${item.image}')` }}
            >
              <div
                className={`group relative  h-full  bg-black bg-opacity-60 hover:bg-sky-700 hover:bg-opacity-80`}
              >
                <div className='flex flex-row items-center justify-between px-10 group-hover:hidden md:flex-col '>
                  <div className='flex min-h-[200px] transform flex-col items-start justify-center md:min-h-[380px] md:-rotate-90 '>
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

                <div className='hidden flex-row  px-5 group-hover:flex md:flex-col'>
                  <div className='min-h-[300px] pt-16 md:min-h-[380px]'>
                    <h1 className='py-2 text-xl font-bold uppercase text-white'>
                      {item.title}
                    </h1>
                    <p className='text-base text-white'>{item.excerpt}</p>
                  </div>
                  <div className='flex justify-center pt-12 md:pt-0'>
                    <Icons.customRightArrow className='h-20 w-20  pb-5 text-white ' />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
