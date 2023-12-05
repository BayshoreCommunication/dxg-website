'use client';
import React from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Image from 'next/image';
import { SITECONFIG } from '@/config/site';
import { Icons } from '@/components/Icons';
import { H1, P, H4, Title, Paragraph } from '../Typography';
import { MotionDiv } from '../Motion';
import { fadeIn, slideIn, staggerContainer } from '@/lib/motion';

const infos = {
  title: 'Why DXG',
  description: `At the core of our ethos, we believe that the essence of our work transcends the boundaries of what we do and how we do it. It's about who we do it with, for, and why we do it. This belief is profoundly woven into every aspect of our business, from our attentive process and unparalleled service to our purpose-driven mission and the vast experience we offer.
`,
};

const WHY_DXG_DATA = [
  {
    title: 'Our Process',
    description: `We transform events into unforgettable experiences through a meticulous process. We intimately understand clients' objectives, employing a diverse team of seasoned professionals to orchestrate cutting-edge audiovisuals. Leveraging innovative technology, we craft immersive experiences and deliver measurable results, ensuring each event is a dynamic reality that resonates with attendees and leaves a lasting impression.
`,
  },
  {
    title: 'Our Services',
    description: `We offer comprehensive event production services. Our seasoned team specializes in elevating digital and production quality for in-person, virtual, and hybrid events. From immersive experiences and audiovisual expertise to Triple E Xperience™ implementation, we ensure every aspect resonates, delivering measurable results and creating sought-after, memorable events.
`,
  },
  {
    title: 'Our Mission',
    description: `DXG's mission is to redefine event experiences through innovation and expertise. We aim to intimately understand clients' event objectives, forging meaningful connections between content and audience. With cutting-edge technology and a diverse team, our mission is to deliver dynamic, measurable results, elevating events to new levels of engagement and impact.
`,
  },
  {
    title: 'Our Experience',
    description: `With a foundation deeply rooted in event hospitality, DXG brings over a decade of average experience among its team members. Renowned for orchestrating awe-inspiring audiovisuals at notable events, we push the boundaries of event production. Our seasoned experts ensure a seamless blend of creativity and technical prowess, crafting unforgettable experiences.
`,
  },
];

export default function WhyDxg() {
  return (
    <div className="h-full w-full bg-[url('/bgWhyDxg.png')] bg-cover bg-center bg-no-repeat">
      <div className='bg-black bg-opacity-60'>
        <MaxWidthWrapper>
          <div className='m-auto flex max-w-3xl flex-col items-center justify-center'>
            <div className='my-10 text-center'>
              <Title text={infos.title} />
              <Paragraph key={0} text={infos.description} />
            </div>
          </div>
          <MotionDiv
            variants={staggerContainer(0.2, 0.1)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className='flex items-center justify-center gap-5 pb-5'
          >
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

              <MotionDiv
                variants={slideIn('up', 'tween', 0.5, 0.5)}
                className='flex flex-col gap-10 md:flex-row '
              >
                <div className='flex flex-col items-center py-0 md:items-start'>
                  <Icons.repeat className='h-16 w-16' />
                  <h1 className='py-2 text-2xl font-extrabold uppercase text-white'>
                    Our{' '}
                    <span className='  outline-text tracking-wider text-brand'>
                      Process
                    </span>
                  </h1>
                  <P text={WHY_DXG_DATA[0].description} />
                </div>
                <div className='flex flex-col items-center py-0 md:items-start'>
                  <Icons.happyFace className='h-16 w-16' />
                  <h1 className='py-2 text-2xl font-bold uppercase text-white'>
                    Our{' '}
                    <span className='  outline-text tracking-wider text-brand'>
                      Service
                    </span>
                  </h1>
                  <P text={WHY_DXG_DATA[1].description} />
                </div>
              </MotionDiv>

              <MotionDiv
                variants={slideIn('left', 'tween', 0.5, 0.5)}
                className='mb-5 flex flex-col gap-10 md:flex-row'
              >
                <div className='flex flex-col items-center py-0 pt-10 md:items-start'>
                  {/* <Icons.group className='h-12 w-12' /> */}
                  <div className='h-16 w-16'>
                    <Image alt='mission' src='/mission.png' fill />
                  </div>

                  <h1 className='py-2 text-2xl font-bold uppercase text-white'>
                    Our{' '}
                    <span className='  outline-text tracking-wider text-brand'>
                      Mission
                    </span>
                  </h1>
                  <P text={WHY_DXG_DATA[2].description} />
                </div>
                <div className='flex flex-col items-center py-0 md:items-start md:py-6 '>
                  {/* <Icons.mechanics className='h-10 w-10' /> */}

                  <div className='h-16 w-16'>
                    <Image alt='experience' src='/experience.png' fill />
                  </div>
                  <h1 className='py-2 text-2xl font-bold uppercase text-white'>
                    Our{' '}
                    <span className='  outline-text tracking-wider text-brand'>
                      Experience
                    </span>
                  </h1>
                  <P text={WHY_DXG_DATA[3].description} />
                </div>
              </MotionDiv>
            </div>
            <MotionDiv
              variants={fadeIn('left', 'tween', 0.2, 1)}
              className='hidden flex-1 md:block'
            >
              <Image
                src='/DXG.png'
                alt={SITECONFIG.siteMetadata.description}
                width={500}
                height={500}
              />
            </MotionDiv>
          </MotionDiv>
        </MaxWidthWrapper>
      </div>
    </div>
  );
}
