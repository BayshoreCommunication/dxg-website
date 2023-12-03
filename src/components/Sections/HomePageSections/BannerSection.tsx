import { Icons } from '@/components/Icons';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { OutlineTextStyle } from '@/components/TextStyle';
import BannerImage from '../../../../public/bgHeader.png';
import { MotionDiv, MotionP } from '@/components/Motion';

import NumberAnimation from '@/components/NumberAnimation';
import { fadeIn, staggerContainer, zoomIn } from '@/lib/motion';
import { TypingText } from '@/components/CustomTexts';

export const BannerSection = () => {
  return (
    <div className=''>
      <div
        className='relative'
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${BannerImage.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <MaxWidthWrapper>
          <MotionDiv
            variants={staggerContainer(0.2, 0.1)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className='h-[700px]'
          >
            <div className='md:hidden'>
              <div className='pt-12'>
                <h1 className='text-center text-4xl font-bold uppercase text-white md:text-6xl'>
                  we bring{' '}
                  <span className='outline-with-shaddow text-4xl font-bold uppercase md:text-6xl '>
                    peace of{' '}
                  </span>
                </h1>

                <div className='flex items-center justify-center gap-3 self-center'>
                  <div className='h-14 w-14'>
                    {<Icons.arrowSVG className='inline' />}
                  </div>
                  <h1 className='outline-with-shaddow text-4xl font-bold uppercase md:text-6xl '>
                    {' '}
                    mind to{' '}
                  </h1>
                  <h1 className='text-4xl font-bold uppercase text-white md:text-6xl'>
                    your
                  </h1>
                </div>
                <h1 className='text-center text-4xl font-bold uppercase text-white md:text-6xl'>
                  event experience
                </h1>
              </div>
              <div>
                <MotionP
                  variants={fadeIn('up', 'tween', 0.2, 1)}
                  className=' text-md m-5 mt-10 text-center font-light text-white'
                >{`DXG has truly revolutionized my real estate business! The microsite's personalized touch elegantly displays my listings and services, effortlessly.`}</MotionP>
              </div>
              <div className='mt-10 flex w-full justify-around'>
                <div className='flex flex-col items-center'>
                  <MotionDiv variants={zoomIn(0.2, 0.5)}>
                    <NumberAnimation className='text-xl' value={20} />
                    <p className='text-sm font-light text-white'>
                      Years Experience
                    </p>
                  </MotionDiv>
                </div>
                <div className='flex flex-col items-center'>
                  <MotionDiv variants={zoomIn(0.2, 0.5)}>
                    <NumberAnimation className='text-xl' value={20} />
                    <p className='text-sm font-light text-white'>
                      Completed Project
                    </p>
                  </MotionDiv>
                </div>
              </div>
              <div className=' mt-16 flex justify-center'>
                <div className='relative flex h-28 w-28 items-center justify-center'>
                  <div className='absoulute animate-spin-slow'>
                    {<Icons.circularText />}
                  </div>
                  <div className='absolute flex h-10 w-10 items-center justify-center'>
                    {<Icons.playButton />}
                  </div>
                </div>
              </div>
            </div>
            <div className='hidden h-full md:block'>
              <div className='flex h-full flex-col justify-around'>
                <div className='m-4'>
                  {/* <OutlineTextStyle
                    preText='we bring'
                    coloredText='peace of mind to'
                  /> */}
                  <TypingText
                    preText='we bring'
                    coloredText='peace of mind to'
                    textStyles='text-white'
                  />
                  <MotionDiv className='ml-10 mt-5 flex items-start'>
                    <MotionDiv
                      variants={fadeIn('right', 'tween', 0.6, 1)}
                      className='mr-5 w-24'
                    >
                      {<Icons.arrowSVG size={200} />}
                    </MotionDiv>
                    {/* <OutlineTextStyle
                      preText='your event experience'
                      coloredText=''
                    /> */}
                    <TypingText
                      preText='your event experience'
                      coloredText=''
                      textStyles='text-white'
                    />
                  </MotionDiv>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='w-1/2'>
                    <MotionP
                      variants={fadeIn('up', 'tween', 0.2, 1)}
                      className=' w-2/3 text-justify text-xl font-normal text-white'
                    >{`DXG has truly revolutionized my real estate business! The microsite's personalized touch elegantly displays my listings and services, effortlessly.`}</MotionP>
                    <div className='flex-start mt-5 flex w-full gap-16'>
                      <div className='mt-3'>
                        <MotionDiv variants={zoomIn(0.2, 0.5)}>
                          <NumberAnimation className='text-3xl' value={20} />
                          <p className='text-lg font-normal text-white'>
                            Years Experience
                          </p>
                        </MotionDiv>
                      </div>
                      <div className='mt-3'>
                        <MotionDiv variants={zoomIn(0.2, 0.5)}>
                          <NumberAnimation className='text-3xl' value={70} />
                          <p className='text-lg font-normal text-white'>
                            Completed Project
                          </p>
                        </MotionDiv>
                      </div>
                    </div>
                  </div>

                  <div className='relative flex h-28 w-28 items-center justify-center md:mr-20'>
                    <div className='absoulute animate-spin-slow hover:animate-pulse'>
                      {<Icons.circularText />}
                    </div>
                    <div className='absolute flex h-10 w-10 items-center justify-center'>
                      {<Icons.playButton />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MotionDiv>
        </MaxWidthWrapper>
      </div>
      {/* <Image src={BannerImage} alt='Texture Logo' style={{ width: '100%' }} /> */}
    </div>
  );
};
