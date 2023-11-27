import { BreadCrumb } from '@/components/Breadcrumb';
import React from 'react';
import Testimonial from '@/components/Testimonial';
import NewsLetter from '@/components/NewsLetter';
export default function Services() {
  return (
    <div className='bg-black'>
      <BreadCrumb
        buttonTitle='Book an appoinment'
        description='Demo Digital Xperience Group (DXG), a pioneering division of WLJ Consulting, is a premier partner in transforming events into unforgettable experiences. With our roots firmly planted in the event hospitality industry. We pride ourselves on elevating the digital and production quality of in-person, virtual, and hybrid events.'
        titleProps={{
          coloredText: 'Our',
          postText: 'Services',
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
