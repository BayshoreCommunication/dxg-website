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
    <div className='flex w-full gap-4 items-stretch text-white'> {/* Adjusted for equal height */}
      <div className='flex-shrink-0 relative' style={{ flexBasis: 'calc(38% - 1rem)' }}>
        <div style={{ paddingTop: '100%' }}></div>
        <Image
          src={image}
          alt={title}
          layout='fill'
          objectFit='cover'
          className='absolute top-0 left-0'
        />
      </div>
      <div className='flex-grow flex flex-col justify-center'> {/* Adjusted for vertical center alignment */}
        <p className='text-xs'>{time}</p>
        <h4 className='text-lg line-clamp-1 font-bold text-brand'>
          {title}
        </h4>
        <div className='text-sm line-clamp-2'>
          {parse(description)}
        </div>
        <div className='mt-2 flex gap-2 flex-wrap'>
          {tag.map((item, index) => {
            return (
              <Button
                key={index}
                variant={item === 'Read More' ? 'destructive' : 'outline'}
                className={`m-0 rounded-full bg-transparent ${item === 'Read More' ? 'border-white border-2 rounded-l-full rounded-r-full box-border' : ''}`}
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
