import React from 'react';
import Image from 'next/image';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { H1, P } from '../Typography';

const infos = {
  title: 'Who We Are',
  description: [
    'When it comes to putting on an event, event organizers and managers need to ensure they have the right partner to deliver The Triple E Xperience:',
    'When it comes to putting on an event, event organizers and managers need to ensure they have the right partner to deliver The Triple E Xperience:',
  ],
  image: '/headshot.png',
};

const dotArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function WeAre() {
  return (
    <MaxWidthWrapper>
      <div className=' flex  flex-col items-center justify-center md:flex-row-reverse'>
        <div className='relative min-h-[340px] w-[100%] flex-1 md:min-h-[400px] lg:min-h-[500px] '>
          <div className='flex min-h-[280px] items-end justify-end  md:min-h-[340px] lg:min-h-[400px] '>
            <div className='flex max-w-[220px] flex-row flex-wrap justify-evenly gap-16'>
              {dotArray.map((dot, index) => (
                <div
                  key={index}
                  className='bg-dot mt-2 h-6 w-6 rounded-full'
                ></div>
              ))}
            </div>
          </div>
          <div className='absolute left-1/2 top-1/2   w-[60%] -translate-x-1/2 -translate-y-1/2 transform'>
            <Image src={infos.image} alt='headshot' width={400} height={400} />
          </div>
        </div>
        <div className='mt-10 flex-1'>
          <H1 text={infos.title} />
          {infos.description.map((text, index) => (
            <P key={index} text={text} />
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
