import Link from 'next/link';
import { useState } from 'react';
import { Icons } from '../Icons';
import { Button } from '../ui/button';
import { P } from '../Typography';

interface SupportCardProps {
  data: {
    id: number;
    title: string;
    imagePath: string;
    description: string;
  };
  number?: string;
}

export default function SupportCardTwo({ data, number }: SupportCardProps) {
  const [activeCard, setActiveCard] = useState(0);

  const handleCardHover = (cardNo: number) => {
    setActiveCard(cardNo);
  };

  return (
    <div
      className={`option relative min-w-[60px] max-w-[800px] cursor-pointer overflow-hidden ${
        activeCard === data.id ? 'card-active' : ''
      }`}
      style={{
        backgroundImage: `linear-gradient(rgba(45, 198, 245, 0.6), rgba(45, 198, 245, 0)), url('/im$/${data.imagePath}')`,
        transition: '0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95)',
        backgroundSize: 'auto 100%',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
      onMouseEnter={() => handleCardHover(data.id)}
      onMouseLeave={() => handleCardHover(0)}
    >
      <div className='label'>
        <div className='title'>
          {' '}
          <h1 className='text-3xl font-extrabold uppercase text-white'>
            {data.title}
          </h1>
        </div>
        <div className='content flex flex-col items-center justify-center'>
          <div className='card-icon'>
            <Icons.monitor className='h-12 w-12 text-white' />
          </div>
          <h1 className=' py-4 text-3xl font-bold uppercase text-white'>
            {data.title}
          </h1>
          <P className=' desc px-20 text-center' text={data.description} />

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
