import React from 'react';
import Image from 'next/image';
import { SERVICE_DATA } from '@/config/data';
import { Icons } from '../Icons';
export default function Services() {
  return (
    <div>
      <div className='flex'>
        {SERVICE_DATA.map((item, index) => {
          return (
            <div
              key={index}
              className={` overflow-hidden bg-cover bg-center bg-no-repeat`}
              style={{ backgroundImage: `url('${item.image}')` }}
            >
              <div
                className={`group relative flex h-[400px] flex-col bg-black  bg-opacity-60 hover:bg-sky-700 hover:bg-opacity-80`}
              >
                <div className='px-5 py-10 '>
                  <h1 className='py-2 text-xl font-bold uppercase text-white'>
                    {item.title}
                  </h1>
                  <p className='text-base text-white'>{item.excerpt}</p>
                  <Icons.customRightArrow className='absolute bottom-0 hidden h-20 w-20 translate-x-10 pb-5 text-white group-hover:block' />
                  <Icons.customArrowUp className='absolute bottom-0 h-20 w-20 translate-x-10 pb-5 text-white group-hover:hidden' />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
