import React from 'react';
import { Icons } from '../Icons';
import { Button } from '../ui/button';
import Link from 'next/link';
export default function SupportCard() {
  return (
    <div
      className={` my-10 flex h-[450px] w-[100px]  flex-col  items-center justify-around rounded-bl-full rounded-br-full rounded-tl-full rounded-tr-full bg-cover bg-center bg-no-repeat group-hover:w-[450px] group-hover:rounded-e-[80px]
      group-hover:rounded-r-[80px]
      group-hover:rounded-bl-[80px]
      group-hover:rounded-br-[80px] group-hover:rounded-tl-[80px] group-hover:rounded-tr-[80px]
`}
      style={{
        backgroundImage: `linear-gradient(rgba(45, 198, 245, 0.3), rgba(45, 198, 245, 0)), url('/support/production.png')`,
      }}
    >
      <div className='-rotate-90 group-hover:hidden'>
        <h1 className='py-4 text-3xl font-bold uppercase text-white'>
          Production
        </h1>
      </div>
      <div className='hidden transform flex-col items-center justify-center px-10 group-hover:flex'>
        <div>
          <Icons.monitor className='h-12 w-12 text-white' />
        </div>
        <h1 className='py-4 text-3xl font-bold uppercase text-white'>
          Production
        </h1>
        <p className='text-base text-white'>
          With the average experience of our team members being ten-plus years
          in the event space, DXG is a sought-after resource by event planners,
          event production companies, and event platforms.
        </p>
        <div className='mt-10'>
          <Button
            variant='outline'
            className='rounded-full border-brand bg-transparent text-brand '
          >
            <Link href='/'>Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
