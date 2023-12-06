import { MotionDiv, MotionH1, MotionP } from '@/components/Motion';
import meeting from '../../../../public/why-dxg/service.png';
import presentation from '../../../../public/why-dxg/process.png';
import experience from '../../../../public/why-dxg/experience.png';

import Image from 'next/image';
import { fadeIn, slideIn, staggerContainer, zoomIn } from '@/lib/motion';
import NumberAnimation from '@/components/NumberAnimation';

export const WhyChooseUsSection = () => {
  return (
    <div className='bg-black py-10'>
      {/* <MaxWidthWrapper> */}
      <MotionDiv
        variants={staggerContainer(0.2, 0.1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className='container'
      >
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          {/* Images */}
          <div className='flex w-full items-end gap-4'>
            <MotionDiv variants={zoomIn(0.2, 1)} className='relative w-1/2'>
              <Image
                src={presentation}
                width={316}
                height={432}
                alt='Presentation'
                className='rounded-3xl'
              />
            </MotionDiv>
            <div className='relative flex w-1/2 flex-col gap-4'>
              <MotionDiv
                variants={fadeIn('down', 'tween', 0.2, 1)}
                className='absolute right-4 top-[-16px] flex h-16 w-12 flex-col items-center justify-center bg-brand md:right-10 md:top-[-24px] md:h-14 md:w-12'
              >
                <h1 className='md:text-md text-center font-bold leading-none text-white'>
                  20+
                </h1>

                <h1 className='md:text-md text-center font-light leading-none text-white'>
                  Years
                </h1>
              </MotionDiv>
              <MotionDiv variants={zoomIn(0.3, 1)}>
                <Image
                  src={meeting}
                  width={315}
                  height={182}
                  alt='Meeting'
                  className='rounded-3xl'
                />
              </MotionDiv>
              <MotionDiv variants={zoomIn(0.4, 1)}>
                <Image
                  src={experience}
                  width={315}
                  height={182}
                  alt='Experience'
                  className='rounded-3xl'
                />
              </MotionDiv>
            </div>
          </div>
          {/* Texts */}
          <div className='w-full'>
            <MotionP
              variants={fadeIn('left', 'tween', 0.2, 1)}
              className='text-brand'
            >
              Why Choose Us
            </MotionP>
            <MotionH1
              variants={fadeIn('left', 'tween', 0.3, 1)}
              className='text-2xl font-bold text-white'
            >
              Take your Business to the next level
            </MotionH1>
            <MotionP
              variants={fadeIn('left', 'tween', 0.4, 1)}
              className='text-white'
            >
              I am a person who is positive about every aspect of life. There
              are many things I like to do, to see, and to experience. I like to
              read, I like to write; I like to think, I like to dream; I like to
              talk, I like to listen. I am a person who is positive about every
              aspect of life. There are many things I like to do, to see, and to
              experience. I like to read, I like to write; I like to think, I
              like to dream; I like to talk, I like to listen.
            </MotionP>
            <div className='mt-4 flex w-full gap-4'>
              <MotionDiv
                variants={fadeIn('left', 'tween', 0.4, 1)}
                className='flex h-[120px] w-1/3 flex-col items-center justify-center bg-header'
              >
                <NumberAnimation className='text-3xl' value={40} />
                <p className='text-xs font-light text-white md:text-base'>
                  Project Complete
                </p>
              </MotionDiv>
              <MotionDiv
                variants={fadeIn('left', 'tween', 0.5, 1)}
                className='flex h-[120px] w-1/3 flex-col items-center justify-center bg-header'
              >
                <NumberAnimation className='text-3xl' value={35} />
                <p className=' text-xs font-light text-white md:text-base'>
                  Client Happy
                </p>
              </MotionDiv>
              <MotionDiv
                variants={fadeIn('left', 'tween', 0.6, 1)}
                className='flex h-[120px] w-1/3 flex-col items-center justify-center bg-header'
              >
                <NumberAnimation className='text-3xl' value={5} />
                <p className=' text-xs font-light text-white md:text-base'>
                  Project Running
                </p>
              </MotionDiv>
            </div>
          </div>
        </div>
      </MotionDiv>
      {/* </MaxWidthWrapper> */}
    </div>
  );
};
