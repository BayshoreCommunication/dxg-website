import React from 'react';
import Image from 'next/image';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { H1, P } from '../Typography';

const infos = {
  title: 'Who We Are',
  description: [
    'Digital Xperience Group (DXG), a pioneering division of WLJ Consulting, is a premier partner in transforming events into unforgettable experiences. With our roots firmly planted in the event hospitality industry. We pride ourselves on elevating the digital and production quality of in-person, virtual, and hybrid events.',
    'Digital Xperience Group (DXG), a pioneering division of WLJ Consulting, is a premier partner in transforming events into unforgettable experiences. With our roots firmly planted in the event hospitality industry. We pride ourselves on elevating the digital and production quality of in-person, virtual, and hybrid events.',
  ],
  image: '/headshot.png',
};

const dotArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function WeAre() {
  return (
    <MaxWidthWrapper>
      <div className='flex flex-col items-center justify-center md:flex-row-reverse'>
        <div className='relative my-10 min-h-[340px] w-[100%] flex-1 md:min-h-[400px] lg:min-h-[500px] '>
          <div className='flex min-h-[280px] items-end justify-end  md:min-h-[340px] lg:min-h-[400px] '>
            <div className='flex max-w-[220px] flex-row flex-wrap justify-evenly gap-16'>
              {dotArray.map((dot, index) => (
                <div
                  key={index}
                  className='mt-2 h-6 w-6 rounded-full bg-dot'
                ></div>
              ))}
            </div>
          </div>
          <div className='absolute left-1/2 top-1/2 -translate-x-1/4 -translate-y-1/2 transform'>
            <Image src={infos.image} alt='headshot' width={400} height={400} />
          </div>
        </div>
        <div className='flex-1'>
          <H1 text={infos.title} />
          {infos.description.map((text, index) => (
            <P key={index} text={text} />
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
