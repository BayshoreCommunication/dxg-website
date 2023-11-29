import React from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Image from 'next/image';
import { SITECONFIG } from '@/config/site';
import { Icons } from '@/components/Icons';
import { H1, P, H4 } from '../Typography';

const infos = {
  title: 'Why DXG',
  description:
    'With the average experience of our team members being ten-plus years in the event space, DXG is a sought-after resource by event planners, event production companies, and event platforms.',
};

const WHY_DXG_DATA = [
  {
    title: 'Our Process',
    description:
      'With the average experience of our team members being ten-plus years in the event space, DXG is a sought-after resource by event planners, event production companies, and event platforms.',
  },
  {
    title: 'Our Services',
    description:
      'With the average experience of our team members being ten-plus years in the event space, DXG is a sought-after resource by event planners, event production companies, and event platforms.',
  },
  {
    title: 'Our Mission',
    description:
      'With the average experience of our team members being ten-plus years in the event space, DXG is a sought-after resource by event planners, event production companies, and event platforms.',
  },
  {
    title: 'Our Experience',
    description:
      'With the average experience of our team members being ten-plus years in the event space, DXG is a sought-after resource by event planners, event production companies, and event platforms.',
  },
];

export default function WhyDxg() {
  return (
    <div className="h-full w-full bg-[url('/bgWhyDxg.png')] bg-cover bg-center bg-no-repeat">
      <div className='bg-black bg-opacity-60'>
        <MaxWidthWrapper>
          <div className='flex flex-col items-center justify-center'>
            <div className='my-10 text-center'>
              <H1 text={infos.title} />
              <P className='text-center' text={infos.description} />
            </div>
          </div>
          <div className='flex items-center justify-center gap-4 pb-5'>
            <div className='flex flex-[2] flex-col'>
              {/* <div className='mx-2 flex flex-col  flex-wrap border sm:justify-center md:mx-0 md:flex-row'>
                {WHY_DXG_DATA.map((item, index) => (
                  <div
                    key={index}
                    className='flex flex-col items-center gap-1 border md:items-start'
                  >
                    <Icons.repeat className='h-16 w-16' />
                    <h2 className='py-2 text-2xl font-bold uppercase text-white'>
                      {item.title.split(' ').at(0)}{' '}
                      <span className='  outline-text tracking-wider text-brand'>
                        {item.title.split(' ').at(1)}
                      </span>
                    </h2>
                    <P text={item.description} className='max-w-[22rem]' />
                  </div>
                ))}
              </div> */}

              <div className='flex flex-col gap-10 md:flex-row '>
                <div className='flex flex-col items-center py-0 md:items-start'>
                  <Icons.repeat className='h-16 w-16' />
                  <h1 className='py-2 text-2xl font-extrabold uppercase text-white'>
                    Our{' '}
                    <span className='  outline-text tracking-wider text-brand'>
                      Process
                    </span>
                  </h1>
                  <P
                    text='With the average experience of our team members being
                    ten-plus years in the event space, DXG is a sought-after
                    resource by event planners, event production companies, and
                    event platforms.'
                  />
                </div>
                <div className='flex flex-col items-center py-0 md:items-start'>
                  <Icons.happyFace className='h-16 w-16' />
                  <h1 className='py-2 text-2xl font-bold uppercase text-white'>
                    Our{' '}
                    <span className='  outline-text tracking-wider text-brand'>
                      Service
                    </span>
                  </h1>
                  <P
                    text='With the average experience of our team members being
                    ten-plus years in the event space, DXG is a sought-after
                    resource by event planners, event production companies, and
                    event platforms.'
                  />
                </div>
              </div>

              <div className='mb-5 flex flex-col gap-10 md:flex-row'>
                <div className='flex flex-col items-center py-0 pt-10 md:items-start'>
                  <Icons.group className='h-12 w-12' />
                  <h1 className='py-2 text-2xl font-bold uppercase text-white'>
                    Our{' '}
                    <span className='  outline-text tracking-wider text-brand'>
                      Mission
                    </span>
                  </h1>
                  <P
                    text='With the average experience of our team members being
                    ten-plus years in the event space, DXG is a sought-after
                    resource by event planners, event production companies, and
                    event platforms.'
                  />
                </div>
                <div className='flex flex-col items-center py-0 md:items-start md:py-6 '>
                  <Icons.mechanics className='h-10 w-10' />
                  <h1 className='py-2 text-2xl font-bold uppercase text-white'>
                    Our{' '}
                    <span className='  outline-text tracking-wider text-brand'>
                      Experience
                    </span>
                  </h1>
                  <P
                    text='With the average experience of our team members being
                    ten-plus years in the event space, DXG is a sought-after
                    resource by event planners, event production companies, and
                    event platforms.'
                  />
                </div>
              </div>
            </div>
            <div className='hidden flex-1 md:block'>
              <Image
                src='/DXG.png'
                alt={SITECONFIG.siteMetadata.description}
                width={500}
                height={500}
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
}
