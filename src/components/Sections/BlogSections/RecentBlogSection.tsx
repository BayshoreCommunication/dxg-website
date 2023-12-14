"use client";
import React, { useState, Suspense } from 'react';
import { BlogBigImageCard, BlogWideCard } from '@/components/BlogCard';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { MotionDiv } from '@/components/Motion';
import { RECENT_BLOG_POST } from '@/config/data';
import { fadeIn, slideIn, staggerContainer } from '@/lib/motion';
import Link from 'next/link';

export const RecentBlogSection = () => {
  const [selectedPost, setSelectedPost] = useState(RECENT_BLOG_POST[0]);

  return (
    <div className='mb-4' style={{height: '36vw'}}>
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
          style={{display:'none'}}>
            <Suspense fallback={<div>Loading...</div>}>
              {/* <BlogBigImageCard {...selectedPost} /> */}
            </Suspense>
          </MotionDiv>
          <div className='w-full' style={{ overflowY: 'auto', maxHeight: '75vh', position: 'sticky', top: '0' }}>
            <div className='flex flex-wrap justify-between gap-5'>
            {RECENT_BLOG_POST.map((item, index) => {
              return (
                <Link href={`/post/`} key={item.id} style={{maxWidth: '45%'}}>
                {/* <Link href='#' key={item.id} style={{maxWidth: '45%'}}> */}
                  <MotionDiv
                    variants={fadeIn('up', 'tween', index * 0.2, 1)}
                    onClick={() => {
                      setSelectedPost(item);
                      if (typeof window !== 'undefined') {
                        localStorage.setItem('selectedPost', JSON.stringify(item));
                      }
                    }}
                    className='w-full'
                  >
                    <BlogWideCard {...item} />
                  </MotionDiv>
                </Link>
              );
            })}
            </div>
          </div>
        </MotionDiv>
      </MaxWidthWrapper>
    </div>
  );
};
