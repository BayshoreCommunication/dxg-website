import {
  DGXBreadCrumbSection,
  OurMethodsSection,
  WhyChooseUsSection,
} from '@/components/Sections';

export const metadata: Metadata = {
  title: ' Exceptional Event Production, AV, Graphics, Animation & More | DXG Agency',
  description:
    'Transform your events into truly unforgettable experiences with DXG Agency. We offer exceptional event production management, cutting-edge AV technology, stunning graphics, dynamic animation, and innovative solutions for virtual and hybrid events. Elevate your event’s impact with our expertise.',
};

export default function WhyDxg() {
  return (
    <div className='bg-black'>
      <DGXBreadCrumbSection />
      <OurMethodsSection />
      <WhyChooseUsSection />
    </div>
  );
}
