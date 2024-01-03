"use client";
import React, { useEffect, useState, Suspense } from 'react';
import { BlogBigImageCard, BlogWideCard } from '@/components/BlogCard';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { MotionDiv } from '@/components/Motion';
import { RECENT_BLOG_POST } from '@/config/data';
import { fadeIn, slideIn, staggerContainer } from '@/lib/motion';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';

type Post = {
  id: number;
  date: number;
  title: string;
  image: string;
  description: string;
  tag: string[];
};

type Props = {
  post: Post;
};

interface IParams extends ParsedUrlQuery {
  id: string;
}

const PostPage = ({ post }: Props) => {
  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className='mb-4' style={{backgroundColor:"black"}}>
      <MaxWidthWrapper>
        <h1 className='pt-4 text-white' style={{ fontSize: '2em', fontWeight: 'bold' }}>{post.title}</h1>
        <hr className='mb-4 h-2 border-gray-500' />
        <MotionDiv
          variants={staggerContainer(0.2, 0.1)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0 }}
          className='flex flex-col gap-4 lg:flex-row'
        >
          <MotionDiv
            variants={slideIn('up', 'tween', 0.2, 1)}
            className='w-full py-2 lg:w-9/12'
          >
            <Suspense fallback={<div>Loading...</div>}>
              <BlogBigImageCard {...post} />
            </Suspense>
          </MotionDiv>
          <div className='w-full p-2 lg:w-3/12' style={{ overflowY: 'auto', maxHeight: '75vh', position: 'sticky', top: '0' }}>
            <div className='flex flex-col gap-5'>
              <h2 className='text mb-3 text-xl font-bold text-brand'>Recent Posts</h2>
              {RECENT_BLOG_POST.map((item, index) => (
                <MotionDiv
                  variants={fadeIn('up', 'tween', index * 0.2, 1)}
                  key={item.id} // Ensure unique key for each item
                >
                  {/* Wrap BlogWideCard with Link for navigation */}
                  <Link href={`/posts/${item.id}`} passHref>
                      <BlogWideCard {...item} />
                  </Link>
                </MotionDiv>
              ))}
            </div>
          </div>
        </MotionDiv>
      </MaxWidthWrapper>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Use RECENT_BLOG_POST to generate paths
  const paths = RECENT_BLOG_POST.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Ensure that params exist and has the 'id' field
  if (!params?.id) {
    return {
      notFound: true,
    };
  }

  // Find the post by id from RECENT_BLOG_POST
  const post = RECENT_BLOG_POST.find((p) => p.id.toString() === params.id);

  // Log the post data to the console for debugging
  console.log("Fetched post data:", post);

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
};

export default PostPage;
