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
      <div className="sm:block md:hidden">
        <OverviewSlider data={data} />
      </div>
      <div className="sm:hidden md:flex">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="h-full w-full bg-[url('/banner/engage.png')] bg-no-repeat bg-center bg-cover"
            >
              <div
                className={`flex flex-col bg-black bg-opacity-50 hover:bg-sky-700 hover:bg-opacity-60 justify-center items-center  group `}
              >
                <div className="relative text-sky-500 group-hover:text-white mt-10">
                  {item.icon === 'man' && (
                    <Icons.man className="h-20 w-20" />
                  )}
                  {item.icon === 'media' && (
                    <Icons.media className="h-20 w-20" />
                  )}
                  {item.icon === 'monitor' && (
                    <Icons.monitor className="h-20 w-20" />
                  )}
                </div>
                <div className="py-5 px-10 text-center">
                  <h1 className="text-2xl font-bold text-white uppercase py-2">
                    {item.title}
                  </h1>
                  <p className="text-base text-white">
                    {item.description}
                  </p>

                  <div className="h-20 mt-6">
                    <Button
                      className="hidden bg-white text-sky-400 rounded-full group-hover:inline-flex hover:bg-white"
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
