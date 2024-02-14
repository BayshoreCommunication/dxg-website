import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { formatTimestamp } from '@/lib/utils';
import LazyDescription from './LazyDescription.client';

interface BlogBigImageCardProps {
  _id: number;
  createdAt: number;
  title: string;
  featuredImage: string;
  body: string;
}

export const BlogBigImageCard: React.FC<any> = ({
  _id,
  createdAt,
  title,
  body,
  featuredImage,
}) => {
  const postDate = (date: any) => {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    return formattedDate;
  };

  return (
    <div className='w-full text-white'>
      <div className='imageEntryAnimation relative h-[445px] w-full bg-red-200'>
        {' '}
        {/* Added animation class here */}
        <Image
          src={`${featuredImage?.image?.url}`}
          alt={title}
          fill
          style={{
            objectFit: 'fill',
            width: '100%',
          }}
        />
      </div>
      <p className='mt-3 text-light'>{postDate(createdAt)}</p>
      <h4 className='mb-3 text-xl font-bold text text-brand'>{title}</h4>
      <LazyDescription description={body} />
    </div>
  );
};
