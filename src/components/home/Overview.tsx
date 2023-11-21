import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icons } from '../Icons';
const data = [
  {
    title: 'Engage',
    description:
      'With the average experience of our team members being ten-plus years in the event space, DXG is a sought-after resource by event planners, event production companies, and event platforms.',
    icon: 'man',
    href: '/',
    bg: 'bg-slate-500',
  },
  {
    title: 'Exchange',
    description:
      'With the average experience of our team members being ten-plus years in the event space, DXG is a sought-after resource by event planners, event production companies, and event platforms.',
    image: '/images/management.jpg',
    href: '/',
    bg: 'bg-slate-700',
  },
  {
    title: 'Enlight',
    description:
      'With the average experience of our team members being ten-plus years in the event space, DXG is a sought-after resource by event planners, event production companies, and event platforms.',
    image: '/images/technology.jpg',
    href: '/',
    bg: 'bg-slate-900',
  },
];

export default function Overview() {
  return (
    <div>
      <div className="flex justify-center items-center">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className={`flex-1 ${item.bg} hover:bg-sky-500 text-center group `}
            >
              <div className="relative text-sky-500 group-hover:text-white">
                <Icons.man />
              </div>
              <div className="p-5">
                <h1 className="text-2xl font-bold text-white uppercase py-2">
                  {item.title}
                </h1>
                <p className="text-base text-white">
                  {item.description}
                </p>

                <div className="hidden my-5 group-hover:block">
                  <Link
                    href={item.href}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium bg-white px-6 py-2 text-sky-400"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
