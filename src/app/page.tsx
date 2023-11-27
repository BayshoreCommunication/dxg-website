import NewsLetter from '@/components/NewsLetter';
import { OurBlogSection } from '@/components/Sections';
import Testimonial from '@/components/Testimonial';
import Overview from '@/components/home/Overview';
import WhyDxg from '@/components/home/WhyDxg';
import Services from '@/components/home/Services';
import WeSupport from '@/components/home/WeSupport';

export default function Home() {
  return (
    <div className='bg-black'>
      <Overview />
      <WeSupport />
      <Services />
      <WhyDxg />
      <OurBlogSection />
      <Testimonial />
      <div className='bg-black'>
        <NewsLetter />
      </div>
    </div>
  );
}
