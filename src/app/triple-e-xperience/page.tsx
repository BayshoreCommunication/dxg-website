import { BreadCrumb } from '@/components/Breadcrumb';
import React from 'react';
import EngageImage from '../../../public/triple-e-xperience/engage.png';
import EnlightImage from '../../../public/triple-e-xperience/enlight.png';
import ExchangeImage from '../../../public/triple-e-xperience/exchange.png';
import NewsLetter from '@/components/NewsLetter';
import { SectionInformationWithImage } from '@/components/Sections';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
export default function TripleExperience() {
  return (
    <div className='bg-black'>
      <BreadCrumb
        buttonTitle='Book an appointment'
        description='When it comes to putting on an event, event organizers and managers need to ensure they have the right partner to deliver The Triple E Xperience:'
        titleProps={{
          preText: 'Triple',
          coloredText: 'E',
          postText: 'Xperience',
          variant: 'caps',
          texAlign: 'text-left',
        }}
      />
      <MaxWidthWrapper>
        <SectionInformationWithImage
          className='bg-differentBackground'
          sectionTitle={'Engage'}
          sectionDescription={[
            'When it comes to putting on an event, event organizers and managers need to ensure they have the right partner to deliver The Triple E Xperience:',
            'When it comes to putting on an event, event organizers and managers need to ensure they have the right partner to deliver The Triple E Xperience:',
            'When it comes to putting on an event, event organizers and managers need to ensure they have the right partner to deliver The Triple E Xperience:',
            'When it comes to putting on an event, event organizers and managers need to ensure they have the right partner to deliver The Triple E Xperience:',
          ]}
          sectionImage={EngageImage}
          sectionImageOverlay={''}
        />
        <SectionInformationWithImage
          imagePosition='left'
          sectionTitle={'Enlight'}
          sectionDescription={[
            'When it comes to putting on an event, event organizers and managers need to ensure they have the right partner to deliver The Triple E Xperience:',
            'When it comes to putting on an event, event organizers and managers need to ensure they have the right partner to deliver The Triple E Xperience:',
            'When it comes to putting on an event, event organizers and managers need to ensure they have the right partner to deliver The Triple E Xperience:',
            'When it comes to putting on an event, event organizers and managers need to ensure they have the right partner to deliver The Triple E Xperience:',
          ]}
          sectionImage={EnlightImage}
          sectionImageOverlay={''}
        />
        <SectionInformationWithImage
          className='bg-differentBackground'
          sectionTitle={'Exchange'}
          sectionDescription={[
            'When it comes to putting on an event, event organizers and managers need to ensure they have the right partner to deliver The Triple E Xperience:',
            'When it comes to putting on an event, event organizers and managers need to ensure they have the right partner to deliver The Triple E Xperience:',
            'When it comes to putting on an event, event organizers and managers need to ensure they have the right partner to deliver The Triple E Xperience:',
            'When it comes to putting on an event, event organizers and managers need to ensure they have the right partner to deliver The Triple E Xperience:',
          ]}
          sectionImage={ExchangeImage}
          sectionImageOverlay={''}
        />
      </MaxWidthWrapper>
      <div className='bg-black'>
        <NewsLetter />
      </div>
    </div>
  );
}
