import { MethodCard } from '@/components/MethodCard';
import { OurMethods } from '@/config/data';

export const OurMethodsSection = () => {
  return (
    <div className='bg-black py-10'>
      {/* <MaxWidthWrapper> */}
      <div className='container'>
        <div className='grid grid-cols-1 justify-items-center gap-8 md:grid-cols-4'>
          {OurMethods.map((item, index) => {
            return <MethodCard key={index} {...item} />;
          })}
        </div>
      </div>
      {/* </MaxWidthWrapper> */}
    </div>
  );
};
