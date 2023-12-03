import { MethodCard } from '@/components/MethodCard';
import { MotionDiv } from '@/components/Motion';
import { OurMethods } from '@/config/data';
import { fadeIn, staggerContainer } from '@/lib/motion';

export const OurMethodsSection = () => {
  return (
    <div className='bg-black py-10'>
      {/* <MaxWidthWrapper> */}
      <div className='container'>
        <MotionDiv
          variants={staggerContainer(0.2, 0.1)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.25 }}
          className='grid grid-cols-1 justify-items-center gap-8 md:grid-cols-4'
        >
          {OurMethods.map((item, index) => {
            return (
              <MotionDiv
                variants={fadeIn('up', 'tween', index * 0.2, 0.75)}
                key={index}
              >
                <MethodCard key={index} {...item} />;
              </MotionDiv>
            );
          })}
        </MotionDiv>
      </div>
      {/* </MaxWidthWrapper> */}
    </div>
  );
};
