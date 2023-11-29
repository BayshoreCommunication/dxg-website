'use client';

import SupportCard from '../Cards/SupportCard';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { H1, P } from '../Typography';
import { Button } from '../ui/button';
import Link from 'next/link';

const infos = {
  title: 'Who We Support',
  description:
    'With the average experience of our team members being ten-plus years in the event space, DXG is a sought-after resource by event planners, event production companies, and event platforms.',
};

export default function WeSupport() {
  return (
    <div className='bg-black'>
      <div className='container'>
        <div className='flex flex-col  items-end py-10'>
          <H1 text={infos.title} />
          <P className='md:max-w-lg' text={infos.description} />

          <Button
            asChild
            variant={'outline'}
            className='rounded-full border-brand bg-transparent px-7 text-brand hover:bg-brand hover:text-white'
          >
            <Link href='/'>Read More</Link>
          </Button>
        </div>
        <div className='options flex min-h-[500px] skew-y-6 transform flex-col items-stretch overflow-hidden md:flex-row'>
          <SupportCard cardIndex={1} />
          <SupportCard cardIndex={2} />
          <SupportCard cardIndex={3} />
          <SupportCard cardIndex={4} />
        </div>
      </div>
    </div>
  );
}
