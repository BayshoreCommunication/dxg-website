import { BlogBigImageCard, BlogWideCard } from '@/components/BlogCard';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { MotionDiv } from '@/components/Motion';
import { RECENT_BLOG_POST } from '@/config/data';
import { fadeIn, slideIn, staggerContainer } from '@/lib/motion';
export const RecentBlogSection = () => {
  return (
    <div className='mb-4'>
      <MaxWidthWrapper>
        <p className='mb-4 mt-10 text-white'>Recent Blog Post</p>
        <hr className='mb-4 h-2 border-gray-500' />
        <MotionDiv
          variants={staggerContainer(0.2, 0.1)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.25 }}
          className='flex flex-col gap-4 lg:flex-row'
        >
          <MotionDiv
            variants={slideIn('left', 'tween', 0.2, 1)}
            className='w-full py-2 lg:w-5/12'
          >
            <BlogBigImageCard {...RECENT_BLOG_POST[0]} />
          </MotionDiv>
          <div className='w-full p-2 lg:w-7/12'>
            <div className='flex flex-col gap-5'>
              {RECENT_BLOG_POST.map((item, index) => {
                if (index > 0 && index < 5)
                  return (
                    <MotionDiv
                      variants={fadeIn('up', 'tween', index * 0.2, 1)}
                      key={item.id}
                    >
                      <BlogWideCard key={item.id} {...item} />
                    </MotionDiv>
                  );
              })}
            </div>
          </div>
        </MotionDiv>
      </MaxWidthWrapper>
    </div>
  );
};
