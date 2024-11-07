import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoArrowForward } from 'react-icons/io5';

const successfulEventsData = [
  {
    img: '/landing-pages/client-success-story/successful-event-1.jpg',
    category: 'Music TREND',
    title: 'Innovative Solutions',
  },
  {
    img: '/landing-pages/client-success-story/successful-event-2.jpg',
    category: 'Music TREND',
    title: 'Expert Team',
  },
  {
    img: '/landing-pages/client-success-story/successful-event-3.jpg',
    category: 'Music TREND',
    title: 'Customer Satisfaction',
  },
];
const OurSuccessfulEvents = () => {
  return (
    <div className='bg-black py-3 md:py-10 lg:py-20'>
      <MaxWidthWrapper>
        <div>
          <div className='mb-10 max-w-3xl'>
            <p className='text-base text-white '>DXG 2024</p>
            <h2 className='mb-6 mt-2 text-5xl font-semibold  text-white'>
              Our Successful Events.
            </h2>
            <p className='text-base text-white opacity-70 md:text-xl'>
              Our planning process is thorough and collaborative, involving
              state-of-the-art technology and innovative solutions to meet and
              exceed your expectations. With us, you are not just hosting an
              event but crafting an experience.
            </p>
          </div>
          <div className='relative'>
            <div className=' absolute -top-[40%] right-0'>
              <Image
                src='/landing-pages/client-success-story/successful-events-bg.png'
                alt='successful-event'
                width={700}
                height={200}
              ></Image>
            </div>
            <div className='relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-3'>
              {successfulEventsData.map((item, index) => (
                <div key={index}>
                  <div className='group duration-300'>
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={720}
                      height={400}
                    ></Image>
                    <div className='flex items-center justify-between bg-white p-5'>
                      <div>
                        <p className='font-bold uppercase  opacity-70'>
                          {item.category}
                        </p>
                        <h4 className='text-xl font-semibold md:text-2xl'>
                          {item.title}
                        </h4>
                      </div>
                      <Link
                        href='#'
                        className='bg-[#C7C7C7] p-4 duration-300 group-hover:bg-[#1FB1E9] group-hover:text-white'
                      >
                        <IoArrowForward className='text-2xl' />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default OurSuccessfulEvents;
