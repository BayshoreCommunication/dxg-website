import { BreadCrumb } from '@/components/Breadcrumb';
import React from 'react';
import Testimonial from '@/components/Testimonial';
import NewsLetter from '@/components/NewsLetter';
import Image from 'next/image';
import WhoWeAreBanner from '../../../public/who-we-are/whow-we-are-banner.png';
import WhoWeAreBannerInfo from '../../../public/who-we-are/who-we-are-info.png';
import { MotionDiv, MotionP } from '@/components/Motion';
import { fadeIn, staggerContainer } from '@/lib/motion';
export default function WhoWeAre() {
  return (
    <div className=' bg-black'>
      <BreadCrumb
        buttonTitle='Book an appointment'
        description='Digital Xperience Group (DXG), a pioneering division of WLJ Consulting, is a premier partner in transforming events into unforgettable experiences. With our roots firmly planted in the event hospitality industry. We pride ourselves on elevating the digital and production quality of in-person, virtual, and hybrid events.'
        titleProps={{
          coloredText: 'WHO',
          postText: 'WE ARE',
          variant: 'caps',
          texAlign: 'text-left',
        }}
      />
      <Image
        quality={100}
        src={WhoWeAreBanner}
        alt='Who We Are - DXG'
        className='w-full'
      />
      <div className='container py-9 lg:py-16'>
        <MotionDiv
          variants={staggerContainer(0.2, 0.1)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.25 }}
          className='grid grid-cols-12 items-center  gap-8  lg:gap-12 xl:gap-16'
        >
          <div className=' col-span-12  lg:col-span-7'>
            <MotionP
              variants={fadeIn('up', 'spring', 0.2, 1)}
              className='mb-4 text-justify text-base font-normal leading-[30px] tracking-[0.18px] text-white lg:mb-10'
            >
              Our diverse team of audiovisual technical producers, directors,
              project managers, engineers, technicians, and creatives brings a
              collective wealth of experience to your event. We{"'"}ve
              orchestrated the marvel of audiovisuals for many notable events,
              pushing the boundaries of what{"'"}s possible in event production.
            </MotionP>
            <MotionP
              variants={fadeIn('up', 'spring', 0.3, 1)}
              className='font-font-normal mb-4 text-justify  text-base leading-[30px] tracking-[0.18px] text-white lg:mb-10'
            >
              Our diverse team of audiovisual technical producers, directors,
              project managers, engineers, technicians, and creatives brings a
              collective wealth of experience to your event. We{"'"}ve
              orchestrated the marvel of audiovisuals for many notable events,
              pushing the boundaries of what{"'"}s possible in event production.
            </MotionP>
            <MotionP
              variants={fadeIn('up', 'spring', 0.4, 1)}
              className=' lg:mb-10font-font-normal mb-4 text-justify text-base leading-[30px] tracking-[0.18px] text-white'
            >
              Our diverse team of audiovisual technical producers, directors,
              project managers, engineers, technicians, and creatives brings a
              collective wealth of experience to your event. We{"'"}ve
              orchestrated the marvel of audiovisuals for many notable events,
              pushing the boundaries of what{"'"}s possible in event production.
            </MotionP>
          </div>
          <MotionDiv
            variants={fadeIn('left', 'tween', 0.2, 1)}
            className=' col-span-12 lg:col-span-5'
          >
            <Image
              src={WhoWeAreBannerInfo}
              alt='Who We are Information'
              className='w-full'
            />
          </MotionDiv>
        </MotionDiv>
      </div>

      <Testimonial />

      <div className='bg-black'>
        <NewsLetter />
      </div>
    </div>
  );
}
