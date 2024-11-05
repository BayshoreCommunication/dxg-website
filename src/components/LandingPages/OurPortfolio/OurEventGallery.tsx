'use client';
import React from 'react';
import Image from 'next/image';
import { SERVICE_DATA } from '@/config/data';
import { Icons } from '@/components/Icons';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

import { fadeIn, staggerContainer } from '@/lib/motion';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { MotionDiv } from '@/components/Motion';
import { Paragraph, Title } from '@/components/Typography';
import { BottomToTop } from '@/components/Animation';

const infos = {
  title: 'Our Event Gallery',
  description:
    'Relive the highlights of our past events! Each image tells the story of our commitment to creating unforgettable experiences.',
};

const delay = 0.5;
const iconVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

export default function OurEventGallery() {
  return (
    <div className='md:mb10 mb-6 bg-black lg:mb-20'>
      <MaxWidthWrapper>
        <MotionDiv
          variants={staggerContainer(0.2, 0.1)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.25 }}
        >
          <div className='flex flex-col  items-center py-10'>
            <Title text={infos.title} />
            <Paragraph
              className='text-center md:max-w-4xl'
              key={0}
              text={infos.description}
            />
          </div>
          {/* Our Event Gallery */}

          <div className='grid grid-cols-6 gap-6'>
            <div className='  col-span-2 h-64 bg-white duration-300'></div>
            <div className='  h-64 bg-white'></div>
            <div className='  h-64 bg-white'></div>
            <div className='  h-64 bg-white'></div>
            <div className='  h-64 bg-white'></div>
          </div>
          {/* <div className='flex justify-center'>
            <Button
              className={`capsule-hover capsule-button w-full max-w-60 rounded-full bg-brand px-5 py-2 font-semibold text-white`}
              variant='link'
            >
              Submit
            </Button>
          </div> */}
        </MotionDiv>
      </MaxWidthWrapper>
    </div>
  );
}
