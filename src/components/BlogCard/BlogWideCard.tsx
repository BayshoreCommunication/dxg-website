import { formatTimestamp } from '@/lib/utils';
import Image from 'next/image';
import { Button } from '../ui/button';
import parse from 'html-react-parser';

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
    <div className='flex w-full gap-4 items-start text-white'>
      <div className='flex-shrink-0 w-24 h-24 relative'> {/* Adjusted for square image */}
        <Image
          src={image}
          alt={title}
          layout='fill' // Filling the square container
          objectFit='cover' // Maintain aspect ratio
        />
      </div>
      <div className='flex-grow'>
        <p className='text-xs md:text-base'>{time}</p>
        <h4 className='text-base font-bold text-brand md:text-xl'>
          {title}
        </h4>
        <p className='text-sm md:line-clamp-3'>
          {parse(description)}
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
