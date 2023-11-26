'use client';
import { useState } from 'react';
import SupportCard from '../Cards/SupportCard';
import MaxWidthWrapper from '../MaxWidthWrapper';
export default function WeSupport() {
  const [activeCard, setActiveCard] = useState('');

  const handleCardHover = (className: string) => {
    setActiveCard(className);
  };
  return (
    <div className='bg-black'>
      <MaxWidthWrapper>
        {/* <div className='flex flex-col'>
          <div className='flex flex-col  items-end py-10'>
            <h1 className=' text-2xl font-bold text-white md:text-4xl'>
              <span className='border-b border-b-brand text-brand'>Who</span> We
              Support
            </h1>
            <p className='my-4 text-right text-base text-white md:mt-6 md:max-w-lg'>
              With the average experience of our team members being ten-plus
              years in the event space, DXG is a sought-after resource by event
              planners, event production companies, and event platforms.
            </p>
            <Button
              asChild
              variant={'outline'}
              className='rounded-full border-brand bg-transparent px-7 text-brand hover:bg-brand hover:text-white'
            >
              <Link href='/'>Read More</Link>
            </Button>
          </div>
          <div className='flex rotate-6 justify-center gap-10'>
            <div className='group '>
              <SupportCard />
            </div>
            <div className='group mt-8'>
              <SupportCard />
            </div>
            <div className='group mt-16'>
              <SupportCard />
            </div>
            <div className='group mt-24'>
              <SupportCard />
            </div>
          </div>
        </div> */}
        <div className='options'>
          <SupportCard cardIndex={1} />
          <SupportCard cardIndex={2} />
          <SupportCard cardIndex={3} />
          <SupportCard cardIndex={4} />
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
