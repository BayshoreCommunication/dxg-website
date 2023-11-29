import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Button } from '@/components/ui/button';
import { SPECIAL_OFFER } from '@/config/data';
import Image from 'next/image';

export const CreateAService = () => {
  return (
    <div className='mb-4 bg-black'>
      <MaxWidthWrapper>
        <div className=''>
          <hr className='mb-4 h-2 border-gray-500' />
          {SPECIAL_OFFER.map((item, index) => {
            return (
              <div
                key={item.id}
                className='flex flex-col-reverse gap-5 text-white md:flex-row'
              >
                <div className='w-full md:w-7/12'>
                  <h1 className='mb-2 text-3xl font-bold'>{item.title}</h1>
                  <p className='text-justify'>{item.description}</p>
                  <div className='mt-5 flex gap-4'>
                    {item.tag.map((tagItem, index) => {
                      return (
                        <Button
                          key={index}
                          variant={'outline'}
                          className='m-0 rounded-full bg-transparent'
                        >
                          {tagItem}
                        </Button>
                      );
                    })}
                  </div>
                </div>
                <div className='relative h-[360px] w-full md:w-5/12'>
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
              </div>
            );
          })}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
