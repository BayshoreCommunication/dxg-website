// import bgFooter from '../public/bgFooter.png';
import { SITECONFIG } from '@/config/site';
import Image from 'next/image';
import Link from 'next/link';
import image from '../../public/bgFooter.png';
import logo from '../../public/dxgLogo.svg';
import { Icons } from './Icons';
import { Button } from './ui/button';
import { MotionDiv } from './Motion';
import { fadeIn, staggerContainer, zoomIn } from '@/lib/motion';
export default function Footer() {
  return (
    <div className='sticky inset-x-0 top-0 z-50 h-40'>
      <footer
        className='relative'
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${image.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* <MaxWidthWrapper> */}
        <div className='container py-8'>
          <MotionDiv
            variants={staggerContainer(0.2, 0.1)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className='flex h-[500px] flex-col md:h-[300px] '
          >
            <div className='mt-10 grid h-[500px] grid-cols-2 gap-4  md:mt-5 md:h-[400px] md:grid-cols-4'>
              {/* First column */}
              <div className='flex flex-col'>
                <div className='w-2/3 md:w-1/2'>
                  <Image
                    src={logo}
                    alt='Texture Logo'
                    style={{ width: '100%' }}
                  />
                </div>
                <div className='my-4'>
                  {/* phone */}
                  <div className='my-2 flex icon-hover'>
                    {<Icons.phone size={20} className=' mr-2 text-brand' />}
                    <p className='text-sm text-white'>+888.456.574</p>
                  </div>
                  {/* email */}
                  <div className=' flex items-center icon-hover'>
                    {<Icons.mail size={20} className='mr-2 text-brand' />}
                    <p className='w-1/2 text-ellipsis text-sm text-white'>
                      ace@dxg.agency
                    </p>
                  </div>
                </div>
                {/* icons */}
                <div className='mt-2 flex gap-4'>
                  <MotionDiv variants={zoomIn(0.1, 0.5)}>
                    <Icons.facebook className='icon-hover h-7 w-7 rounded text-brand' />
                  </MotionDiv>
                  <MotionDiv variants={zoomIn(0.2, 0.5)}>
                    <Icons.linkedIn className='icon-hover h-7 w-7 rounded text-brand' />
                  </MotionDiv>
                  <MotionDiv variants={zoomIn(0.3, 0.5)}>
                    <Icons.twitter className='icon-hover h-7 w-7 rounded text-brand' />
                  </MotionDiv>
                  <MotionDiv variants={zoomIn(0.4, 0.5)}>
                    <Icons.instagram className='icon-hover h-7 w-7 rounded text-brand' />
                  </MotionDiv>
                </div>
              </div>
              {/* Second Column */}
              <div className='ml-5 flex flex-col md:items-center'>
                <div className='  md:w-1/2'>
                  <h2 className='mb-2 text-2xl font-bold text-brand'>
                    Service
                  </h2>
                  {SITECONFIG.footerNav.services.map((item, index) => {
                    return (
                      <MotionDiv
                        key={index}
                        variants={fadeIn('up', 'tween', index * 0.1, 1)}
                      >
                        <Link key={index} href={item.slug}>
                          <Button
                            variant={'link'}
                            className=' mb-4 whitespace-pre-line pl-0 text-start text-white hover:text-brand'
                          >
                            {item.title}
                          </Button>
                        </Link>
                      </MotionDiv>
                    );
                  })}
                </div>
              </div>
              {/* Third Column */}
              <div className='ml-5 flex flex-col  md:items-center'>
                <div className=' md:w-1/2'>
                  <h2 className='mb-2 text-2xl font-bold text-brand'>
                    Why DXG
                  </h2>
                  {SITECONFIG.footerNav.whyDXG.map((item, index) => {
                    return (
                      <MotionDiv
                        key={index}
                        variants={fadeIn('up', 'tween', index * 0.1, 1)}
                      >
                        <Link key={index} href={item.slug}>
                          <Button
                            variant={'link'}
                            className='pl-0 text-white hover:text-brand'
                          >
                            {item.title}
                          </Button>
                        </Link>
                      </MotionDiv>
                    );
                  })}
                </div>
              </div>

              {/* Fourth Column */}
              <div className='flex flex-col  md:items-center'>
                <div className=' md:w-1/2'>
                  <h2 className='mb-2 text-2xl font-bold text-brand'>Legal</h2>
                  {SITECONFIG.footerNav.legal.map((item, index) => {
                    return (
                      <MotionDiv
                        key={index}
                        variants={fadeIn('up', 'tween', index * 0.1, 1)}
                      >
                        <Link key={index} href={item.slug}>
                          <Button
                            variant={'link'}
                            className='pl-0 text-white hover:text-brand'
                          >
                            {item.title}
                          </Button>
                        </Link>
                      </MotionDiv>
                    );
                  })}
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>
        {/* </MaxWidthWrapper> */}
        <hr className='border-gray-500' />

        {/* Second Row */}
        <div className='flex h-[80px] flex-col justify-center'>
          <p className='text-center text-xs text-white'>
            ©2022 Digital Xperience Group (DXG) ®All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
