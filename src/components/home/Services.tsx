import React from 'react';
import Image from 'next/image';
import { SERVICE_DATA } from '@/config/data';
import { Icons } from '@/components/Icons';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import MaxWidthWrapper from '../MaxWidthWrapper';
export default function Services() {
  return (
    <div className='bg-black'>
      <MaxWidthWrapper>
        <div className='flex flex-col  items-start py-10'>
          <h1 className=' text-2xl font-bold text-white md:text-4xl'>
            <span className='border-b border-b-brand text-brand'>Our</span>{' '}
            Service
          </h1>
          <p className='my-4 text-left text-base text-white md:mt-6 md:max-w-lg'>
            With the average experience of our team members being ten-plus years
            in the event space, DXG is a sought-after resource by event
            planners, event production companies, and event platforms.
          </p>
          <Button
            asChild
            variant={'outline'}
            className='rounded-full border-brand bg-transparent px-7 text-brand hover:bg-brand hover:text-white'
          >
            <Link href='/'>Read More</Link>
          </Button>
        </div>
      </MaxWidthWrapper>
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
