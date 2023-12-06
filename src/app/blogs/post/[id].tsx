import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { RECENT_BLOG_POST } from '@/config/data';

// Define a type for your blog post data
type BlogPost = {
  id: number;
  date: number;
  title: string;
  image: string;
  description: string;
  tag: string[];
};

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  // Initialize your state with an empty object of type BlogPost
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (id !== undefined) {
      const postData = RECENT_BLOG_POST.find((post) => post.id === Number(id));
      setPost(postData || null);  // Use null as a fallback
    }
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      {/* Display the rest of your post data here */}
    </div>
  );
}
