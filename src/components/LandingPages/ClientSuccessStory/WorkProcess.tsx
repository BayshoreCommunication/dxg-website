import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import React from 'react';
import ServiceTabSection from './ServiceTabSection';

const WorkProcess = () => {
  return (
    <div className='bg-[#111617] py-3 md:py-10 lg:py-20'>
      <MaxWidthWrapper>
        <div className='grid grid-cols-1 gap-12 md:grid-cols-2'>
          <div>
            <p className='text-base text-[#2DC6F5] md:text-xl'>
              Who We Support - 3 P’s of Partnership
            </p>
            <h2 className='mb-6 mt-2 text-6xl uppercase text-white'>
              How DXG <br /> resolved them.
            </h2>
            <p className='text-base text-white opacity-70 md:text-xl'>
              Our planning process is thorough and collaborative, involving
              state-of-the-art technology and innovative solutions to meet and
              exceed your expectations. With us, you’re not just hosting an
              event but crafting an experience.
            </p>
          </div>
          <div className='flex flex-col gap-10'>
            {/* <div className=' border-b-4 border-white border-opacity-20 text-center text-sm font-medium  text-white '>
              <ul className='-mb-1 flex flex-wrap '>
                <li className='me-2'>
                  <a
                    href='#'
                    className='active inline-block rounded-t-lg border-b-4 border-white p-4 ps-0 text-lg text-white md:text-2xl  '
                    aria-current='page'
                  >
                    Event Planning
                  </a>
                </li>
                <li className='me-2'>
                  <a
                    href='#'
                    className='inline-block rounded-t-lg border-b-4 border-transparent p-4 text-lg text-white text-opacity-40 hover:border-white hover:text-white md:text-2xl'
                  >
                    Event Production
                  </a>
                </li>
                <li className='me-2'>
                  <a
                    href='#'
                    className='inline-block rounded-t-lg border-b-4 border-transparent p-4  text-lg text-white text-opacity-40 hover:border-white hover:text-white md:text-2xl '
                  >
                    Event Platforms
                  </a>
                </li>
              </ul>
            </div> */}
            <ServiceTabSection />

            {/* <ol className='relative ms-3 max-w-2xl  border-s border-gray-200'>
              <li className='mb-10 ms-6'>
                <span className='absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#2DC6F5] ring-2 ring-[#2DC6F5]  '>
                  <p>1</p>
                </span>
                <div className=' ms-3'>
                  <h3 className='mb-1 text-lg font-semibold text-white '>
                    Make A Good Plan
                  </h3>
                  <p className='text-base font-normal text-white opacity-60'>
                    Register your personal data in customer service and take
                    coffee before entering the room
                  </p>
                </div>
              </li>
              <li className='mb-10 ms-6'>
                <span className='absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#2DC6F5] ring-2 ring-[#2DC6F5]  '>
                  <p>2</p>
                </span>
                <div className=' ms-3'>
                  <h3 className='mb-1 text-lg font-semibold text-white '>
                    Providing Insights
                  </h3>
                  <p className='text-base font-normal text-white opacity-60'>
                    Many early researchers are challanged by aspect of the
                    design and implementation of research studies as well the
                    efective dissemination ...
                  </p>
                </div>
              </li>
              <li className='mb-10 ms-6'>
                <span className='absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#2DC6F5] ring-2 ring-[#2DC6F5]  '>
                  <p>3</p>
                </span>
                <div className=' ms-3'>
                  <h3 className='mb-1 text-lg font-semibold text-white '>
                    Creative Solutions
                  </h3>
                  <p className='text-base font-normal text-white opacity-60'>
                    Register your personal data in customer service and take
                    food before entering the room
                  </p>
                </div>
              </li>
              <li className=' ms-6'>
                <span className='absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#2DC6F5] ring-2 ring-[#2DC6F5]  '>
                  <p>4</p>
                </span>
                <div className=' ms-3'>
                  <h3 className='mb-1 text-lg font-semibold text-white '>
                    Leveraging
                  </h3>
                  <p className='text-base font-normal text-white opacity-60'>
                    Research encompasses a cariety of investigative methods used
                    to add context and insight to the design process
                  </p>
                </div>
              </li>
            </ol> */}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default WorkProcess;
