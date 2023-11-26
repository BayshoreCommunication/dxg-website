import { BlogCard } from '@/components/BlogCard';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { HeaderTextStyle } from '@/components/TextStyle';
import { BlogData } from '@/config/data';

export const OurBlogSection = () => {
  return (
    <div className='bg-black'>
      <MaxWidthWrapper>
        <div className='flex flex-col items-center justify-center'>
          <div className='my-10'>
            <HeaderTextStyle
              coloredText='Our'
              postText='Blog'
              variant='section'
            />
            <p className='mb-4 mt-4 px-6 text-center text-base text-white md:mt-6 md:px-12'>
              With the average experience of our team members being ten-plus
              years in the event space, DXG is a sought-after resource by event
              planners, event production companies, and event platforms.
            </p>
            <div className=' grid grid-cols-1 gap-4 md:grid-cols-3'>
              {BlogData.map((item, index) => {
                return <BlogCard key={index} data={item} />;
              })}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
