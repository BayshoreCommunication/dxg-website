import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import React from 'react';

const ThankYouPage: React.FC = () => {
  return (
    <div className=' h-screen bg-differentBackground'>
      <MaxWidthWrapper>
        <div className='flex flex-col items-center justify-center py-20'>
          <h1 className='text-3xl font-bold'>Thank You!</h1>
          <p>Thank you for your submission. We appreciate your feedback.</p>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default ThankYouPage;
