import Image from 'next/image';

import NewsLetter from '@/components/NewsLetter';
import Overview from '@/components/home/Overview';
import Testimonial from '@/components/Testimonial';
import WhyDxg from '@/components/home/WhyDxg';
export default function Home() {
  return (
    <div>
      <Overview />
      <WhyDxg />
      <Testimonial />
      <div className='bg-black'>
        <NewsLetter />
      </div>
    </div>
  );
}
