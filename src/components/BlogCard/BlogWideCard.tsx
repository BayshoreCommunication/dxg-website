import { formatTimestamp } from '@/lib/utils';
import Image from 'next/image';
import { Button } from '../ui/button';
import parse from 'html-react-parser';

interface BlogBigImageCardProps {
  _id: number;
  createdAt: number;
  title: string;
  featuredImage: string;
  body: string;
}

export const BlogWideCard: React.FC<any> = ({
  _id,
  createdAt,
  title,
  body,
  featuredImage,
}) => {
  // const time = formatTimestamp(createdAt);

  const postDate = (date: any) => {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    return formattedDate;
  };

  return (
    <div className='flex w-full items-stretch gap-4 text-white'>
      {/* Adjusted for equal height */}
      <div
        className='relative flex-shrink-0'
        style={{ flexBasis: 'calc(38% - 1rem)' }}
      >
        <div style={{ paddingTop: '100%' }}></div>
        <Image
          src={`https://res.cloudinary.com/djrkvmpxe/image/upload/${featuredImage?.image?.public_id}`}
          alt={'featuredImage.altText'}
          layout='fill'
          objectFit='cover'
          className='absolute left-0 top-0'
        />
      </div>
      <div className='flex flex-grow flex-col justify-center'>
        {/* Adjusted for vertical center alignment */}
        <p className='text-xs'>{postDate(createdAt)}</p>
        <h4 className='line-clamp-1 text-lg font-bold text-brand'>{title}</h4>
        <div className='line-clamp-2 text-sm'>{parse(body)}</div>
        <div className='mt-2 flex flex-wrap gap-2'>
          {/* {tag.map((item, index) => {
            return (
              <Button
                key={index}
                variant={item === 'Read More' ? 'destructive' : 'outline'}
                className={`m-0 rounded-full bg-transparent ${
                  item === 'Read More'
                    ? 'box-border rounded-l-full rounded-r-full border-2 border-white'
                    : ''
                } blogButton`}
              >
                {item}
              </Button>
            );
          })} */}
          <Button
            variant={'outline'}
            className={`blogButton m-0 box-border rounded-full rounded-l-full rounded-r-full border-2 border-white bg-transparent`}
          >
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};
