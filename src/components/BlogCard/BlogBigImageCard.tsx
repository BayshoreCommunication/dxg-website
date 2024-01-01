import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { formatTimestamp } from '@/lib/utils';
import LazyDescription from './LazyDescription.client'; // Ensure the path is correct

interface BlogBigImageCardProps {
  id: number;
  date: number;
  title: string;
  image: string;
  description: string;
  tag: string[];
}

export const BlogBigImageCard: React.FC<BlogBigImageCardProps> = ({
  id,
  date,
  title,
  image,
  description,
  tag,
}) => {
  const time = formatTimestamp(date);

  return (
    <div className='w-full text-white'>
      <div className='relative h-[445px] w-full bg-red-200 imageEntryAnimation'> {/* Added animation class here */}
        <Image
          src={image}
          alt={title}
          fill
          style={{
            objectFit: 'fill',
            width: '100%',
          }}
        />
      </div>
      <p className='text-light mt-3'>{time}</p>
      <h4 className='text mb-3 text-xl font-bold text-brand'>{title}</h4>
      <LazyDescription description={description} />
    </div>
  );
};
