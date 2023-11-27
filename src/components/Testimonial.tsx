import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import TestimonialSlider from './TestimonialSlider';
import { Icons } from './Icons';
function Testimonial() {
  return (
    <div className='bg-differentBackground'>
      <MaxWidthWrapper>
        <div className='flex flex-col items-center justify-center'>
          <div className='my-10'>
            <h1 className='text-center text-2xl font-bold text-white md:text-4xl'>
              <span className='border-b border-b-brand text-brand'>Client</span>{' '}
              Testimonials
            </h1>
            <p className='mt-4 px-6 text-center text-base text-white md:mt-6 md:px-12'>
              With the average experience of our team members being ten-plus
              years in the event space, DXG is a sought-after resource by event
              planners, event production companies, and event platforms.
            </p>
          </div>
          <div className='relative w-full'>
            <TestimonialSlider />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default Testimonial;
