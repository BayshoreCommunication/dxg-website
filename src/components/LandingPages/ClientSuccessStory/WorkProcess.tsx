import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import React from 'react';

const WorkProcess = () => {
  return (
    <div className='bg-[#111617] py-3 md:py-10 lg:py-20'>
      <MaxWidthWrapper>
        <div className='grid grid-cols-1 gap-12 md:grid-cols-2'>
          <div>
            <p className='text-base text-[#2DC6F5] md:text-xl'>
              Who We Support - 3 P’s of Partnership
            </p>
            <h2 className='mb-6 mt-2 text-6xl text-white'>
              How DXG <br /> resolved them.
            </h2>
            <p className='text-base text-white opacity-70 md:text-xl'>
              Our planning process is thorough and collaborative, involving
              state-of-the-art technology and innovative solutions to meet and
              exceed your expectations. With us, you’re not just hosting an
              event but crafting an experience.
            </p>
          </div>
          <div></div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default WorkProcess;
