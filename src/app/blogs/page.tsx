import {
  BlogHeaderSection,
  CreateAService,
  MultipleServiceSection,
  RecentBlogSection,
} from '@/components/Sections';

export default function page() {
  return (
    <div className='bg-black'>
      <BlogHeaderSection />
      <RecentBlogSection />
      <CreateAService />
      <MultipleServiceSection />
    </div>
    
  );
}
