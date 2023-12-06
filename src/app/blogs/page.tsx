import {
  // BlogHeaderSection,
  // CreateAService,
  // MultipleServiceSection,
  RecentBlogSection,
} from '@/components/Sections';

export default function page() {
  return (
    <div className='bg-black' style={{ height: '100vh' }}>
      {/* <BlogHeaderSection /> */}
      <RecentBlogSection />
      {/* <CreateAService />
      <MultipleServiceSection /> */}
    </div>
    
  );
}
