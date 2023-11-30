import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import TestimonialSlider from './TestimonialSlider';
import { Icons } from './Icons';
import { H1, P, Paragraph, Title } from './Typography';
import TestimonialSliderTwo from './TestimonialSliderTwo';

const infos = {
  title: 'Client Testimonials',
  description:
    'With the average experience of our team members being ten-plus years in the event space, DXG is a sought-after resource by event planners, event production companies, and event platforms.',
};

function Testimonial() {
  return (
    <div className='bg-differentBackground'>
      <MaxWidthWrapper>
        <div className='flex flex-col items-center justify-center'>
          <div className='my-10 max-w-3xl text-center'>
            <Title text={infos.title} />
            <Paragraph key={0} text={infos.description} />
          </div>

          <div className='relative w-full '>
            {/* <TestimonialSlider /> */}
            <TestimonialSliderTwo />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default Testimonial;
