'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '@/lib/motion';
import { MotionDiv } from '../Motion';
import { Icons } from '../Icons';
import { Button } from '../ui/button';
import { P } from '../Typography';
import Link from 'next/link';
import { zoomIn } from '@/lib/motion';

const ExploreCard = ({
  id,
  imgUrl,
  title,
  description,
  index,
  active,
  handleCardHover,
}) => (
  <MotionDiv
    variants={fadeIn('right', 'tween', index * 0.4, 0.75)}
    className={`relative ${
      active === id ? 'flex-[10] lg:flex-[3.5]' : 'flex-[2] lg:flex-[0.5]'
    } duration-[0.7s] ease-out-flex flex h-[500px] min-w-[100px] cursor-pointer items-center justify-center transition-[flex]`}
    style={{
      backgroundImage: `linear-gradient(rgba(45, 198, 245, 0.6), rgba(45, 198, 245, 0)), url(${imgUrl})`,
      transition: '0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95)',
      backgroundSize: 'auto 100%',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      borderRadius: '40px',
    }}
    onMouseEnter={() => handleCardHover(id)}
    onMouseLeave={() => handleCardHover(null)}
  >
    {active !== id ? (
      <h1 className='absolute z-0 text-3xl font-extrabold  uppercase text-white lg:bottom-16 lg:origin-[0,0] lg:rotate-[-90deg]'>
        {title}
      </h1>
    ) : (
      <div className=' flex h-full flex-col items-center justify-center bg-[rgba(0,0,0,0.5)] p-8'>
        <motion.div>
          <div className='flex flex-col items-center justify-center'>
            <div className=' '>
              <Icons.monitor className='h-12 w-12 text-white' />
            </div>
            <h1 className=' py-4 text-3xl font-bold uppercase text-white'>
              {title}
            </h1>
            <p className='mb-3 text-center text-base font-medium leading-[27px] tracking-[0.18px] text-white'>
              {description}
            </p>
            <div className='mt-5'>
              <Button
                variant='outline'
                className='rounded-full border-brand bg-transparent text-brand'
              >
                <Link href='/'>Learn More</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    )}
  </MotionDiv>
);

export default ExploreCard;
