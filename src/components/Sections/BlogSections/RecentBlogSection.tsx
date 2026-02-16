'use client';
import { BlogWideCard } from '@/components/BlogCard';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { MotionDiv } from '@/components/Motion';
import { Pagination } from '@/components/ui/Pagination';
import GetAllBlogPost from '@/lib/GetAllBlogPost';
import { staggerContainer } from '@/lib/motion';
import { useEffect, useState } from 'react';

interface BlogData {
  data: any[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalBlogs: number;
    limit: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
}

export const RecentBlogSection = () => {
  const [blogsData, setBlogsData] = useState<BlogData | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const data = await GetAllBlogPost({ page: currentPage, limit: 10 });
        setBlogsData(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setBlogsData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of blog section
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='h-full bg-black relative z-10'>
      <MaxWidthWrapper>
        <h1
          className='pt-4 text-white'
          style={{ fontSize: '2em', fontWeight: 'bold' }}
        >
          Recent Blog Post
        </h1>
        {/* <hr className='h-2 mb-4 border-gray-500' /> */}
        <div className=' mt-2 rounded-2xl border border-gray-500 p-2 md:mt-4 md:p-4'>
          <MotionDiv
            variants={staggerContainer(0.2, 0.1)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className='flex flex-col gap-4 lg:flex-row '
            style={{ overflow: 'hidden', paddingBottom: '2vw' }}
          >
            <div
              className='w-full relative z-20'
              style={{
                overflowY: 'auto',
                maxHeight: '75vh',
                position: 'sticky',
                top: '0',
              }}
            >
              {loading ? (
                <div className='flex items-center justify-center py-20'>
                  <div className='text-white text-lg'>Loading...</div>
                </div>
              ) : !blogsData || !blogsData.data || blogsData.data.length === 0 ? (
                <div className='flex items-center justify-center py-20'>
                  <div className='text-white text-lg'>No blog posts available.</div>
                </div>
              ) : (
                <>
                  <div className='flex flex-col flex-wrap justify-between gap-5 lg:flex-row relative z-50'>

                   
                    {blogsData.data
                      .filter((blog: any) => blog.published === true)
                      .map((item: any, index: number) => {
                        return (
                          <div
                            key={item._id || item.slug || `blog-${index}`}
                            className='w-full lg:w-[45%]'
                          >
                        
                              <BlogWideCard {...item} />
                      
                          </div>
                        );
                      })}
                  </div>

                  {/* Pagination */}
                  {blogsData?.pagination && (
                    <Pagination
                      currentPage={blogsData.pagination.currentPage}
                      totalPages={blogsData.pagination.totalPages}
                      hasNextPage={blogsData.pagination.hasNextPage}
                      hasPrevPage={blogsData.pagination.hasPrevPage}
                      onPageChange={handlePageChange}
                    />
                  )}
                </>
              )}
            </div>
          </MotionDiv>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
