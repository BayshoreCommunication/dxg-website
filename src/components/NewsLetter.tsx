import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
export default function NewsLetter() {
  return (
    <MaxWidthWrapper className='py-16'>
      <div className='grid grid-cols-1 rounded-3xl bg-sky-500 px-5 py-8 md:grid-cols-5'>
        <div className='col-span-3'>
          <h1 className='text-center text-2xl font-semibold capitalize text-white md:text-left md:text-3xl'>
            See our latest and greatest
          </h1>
          <h2 className='line my-1 text-center text-xl uppercase text-white md:text-left md:text-2xl'>
            Subscribe to our NewsLetter
          </h2>
          <p className='text-center text-sm text-white md:text-left md:text-base'>
            With the average experience of our team members being ten-plus years
            in the event space, DXG is a sought-after resource by event
            planners, event production companies, and event platforms.
          </p>
        </div>
        <div className='col-span-2 mt-5 md:ml-2 md:mt-0'>
          <Input className='mb-4' placeholder='Name' />
          <Input className='mb-4' placeholder='Email' />
          <Button className=' w-full bg-slate-800'>Subscribe</Button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
