'use client';
import React from 'react';
import Image from 'next/image';
import { SERVICE_DATA } from '@/config/data';
import { Icons } from '@/components/Icons';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { H1, P } from '../Typography';
import { motion, Variants } from 'framer-motion';

const infos = {
  title: 'Our Service',
  description:
    'With the average experience of our team members being ten-plus years in the event space, DXG is a sought-after resource by event planners, event production companies, and event platforms.',
};
const delay = 0.5;
const iconVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};
export default function Services() {
  return (
    <div className='bg-black'>
      <MaxWidthWrapper>
        <div className='flex flex-col  items-start py-10'>
          <H1 text={infos.title} />
          <P className='md:max-w-lg' text={infos.description} />
          <Button
            asChild
            variant={'outline'}
            className='rounded-full border-brand bg-transparent px-7 text-brand hover:bg-brand hover:text-white'
          >
            <Link href='/'>Read More</Link>
          </Button>
        </div>
        <div className='flex flex-col md:flex-row'>
          {SERVICE_DATA.map((item, index) => {
            return (
              <div
                key={index}
                className={`min-h-[200px] flex-1 justify-center overflow-hidden border border-gray-400 bg-cover bg-center bg-no-repeat md:min-h-[420px]`}
                style={{ backgroundImage: `url('${item.image}')` }}
              >
                <div
                  className={`group relative  bg-black bg-opacity-50 transition delay-100 animate-in hover:bg-sky-700 hover:bg-opacity-80`}
                >
                  <div className='flex flex-row items-center justify-between px-10 group-hover:hidden md:flex-col '>
                    <div className='flex min-h-[200px] transform flex-col items-start justify-center md:min-h-[380px] md:-rotate-90 '>
                      {item.heading.split(';').map((word, index) => {
                        return (
                          <div key={index} className=''>
                            <h1 className='text-xl font-bold uppercase text-white'>
                              {word}
                            </h1>
                          </div>
                        );
                      })}
                    </div>
                    <div className='flex justify-center'>
                      <Icons.customArrowUp className='flex h-20 w-20  items-center justify-center  pb-5 text-white' />
                    </div>
                  </div>

                  <motion.div
                    transition={{
                      duration: 0.4,
                      delay,
                      type: 'easeInOut',
                      staggerChildren: 0.5,
                      staggerDirection: -1,
                    }}
                    className='hidden flex-row  px-5 group-hover:flex md:flex-col'
                  >
                    <motion.div className='min-h-[300px] pt-16 md:min-h-[380px]'>
                      <h1 className='py-2 text-xl font-bold uppercase text-white'>
                        {item.title}
                      </h1>
                      <p className='text-base text-white'>{item.excerpt}</p>
                    </motion.div>
                    <motion.div
                      className='flex justify-center pt-12 md:pt-0'
                      initial='hidden'
                      animate='visible'
                      variants={iconVariants}
                      transition={{ duration: 0.5 }}
                    >
                      <Icons.customRightArrow className='h-20 w-20  pb-5 text-white ' />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
