import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { MethodCard } from '@/components/MethodCard';
import { OurMethods } from '@/config/data';

export const OurMethodsSection = () => {
  return (
    <div className='h-screen bg-black'>
      <MaxWidthWrapper>
        <div className='grid w-full grid-cols-1 gap-x-3 md:grid-cols-4'>
          {OurMethods.map((item, index) => {
            return <MethodCard key={index} {...item} />;
          })}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
