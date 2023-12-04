import React from 'react';
import Image from 'next/image';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { H1, Paragraph, Title } from '../Typography';
import { MotionP } from '../Motion';
import { textContainer } from '@/lib/motion';
import { HeadShot } from '../Headshot';
const infos = {
  title: 'Who We Are',
  description: [
    'Digital Xperience Group (DXG), a pioneering division of WLJ Consulting, is a premier partner in transforming events into unforgettable experiences. With our roots firmly planted in the event hospitality industry. We pride ourselves on elevating the digital and production quality of in-person, virtual, and hybrid events.',
    'Digital Xperience Group (DXG), a pioneering division of WLJ Consulting, is a premier partner in transforming events into unforgettable experiences. With our roots firmly planted in the event hospitality industry. We pride ourselves on elevating the digital and production quality of in-person, virtual, and hybrid events.',
  ],
  image: '/ace-jhonson.png',
};

const dotArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function WeAre() {
  return (
    <MaxWidthWrapper>
      <div className='flex flex-col items-center justify-center md:flex-row-reverse'>
        <HeadShot path={infos.image} />
        <div className='flex-1'>
          <Title text={infos.title} />
          {infos.description.map((text, index) => (
            <Paragraph key={index} text={text} />
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
