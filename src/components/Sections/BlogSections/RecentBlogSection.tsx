"use client";
import React, { useState } from 'react';
import { BlogWideCard } from '@/components/BlogCard';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { MotionDiv } from '@/components/Motion';
import { RECENT_BLOG_POST } from '@/config/data';
import { fadeIn, staggerContainer } from '@/lib/motion';
import Link from 'next/link';

export const RecentBlogSection = () => {
  const [selectedPost, setSelectedPost] = useState(RECENT_BLOG_POST[0]);

  return (
    <div className='mb-4' style={{ height: '36vw' }}>
      <MaxWidthWrapper>
        <h1 className='pt-4 text-white' style={{ fontSize: '2em', fontWeight: 'bold' }}>Recent Blog Posts</h1>
        <hr className='mb-4 h-2 border-gray-500' />
        <div className='flex flex-wrap justify-between gap-5' style={{ overflowY: 'auto', maxHeight: '75vh' }}>
          {RECENT_BLOG_POST.map((item, index) => (
            <Link 
              href={`posts/${item.id}`} 
              key={item.id} 
              style={{ maxWidth: '45%' }} 
              className='w-full'
            >
              <MotionDiv
                variants={fadeIn('up', 'tween', index * 0.2, 1)}
                onClick={() => setSelectedPost(item)}
                className='w-full cursor-pointer' // Ensure this div is clickable
              >
                <BlogWideCard {...item} />
              </MotionDiv>
            </Link>
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
