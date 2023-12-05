"use client";
import React, { useState, Suspense } from 'react';
import { BlogBigImageCard, BlogWideCard } from '@/components/BlogCard';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { MotionDiv } from '@/components/Motion';
import { RECENT_BLOG_POST } from '@/config/data';
import { fadeIn, slideIn, staggerContainer } from '@/lib/motion';

export const RecentBlogSection = () => {
  const [selectedPost, setSelectedPost] = useState(RECENT_BLOG_POST[0]);

  return (
    <div className='mb-4'>
      <MaxWidthWrapper>
        <h1 className='pt-4 text-white' style={{ fontSize: '2em', fontWeight: 'bold' }}>Recent Blog Post</h1>
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
            className='w-full py-2 lg:w-9/12'
          >
            <Suspense fallback={<div>Loading...</div>}>
              <BlogBigImageCard {...selectedPost} />
            </Suspense>
          </MotionDiv>
          <div className='w-full p-2 lg:w-3/12' style={{ overflowY: 'auto', maxHeight: '100vh', position: 'sticky', top: '0' }}>
            <div className='flex flex-col gap-5'>
              {RECENT_BLOG_POST.map((item, index) => {
                if (index > 0 && index < 6)
                  return (
                    <MotionDiv
                      variants={fadeIn('up', 'tween', index * 0.2, 1)}
                      key={item.id}
                      onClick={() => setSelectedPost(item)}
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

