import { formatTimestamp } from '@/lib/utils';
import Image from 'next/image';
import { Button } from '../ui/button';

interface BlogBigImageCardProps {
  id: number;
  date: number;
  title: string;
  image: string;
  description: string;
  tag: string[];
}

export const BlogWideCard: React.FC<BlogBigImageCardProps> = ({
  id,
  date,
  title,
  image,
  description,
  tag,
}) => {
  const time = formatTimestamp(date);
  return (
    <div className='flex w-full gap-4 text-white'>
      <div className='relative w-1/2 md:w-1/3'>
        <Image
          src={image}
          alt='Meeting Blog'
          //   width={200}
          //   height={200}
          fill
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
      <div className='w-1/2 md:w-2/3'>
        <p className='text-xs md:text-base'>{time}</p>
        <h4 className='line-clamp-1 text-base font-bold text-brand md:text-xl'>
          {title}
        </h4>
        <p className='line-clamp-2 text-justify text-sm md:line-clamp-3'>
          {description}
        </p>
        <div className='mt-2 flex gap-2'>
          {tag.map((item, index) => {
            return (
              <Button
                key={index}
                variant={'outline'}
                className='m-0 rounded-full bg-transparent'
              >
                {item}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
