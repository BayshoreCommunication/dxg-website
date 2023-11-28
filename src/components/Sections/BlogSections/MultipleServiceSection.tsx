import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { MULTIPLE_SERVICE } from '@/config/data';
import Image from 'next/image';

export const MultipleServiceSection = () => {
  return (
    <div className='bg-black pb-5 text-white'>
      <MaxWidthWrapper>
        <div className=''>
          <hr className='mb-4 h-2 border-gray-500' />
          <div className='grid grid-cols-1 gap-5 md:grid-cols-3'>
            {MULTIPLE_SERVICE.map((item, index) => {
              return (
                <div key={index} className='px-5'>
                  <div className='relative h-[278px] w-full'>
                    <Image
                      src={item.image}
                      alt='Meeting Blog'
                      //   width={200}
                      //   height={200}
                      fill
                      style={{
                        objectFit: 'fill',
                        width: '100%',
                      }}
                    />
                  </div>
                  <h4 className='mt-4 line-clamp-2 text-xl font-bold'>
                    {item.title}
                  </h4>
                  <p className='text-light my-4 line-clamp-6 text-justify'>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
