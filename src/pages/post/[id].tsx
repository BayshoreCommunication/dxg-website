import { useRouter } from 'next/router';
import { useEffect, useState, Suspense } from 'react';
import { BlogBigImageCard, BlogWideCard } from '@/components/BlogCard';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { MotionDiv } from '@/components/Motion';
import { RECENT_BLOG_POST } from '@/config/data';
import { fadeIn, slideIn, staggerContainer } from '@/lib/motion';

// Replace this with your actual data fetching logic
async function getPostById(id:string) {
  // This is just a placeholder. In your app, you'd fetch the post from your API or database.
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
    <div className={styles.mb4} style={{backgroundColor:"black"}}>
      <MaxWidthWrapper>
        <h1 className={styles.pt4} style={{ fontSize: '2em', fontWeight: 'bold' }}>{post.title}</h1>
        <hr className={styles.mb4} style={{ height: '2px', borderColor: 'gray' }} />
        <MotionDiv
          variants={staggerContainer(0.2, 0.1)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0 }}
          className={styles.flexColGap4LgFlexRow}
        >
          <MotionDiv
            variants={slideIn('up', 'tween', 0.2, 1)}
            className={styles.wFullPy2LgW9_12}
          >
            <Suspense fallback={<div>Loading...</div>}>
              <BlogBigImageCard {...post} />
            </Suspense>
          </MotionDiv>
          <div className={styles.wFullP2LgW3_12} style={{ overflowY: 'auto', maxHeight: '75vh', position: 'sticky', top: '0' }}>
            <div className={styles.flexColGap5}>
              <h2 className={styles.textMb3TextXlFontBoldTextBrand}>Recent Posts</h2>
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
  );
};
