'use client';
import { slideIn, staggerContainer } from '@/lib/motion';
import { MotionDiv } from './Motion';
import Image from 'next/image';

interface HeadShotProps {
  path: string;
}
const dotArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export const HeadShot = ({ path }: HeadShotProps) => (
  <MotionDiv className='relative my-10 min-h-[340px] w-full flex-1 md:min-h-[400px] lg:min-h-[500px] '>
    <div className='flex min-h-[280px] items-end justify-end  md:min-h-[340px] lg:min-h-[400px] '>
      <div className='flex max-w-[220px] flex-row flex-wrap justify-evenly gap-16'>
        {dotArray.map((dot, index) => (
          <div key={index} className='mt-2 h-6 w-6 rounded-full bg-dot'></div>
        ))}
      </div>
    </div>
    <MotionDiv
      variants={slideIn('up', 'tween', 0.2, 1)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.2 }}
      className='absolute left-[40%] top-0 -translate-x-1/4 -translate-y-1/2 transform'
    >
      <Image src={path} alt='headshot' width={400} height={400} />
    </MotionDiv>
  </MotionDiv>
);
