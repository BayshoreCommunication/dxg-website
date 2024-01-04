// pages/post/[id].tsx
import { useRouter } from 'next/router';
import { useEffect, useState, Suspense } from 'react';
import Header from '@/components/Navbar'; 
import Footer from '@/components/Footer'; 
import { BlogBigImageCard, BlogWideCard } from '@/components/BlogCard';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { MotionDiv } from '@/components/Motion';
import { RECENT_BLOG_POST } from '@/config/data';
import { fadeIn, slideIn, staggerContainer } from '@/lib/motion';

async function getPostById(id:string) {
  const post = RECENT_BLOG_POST.find((post) => post.id === Number(id));
  return post;
}

type Post = {
  id: number;
  date: number;
  title: string;
  image: string;
  description: string;
  tag: string[];
} | null;

export default function Post() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<Post>(null);

  useEffect(() => {
    if (typeof id === 'string') {
      getPostById(id).then((post) => {
        if (post) {
          setPost(post);
        }
      });
    }
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header /> {/* Include the Header at the top */}
      <div className="bg-black">
        <MaxWidthWrapper>
          <h1 className="pt-4 text-white text-2xl font-bold">{post.title}</h1> {/* Tailwind classes */}
          <hr className="mb-4 h-2 border-gray-500" />
          <MotionDiv
            variants={staggerContainer(0.2, 0.1)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0 }}
            className="flex flex-col gap-4 lg:flex-row"
          >
            <MotionDiv
              variants={slideIn('up', 'tween', 0.2, 1)}
              className="w-full py-2 lg:w-9/12"
            >
              <Suspense fallback={<div>Loading...</div>}>
                <BlogBigImageCard {...post} />
              </Suspense>
            </MotionDiv>
            <div className="w-full p-2 lg:w-3/12" style={{ overflowY: 'auto', maxHeight: '75vh', position: 'sticky', top: '0' }}>
              <div className="flex flex-col gap-5">
                <h2 className="text mb-3 text-xl font-bold text-brand">Recent Posts</h2>
                {RECENT_BLOG_POST.map((item, index) => {
                  return (
                    <MotionDiv
                      variants={fadeIn('up', 'tween', index * 0.2, 1)}
                      key={item.id}
                      onClick={() => {
                        localStorage.setItem('selectedPost', JSON.stringify(item));
                        window.location.reload();
                      }}
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
      <Footer /> {/* Include the Footer at the bottom */}
    </>
  );
};
