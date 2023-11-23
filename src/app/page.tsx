import Image from 'next/image';

import NewsLetter from '@/components/NewsLetter';
import Overview from '@/components/home/Overview';
import Testimonial from '@/components/Testimonial';
export default function Home() {
  return (
    <div>
      <Overview />
      <Testimonial />
      <div className='bg-black'>
        <NewsLetter />
      </div>
    </div>
  );
}
