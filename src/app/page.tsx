import NewsLetter from '@/components/NewsLetter';
import { OurBlogSection } from '@/components/Sections';
import Testimonial from '@/components/Testimonial';
import Overview from '@/components/home/Overview';
export default function Home() {
  return (
    <div>
      <Overview />
      <OurBlogSection />
      <Testimonial />
      <div className='bg-black'>
        <NewsLetter />
      </div>
    </div>
  );
}
