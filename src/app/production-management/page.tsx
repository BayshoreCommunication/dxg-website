import {
  DGXBreadCrumbSection,
  OurMethodsSection,
  WhyChooseUsSection,
} from '@/components/Sections';
import NewsLetter from '@/components/NewsLetter';
import Testimonial from '@/components/Testimonial';
import WhyDxg from '@/components/home/WhyDxg';
import {ProductManagementPageSection} from '@/components/Sections/ProductManagementPageSection';


export default function ProductionManagement() {
  return (
    <div className='bg-black'>
      <ProductManagementPageSection/>
      <div className="flex flex-wrap">
        <div className="w-1/2 p-4">
          <h1>ssss</h1>
        </div>
        <div className="w-1/2 p-4">
        <h1>aaaaa</h1>
        </div>
      </div>
      <NewsLetter />
      <Testimonial />
      <WhyDxg />
    </div>
  );
}
