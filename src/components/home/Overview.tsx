import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icons } from '../Icons';
import { Button } from '../ui/button';
import OverviewSlider from './OverviewSlider';
const data = [
  {
    title: 'Engage',
    description:
      'With the average experience of our team members being ten-plus years in the event space, DXG is a sought-after resource by event planners, event production companies, and event platforms.',
    image: '/banner/engage.png',
    icon: 'man',
    href: '/',
  },
  {
    title: 'Exchange',
    description:
      'With the average experience of our team members being ten-plus years in the event space, DXG is a sought-after resource by event planners, event production companies, and event platforms.',
    image: '/banner/exchange.png',
    icon: 'media',
    href: '/',
  },
  {
    title: 'Enlight',
    description:
      'With the average experience of our team members being ten-plus years in the event space, DXG is a sought-after resource by event planners, event production companies, and event platforms.',
    image: '/banner/enlight.png',
    icon: 'monitor',
    href: '/',
  },
];

export default function Overview() {
  return (
    <div>
      <div className='md:hidden'>
        <OverviewSlider data={data} />
      </div>
      <div className='hidden md:flex'>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="h-full w-full bg-[url('/banner/engage.png')] bg-cover bg-center bg-no-repeat"
            >
              <div
                className={`group flex flex-col items-center justify-center bg-black bg-opacity-50 hover:bg-sky-700  hover:bg-opacity-60 `}
              >
                <div className='relative mt-10 text-sky-500 group-hover:text-white'>
                  {item.icon === 'man' && <Icons.man className='h-20 w-20' />}
                  {item.icon === 'media' && (
                    <Icons.media className='h-20 w-20' />
                  )}
                  {item.icon === 'monitor' && (
                    <Icons.monitor className='h-20 w-20' />
                  )}
                </div>
                <div className='px-10 py-5 text-center'>
                  <h1 className='py-2 text-2xl font-bold uppercase text-white'>
                    {item.title}
                  </h1>
                  <p className='text-base text-white'>{item.description}</p>

                  <div className='mt-6 h-20'>
                    <Button
                      className='hidden rounded-full bg-white text-sky-400 hover:bg-white group-hover:inline-flex'
                      asChild
                    >
                      <Link href={item.href}>Read More</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
