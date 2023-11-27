import { BreadCrumb } from '@/components/Breadcrumb';
import React from 'react';
import Testimonial from '@/components/Testimonial';
import NewsLetter from '@/components/NewsLetter';
import { SERVICES_PAGE_DATA } from '@/config/data';
import { ServiceCard } from '@/components/ServiceCard';

export default function Services() {
  return (
    <div className='bg-black'>
      <BreadCrumb
        buttonTitle='BOOK AN APPOINMENT'
        description='Demo Digital Xperience Group (DXG), a pioneering division of WLJ Consulting, is a premier partner in transforming events into unforgettable experiences. With our roots firmly planted in the event hospitality industry. We pride ourselves on elevating the digital and production quality of in-person, virtual, and hybrid events.'
        titleProps={{
          coloredText: 'Our',
          postText: 'Services',
          variant: 'caps',
          texAlign: 'text-left',
        }}
      />
      <div className='container py-9 lg:py-16'>
        <div className='grid grid-cols-12 gap-5'>
          {SERVICES_PAGE_DATA.map((service) => {
            return (
              <div
                key={service.id}
                className='col-span-12 md:col-span-6 lg:col-span-4'
              >
                <ServiceCard
                  cardImage={service.image}
                  captionPosition={service.captionPosition}
                  cardTitle={service.caption}
                />
              </div>
            );
          })}
        </div>
      </div>
      <Testimonial />
      <div className='bg-black'>
        <NewsLetter />
      </div>
    </div>
  );
}
