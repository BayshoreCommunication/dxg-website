import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import React from 'react';
import OfferCountdown from './OfferCountdown';

const LimitedTimeOffer = () => {
  return (
    <div className=' bg-[#111617] py-3 md:py-10 lg:py-20'>
      <MaxWidthWrapper>
        <div>
          <div className=' mb-8 flex flex-col items-center justify-center gap-2'>
            <h2 className='text-2xl text-white md:text-5xl'>
              This Offer <span className='text-[#F93B3B]'>Ends</span> Soon!
            </h2>
            <p className='text-base text-white opacity-70 md:text-xl'>
              Take advantage of exclusive savings before time runs out!
            </p>
          </div>
          <OfferCountdown />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default LimitedTimeOffer;
