"use client";
import React, { useEffect, useState } from 'react';
import { RECENT_BLOG_POST } from '@/config/data';

type Post = {
  title: string;
  description: string;
  image: string;
  // Add other properties of the post object here
};

export default function Post() {
  const [post, setPost] = useState<Post | null>(null);

  const handleStorageChange = () => {
    const storedPost = localStorage.getItem('selectedPost');
    setPost(storedPost ? JSON.parse(storedPost) : null);
  };

  useEffect(() => {
    handleStorageChange();
  }, []);

  useEffect(() => {
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className='bg-black text-white' style={{ height: '100vh' }}>
      <div className='w-full bg-gray-900' style={{ height: '30vh', backgroundImage: `url(${post.image})`, backgroundSize: 'cover' }}>
        {/* Banner goes here */}
      </div>
      <div className='flex'>
        <div className='w-3/4 p-4'>
          <h1 className='text-4xl font-bold'>{post.title}</h1>
          <p className='mt-2'>{post.description}</p>
          {/* Displaying the rest of post data here */}
        </div>
        <div className='w-1/4 bg-gray-800' style={{ height: '70vh' }}>
          {/* Right column content goes here */}
          <div className='overflow-y-auto h-full p-4'>
            {RECENT_BLOG_POST.map((item, index) => {
              return (
                <div
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      localStorage.setItem('selectedPost', JSON.stringify(item));
                      handleStorageChange();
                    }
                  }}
                  className='cursor-pointer flex items-center gap-4 p-2 rounded shadow-lg mb-4'
                  key={item.id}
                >
                  <img src={item.image} alt={item.title} className='w-1/4 rounded' />
                  <h2 className='text-xl font-bold'>{item.title}</h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
