import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { formatTimestamp } from '@/lib/utils';
import LazyDescription from './LazyDescription.client';
import GetAllBlogPost from '@/lib/GetAllBlogPost';
import parse from 'html-react-parser';

interface BlogBigImageCardProps {
  _id: number;
  createdAt: number;
  title: string;
  featuredImage: string;
  body: string;
}

interface BlogPost {
  slug: string;
  title: string;
  body: string;
  excerpt: string;
  featuredImage: {
    image: {
      url: string;
    };
  };
}

interface Metadata {
  title: string;
  description: string;
  openGraph: {
    title: string;
    description: string;
    images: string[];
    url: string;
    type: string;
    site_name: string;
  };
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blogPostData = await GetAllBlogPost();

  // Find blog post details by slug
  const blogDetails: BlogPost | undefined = blogPostData?.data?.find(
    (blogs: BlogPost) => blogs.slug === params.slug
  );

  // If no blog is found, return default metadata
  if (!blogDetails) {
    return {
      title: 'Blog not found',
      description: 'No blog post available.',
      openGraph: {
        title: 'Blog not found',
        description: 'No blog post available.',
        images: [],
        url: 'https://www.dxg.agency/post/not-found',
        type: 'article',
        site_name: 'Digital Xperience Group',
      },
    };
  }

  // Parse the blog body and extract description
  let description: any[] = parse(blogDetails.body) as any[];

  // Fallback to blogDetails.excerpt if description parsing fails
  const parsedDescription =
    description?.[0]?.props?.children?.toString() || blogDetails.excerpt;

  return {
    title: blogDetails.title,
    description: parsedDescription,
    openGraph: {
      title: blogDetails.title,
      description: parsedDescription,
      images: [blogDetails.featuredImage?.image?.url || ''],
      url: `https://www.dxg.agency/post/${blogDetails.slug}`,
      type: 'article',
      site_name: 'Digital Xperience Group',
    },
  };
}

export const BlogBigImageCard: React.FC<any> = ({
  _id,
  createdAt,
  title,
  body,
  featuredImage,
}) => {
  const postDate = (date: any) => {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    return formattedDate;
  };

  return (
    <div className='w-full text-white'>
      <div className='imageEntryAnimation relative h-[220px] w-full bg-red-200 md:h-[445px]'>
        {' '}
        {/* Added animation class here */}
        <Image
          src={`${featuredImage?.image?.url}`}
          alt={title}
          fill
          style={{
            objectFit: 'fill',
            width: '100%',
          }}
        />
      </div>
      <p className='text-light mt-3'>{postDate(createdAt)}</p>
      <h4 className='text mb-3 text-xl font-bold text-brand'>{title}</h4>
      <LazyDescription description={body} />
    </div>
  );
};
