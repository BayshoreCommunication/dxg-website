import { BreadCrumb } from '@/components/Breadcrumb';
import React from 'react';
import Testimonial from '@/components/Testimonial';
import NewsLetter from '@/components/NewsLetter';
export default function WhoWeAre() {
  return (
    <div>
      <BreadCrumb
        buttonTitle='Book an appoinment'
        description='Digital Xperience Group (DXG), a pioneering division of WLJ Consulting, is a premier partner in transforming events into unforgettable experiences. With our roots firmly planted in the event hospitality industry. We pride ourselves on elevating the digital and production quality of in-person, virtual, and hybrid events.'
        titleProps={{
          coloredText: 'WHO',
          postText: 'WE ARE',
          variant: 'caps',
          texAlign: 'text-left',
        }}
      />
      <Testimonial />
      <div className='bg-black'>
        <NewsLetter />
      </div>
    </div>
  );
}
