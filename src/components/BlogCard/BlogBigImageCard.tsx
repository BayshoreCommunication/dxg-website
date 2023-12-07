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
      <div className='relative h-[445px] w-full bg-red-200'>
        {/* <Image src={image} alt='Meeting Blog' width={523} height={430} /> */}
        <Image
          src={image}
          alt='Meeting Blog'
          //   width={200}
          //   height={200}
          fill
          style={{
            objectFit: 'fill',
            width: '100%',
          }}
        />
      </div>
      <p className='text-light mt-3'>{time}</p>
      <h4 className='text mb-3 text-xl font-bold text-brand'>{title}</h4>
      <p className='text-justify text-sm'>{parse(description)}</p>
      <div className='mt-3 flex gap-3'>
        {tag.map((item, index) => {
          return (
            <Button
              key={index}
              className='rounded-full bg-transparent leading-none'
              variant={'outline'}
            >
              {item}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
