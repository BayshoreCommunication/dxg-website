import NewsLetter from '@/components/NewsLetter';
import { BannerSection, OurBlogSection } from '@/components/Sections';
import Testimonial from '@/components/Testimonial';
import Overview from '@/components/home/Overview';
import Services from '@/components/home/Services';
import WeAre from '@/components/home/WeAre';
import WeSupport from '@/components/home/WeSupport';
import WhyDxg from '@/components/home/WhyDxg';

export const metadata: Metadata = {
  title: ' Exceptional Event Production, AV, Graphics, Animation & More | DXG Agency',
  description:
    'Transform your events into truly unforgettable experiences with DXG Agency. We offer exceptional event production management, cutting-edge AV technology, stunning graphics, dynamic animation, and innovative solutions for virtual and hybrid events. Elevate your event’s impact with our expertise.',
};

export default function Home() {
  return (
    <div className='overflow-x-hidden bg-black'>
      <BannerSection />
      {/* <Overview /> */}
      <WeAre />
      <Services />
      <WeSupport />
      <WhyDxg />
      {/* <OurBlogSection /> */}
      <Testimonial />
      <div className='bg-black'>
        <NewsLetter />
      </div>
    </div>
  );
}
