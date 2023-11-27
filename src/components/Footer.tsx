// import bgFooter from '../public/bgFooter.png';
import { SITECONFIG } from '@/config/site';
import Image from 'next/image';
import Link from 'next/link';
import image from '../../public/bgFooter.png';
import logo from '../../public/dxgLogo.svg';
import { Icons } from './Icons';
import MaxWidthWrapper from './MaxWidthWrapper';
import { Button } from './ui/button';
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
        <MaxWidthWrapper>
          <div className='flex h-[500px] flex-col md:h-[300px] '>
            {/* First Row */}
            <div className='mt-10 grid h-[500px] grid-cols-2 gap-4 md:mt-5 md:h-[400px] md:grid-cols-4'>
              <div className='mt-2 px-2 md:mt-4'>
                <div className='w-3/4'>
                  <Image
                    src={logo}
                    alt='Texture Logo'
                    style={{ width: '100%' }}
                  />
                </div>
                {/* phone */}
                <div className='mt-2 flex'>
                  {<Icons.phone size={20} className=' mr-2 text-brand' />}
                  <p className='text-sm text-white'>+888.456.574</p>
                </div>
                {/* email */}
                <div className='mt-2 flex items-center '>
                  {<Icons.mail size={20} className='mr-2 text-brand' />}
                  <p className='w-1/2 text-ellipsis text-sm text-white'>
                    ace@dxg.agency
                  </p>
                </div>
                {/* icons */}
                <div className='mt-2 flex gap-4'>
                  {<Icons.facebook className='h-7 w-7 rounded  text-brand' />}
                  {<Icons.linkedIn className='h-7 w-7 rounded  text-brand' />}
                  {<Icons.twitter className='h-7 w-7 rounded  text-brand' />}
                  {<Icons.instagram className='h-7 w-7 rounded  text-brand' />}
                </div>
              </div>
              <div className='ml-10 mt-2 px-2 md:mt-4'>
                <p className='mb-2 font-bold text-white'>Service</p>
                {SITECONFIG.footerNav.services.map((item, index) => {
                  return (
                    <Link key={index} href={item.slug}>
                      <Button
                        variant={'link'}
                        className=' mb-4 whitespace-pre-line pl-0 text-start text-white hover:text-brand'
                      >
                        {item.title}
                      </Button>
                    </Link>
                  );
                })}
              </div>
              <div className='mt-2 px-2 md:ml-10 md:mt-4'>
                <p className='font-bold text-white'>Legal</p>
                {SITECONFIG.footerNav.legal.map((item, index) => {
                  return (
                    <Link key={index} href={item.slug}>
                      <Button
                        variant={'link'}
                        className='pl-0 text-white hover:text-brand'
                      >
                        {item.title}
                      </Button>
                    </Link>
                  );
                })}
              </div>
              <div className='ml-10 mt-2 px-2 md:mt-4'>
                <p className='font-bold text-white'>Why DXG</p>
                {SITECONFIG.footerNav.whyDXG.map((item, index) => {
                  return (
                    <Link key={index} href={item.slug}>
                      <Button
                        variant={'link'}
                        className='pl-0 text-white hover:text-brand'
                      >
                        {item.title}
                      </Button>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Separator */}
            {/* <div className='mt-5 h-[3px] w-full bg-gray-500'></div> */}
          </div>
        </MaxWidthWrapper>
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
