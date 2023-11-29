import { BlogCard } from '@/components/BlogCard';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { HeaderTextStyle } from '@/components/TextStyle';
import { BlogData } from '@/config/data';
import OurBlogSlider from '@/components/home/OurBlogSlider';
import { P } from '@/components/Typography';
export const OurBlogSection = () => {
  return (
    <div className='bg-black py-10'>
      <div className='flex items-center justify-center'>
        <div className='max-w-3xl'>
          <HeaderTextStyle
            coloredText='Our'
            postText='Blog'
            variant='section'
          />
          <P
            text='With the average experience of our team members being ten-plus years
            in the event space, DXG is a sought-after resource by event
            planners, event production companies, and event platforms.'
            className='py-6 text-center'
          />
        </div>
      </div>
      <div className='md:hidden'>
        <OurBlogSlider />
      </div>
      <div className='hidden md:flex'>
        <div className='container'>
          <div className='flex flex-col items-center justify-center'>
            <div className='my-4'>
              <div className=' grid grid-cols-1 gap-4 md:grid-cols-3'>
                {BlogData.map((item, index) => {
                  return <BlogCard key={index} data={item} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
