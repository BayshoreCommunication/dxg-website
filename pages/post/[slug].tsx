// pages/post/[slug].tsx
import { useRouter } from 'next/router';
import { useEffect, useState, Suspense } from 'react';
import Header from '@/components/Navbar'; // Adjust the import path as necessary
import Footer from '@/components/Footer'; // Adjust the import path as necessary
import { BlogBigImageCard, BlogWideCard } from '@/components/BlogCard';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { MotionDiv } from '@/components/Motion';
import { RECENT_BLOG_POST } from '@/config/data';
import { fadeIn, slideIn, staggerContainer } from '@/lib/motion';
import Link from 'next/link';
import '@/app/globals.css';
import './myStyle.css';
import GetAllBlogPost from '@/lib/GetAllBlogPost';

// Slugify function to convert title to URL-friendly slug
function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}

// Replace this with your actual data fetching logic
async function getPostBySlug(slug: string): Promise<Post> {
  const blogsData = await GetAllBlogPost();
  const post = blogsData?.data?.find(
    (post: any) => slugify(post.slug) === slug
  );
  return post || null;
}

// Define the type for your post
type Post = {
  id: number;
  date: number;
  title: string;
  image: string;
  description: string;
  tag: string[];
} | null;

// Define your CSS here
const css = `
  html {
    background-color: black;
  }
`;

export default function PostPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState<Post | null>(null);

  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetAllBlogPost();
      setBlogData(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (typeof slug === 'string') {
      getPostBySlug(slug).then((post) => {
        setPost(post); // post is either a Post object or null
      });
    } else {
      setPost(null); // Reset or handle the state appropriately when slug is not available
    }
  }, [slug]);

  if (!post) {
    return (
      <div className='bg-black' style={{ height: '100vh', width: '100vw' }}>
        <div className='loading-gif'>
          <img src='/loader.gif' />
        </div>
      </div>
    );
  }

  return (
    <>
      <Header /> {/* Include the Header at the top */}
      <style>{css}</style>
      <div className='bg-black'>
        <MaxWidthWrapper>
          <h1 className='pt-4 text-2xl font-bold text-white'>{post.title}</h1>
          <hr className='h-2 mb-4 border-gray-500' />
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
            <div
              className='w-full p-2 lg:w-3/12'
              style={{
                overflowY: 'auto',
                maxHeight: '84vh',
                position: 'sticky',
                top: '0',
                overflowX: 'hidden',
              }}
            >
              <div className='flex flex-col gap-5'>
                <h2 className='mb-3 text-xl font-bold text text-brand'>
                  Recent Posts
                </h2>
                {(blogData as any)?.data
                  ?.filter((blog: any) => blog.published === true)
                  ?.map((item: any, index: number) => {
                    return (
                      <Link href={`/post/${item.slug}`} key={item._id}>
                        <MotionDiv
                          variants={fadeIn('up', 'tween', index * 0.2, 1)}
                          className='w-full cursor-pointer'
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
      <Footer /> {/* Include the Footer at the bottom */}
    </>
  );
}
