'use client';

import SupportCard from '../Cards/SupportCard';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { H1, P, Paragraph, Title } from '../Typography';
import { Button } from '../ui/button';
import Link from 'next/link';
import { BottomToTop } from '../Animation';
import { exploreDXG, exploreWorlds } from '@/config/data';
import SupportCardTwo from '../Cards/SupportCardTwo';
import { useState } from 'react';
import { MotionDiv } from '../Motion';
import { staggerContainer } from '@/lib/motion';
import ExploreCard from '../Cards/ExploreCard';
const infos = {
  title: 'Who We Support - 3 P’s of Partnership',
  description: `Our core teams have an average of 15+ years of experience with backgrounds in live events, virtual and hybrid corporate events, broadcast, and entertainment & performances. With this experience, we are a sought-after resource and view ourselves as the missing piece to your puzzle. At DXG, we support `,
};

export default function WeSupport() {
  const [active, setActive] = useState(2);
  return (
    <div className='bg-black'>
      <div className='container'>
        <div className='flex flex-col  items-end py-10'>
          <Title text={infos.title} />
          <Paragraph text={infos.description} className='md:max-w-2xl' />

          <BottomToTop>
            <Button
              asChild
              variant={'outline'}
              className='rounded-full border-brand bg-transparent px-7 text-brand hover:bg-brand hover:text-white capsule-hover capsule-button'
            >
              <h1>Read More</h1>
            </Button>
          </BottomToTop>
        </div>
        {/* <MotionDiv className='options flex min-h-[500px] skew-y-6 transform flex-col items-stretch overflow-hidden md:flex-row'>
          {exploreDXG.map((item, index) => (
            <SupportCard key={index} data={item} />
          ))}
        </MotionDiv> */}
        {/* <div className='mt-[31px] flex max-w-[370px] flex-col gap-[24px]'>
          {exploreDXG.map((item, index) => (
            <SupportCardTwo
              key={index}
              data={item}
              number={`${index < 10 ? '0' : ''} ${index + 1}`}
            />
          ))}
        </div> */}
        <div
          className={` mx-auto flex min-h-[500px] w-full skew-y-6 flex-col `}
        >
          <MotionDiv
            variants={staggerContainer(0.2, 0.1)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className=' flex   flex-col gap-6 lg:flex-row'
          >
            {exploreWorlds.map((world, index) => (
              <ExploreCard
                key={world.id}
                {...world}
                index={index}
                active={active}
                handleCardHover={setActive}
              />
            ))}
          </MotionDiv>
        </div>
      </div>
    </div>
  );
}
