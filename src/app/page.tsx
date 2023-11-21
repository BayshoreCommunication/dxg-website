import Image from 'next/image';

import NewsLetter from '@/components/NewsLetter';
export default function Home() {
  return (
    <div>
      <div className="bg-black">
        <NewsLetter />
      </div>
    </div>
  );
}
