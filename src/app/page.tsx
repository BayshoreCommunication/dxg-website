import Image from 'next/image';

import NewsLetter from '@/components/NewsLetter';
import Overview from '@/components/home/Overview';
export default function Home() {
  return (
    <div>
      <Overview />
      <div className="bg-black">
        <NewsLetter />
      </div>
    </div>
  );
}
