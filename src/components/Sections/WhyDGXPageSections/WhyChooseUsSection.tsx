import meeting from '../../../../public/meeting.png';
import presentation from '../../../../public/presentation.png';

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Image from 'next/image';

export const WhyChooseUsSection = () => {
  return (
    <div className='bg-black py-10'>
      <MaxWidthWrapper>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          {/* Images */}
          <div className='flex items-end gap-4'>
            <div>
              <Image
                src={presentation}
                width={300}
                height={100}
                alt='Presentation'
              />
            </div>
            <div className='relative flex flex-col gap-4'>
              <div className='absolute right-4 top-[-16px] flex h-16 w-12 flex-col items-center justify-center bg-brand md:right-10 md:top-[-24px] md:h-14 md:w-12'>
                <h1 className='md:text-md text-center font-bold leading-none text-white'>
                  20+
                </h1>
                <h1 className='md:text-md text-center font-light leading-none text-white'>
                  Years
                </h1>
              </div>
              <Image
                src={meeting}
                width={300}
                height={100}
                alt='Presentation'
              />
              <Image
                src={meeting}
                width={300}
                height={100}
                alt='Presentation'
              />
            </div>
          </div>
          {/* Texts */}
          <div className=''>
            <p className='text-brand'>Why Choose Us</p>
            <h1 className='text-2xl font-bold text-white'>
              Take your Business to the next level
            </h1>
            <p className='text-white'>
              I am a person who is positive about every aspect of life. There
              are many things I like to do, to see, and to experience. I like to
              read, I like to write; I like to think, I like to dream; I like to
              talk, I like to listen. I am a person who is positive about every
              aspect of life. There are many things I like to do, to see, and to
              experience. I like to read, I like to write; I like to think, I
              like to dream; I like to talk, I like to listen.
            </p>
            <div className='mt-4 flex gap-4'>
              <div className='flex h-[120px] w-[150px] flex-col items-center justify-center bg-header'>
                <h1 className='text-3xl font-bold text-brand'>40+</h1>
                <p className='text-sm font-light text-white md:text-base'>
                  Project Complete
                </p>
              </div>
              <div className='flex h-[120px] w-[150px] flex-col items-center justify-center bg-header'>
                <h1 className='text-3xl font-bold text-brand'>35+</h1>
                <p className=' text-sm font-light text-white md:text-base'>
                  Client Happy
                </p>
              </div>
              <div className='flex h-[120px] w-[150px] flex-col items-center justify-center bg-header'>
                <h1 className='text-3xl font-bold text-brand'>5+</h1>
                <p className=' text-sm font-light text-white md:text-base'>
                  Project Running
                </p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
