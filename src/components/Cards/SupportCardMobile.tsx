import Link from 'next/link';
import { useState } from 'react';
import { Icons } from '../Icons';
import { Button } from '../ui/button';

interface SupportCardProps {
  cardIndex: number;
}

export default function SupportCard({ cardIndex }: SupportCardProps) {
  const [activeCard, setActiveCard] = useState(0);

  const handleCardHover = (cardNo: number) => {
    setActiveCard(cardNo);
  };

  return (
    <div
      className={`option relative min-w-[60px] max-w-[800px] cursor-pointer overflow-hidden ${
        activeCard === cardIndex ? 'card-active' : ''
      }`}
      style={{
        backgroundImage: `linear-gradient(rgba(45, 198, 245, 0.6), rgba(45, 198, 245, 0)), url('/support/production2.png')`,
        transition: '0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95)',
        backgroundSize: 'auto 100%',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
      onMouseEnter={() => handleCardHover(cardIndex)}
      onMouseLeave={() => handleCardHover(0)}
    >
      <div className='label'>
        <div className='title'>
          {' '}
          <h1 className='text-3xl font-extrabold uppercase text-white'>
            Production
          </h1>
        </div>
        <div className='content flex flex-col items-center justify-center'>
          <div className='card-icon'>
            <Icons.monitor className='h-12 w-12 text-white' />
          </div>
          <h1 className=' py-4 text-3xl font-bold uppercase text-white'>
            Production
          </h1>
          <p className='desc card-text px-20 text-base text-white'>
            With the average experience of our team members being ten-plus years
            in the event space, DXG is a sought-after resource by event
            planners, event production companies, and event platforms.
          </p>
          <div className='mt-10'>
            <Button
              variant='outline'
              className='rounded-full border-brand bg-transparent text-brand'
            >
              <Link href='/'>Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
