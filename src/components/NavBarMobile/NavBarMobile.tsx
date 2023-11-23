'use client';

import { SITECONFIG } from '@/config/site';
import Link from 'next/link';
import { MouseEvent, useState } from 'react';
import { Icons } from '../Icons';
import { Button } from '../ui/button';

export const NavBarMobile = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const dropDownShownHandler = () => {
    setShowDropdown(true);
  };
  const dropDownDisableHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setShowDropdown(false);
  };
  return (
    <div className='block md:hidden' onClick={dropDownShownHandler}>
      {/* <p className='text-white'>Burger</p> */}
      {<Icons.burger size={40} className='text-brand' />}
      <div
        className={`fixed inset-0 h-screen w-screen bg-header ${
          showDropdown ? 'block' : 'hidden'
        }`}
      >
        <div
          className={`absolute right-5 top-5 cursor-pointer`}
          onClick={(e) => dropDownDisableHandler(e)}
        >
          {<Icons.cancel size={50} className='text-brand' />}
        </div>
        <div className='mt-10 flex flex-col items-center justify-center '>
          {SITECONFIG.mainNav.map((item, index) => {
            return (
              <Link key={index} href={item.slug}>
                <Button
                  className='mt-5 text-2xl font-semibold text-white hover:text-brand active:text-brand'
                  variant='link'
                >
                  {item.title}
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
