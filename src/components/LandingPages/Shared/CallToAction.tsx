import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const CallToAction = () => {
  return (
    <div
      className='w-full  bg-cover bg-center'
      style={{
        backgroundImage: `url('/landing-pages/my-event/cta-bg.jpg')`,
      }}
    >
      <MaxWidthWrapper>
        <div className='lg:py-18 flex flex-col items-center justify-center gap-6 py-10 md:py-14 lg:flex-row lg:justify-between'>
          <h3 className='w-full text-center text-3xl font-bold uppercase text-white lg:w-[80%] lg:text-start'>
            Contact Us for a Free Consultation
          </h3>

          <div className='flex w-full justify-center lg:w-[20%]'>
            <Link
              href='#'
              className=' mx-auto rounded-lg bg-[#F5982D] px-8 py-3 text-lg font-bold text-white duration-300 hover:bg-[#2DC6F5]'
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default CallToAction;
