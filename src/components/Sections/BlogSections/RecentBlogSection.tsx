import { BlogBigImageCard, BlogWideCard } from '@/components/BlogCard';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { RECENT_BLOG_POST } from '@/config/data';
export const RecentBlogSection = () => {
  return (
    <div className='mb-4'>
      <MaxWidthWrapper>
        <p className='mb-4 mt-10 text-white'>Recent Blog Post</p>
        <hr className='mb-4 h-2 border-gray-500' />
        <div className='flex flex-col gap-4 md:flex-row'>
          <div className='w-full py-2 md:w-2/5'>
            <BlogBigImageCard {...RECENT_BLOG_POST[0]} />
          </div>
          <div className='w-full p-2 md:w-3/5'>
            <div className='flex flex-col gap-5'>
              {RECENT_BLOG_POST.map((item, index) => {
                if (index > 0 && index < 4)
                  return <BlogWideCard key={item.id} {...item} />;
              })}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
