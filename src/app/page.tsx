import NewsLetter from '@/components/NewsLetter';
import { BannerSection, OurBlogSection } from '@/components/Sections';
import Testimonial from '@/components/Testimonial';
import Overview from '@/components/home/Overview';
import Services from '@/components/home/Services';
import WhyDxg from '@/components/home/WhyDxg';
export default function Home() {
  return (
    <div>
      <BannerSection />
      <Overview />
      <OurBlogSection />
      <Services />
      <WhyDxg />
      <Testimonial />
      <div className='bg-black'>
        <NewsLetter />
      </div>
    </div>
  );
}
