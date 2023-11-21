import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

import { SITECONFIG } from '@/config/site';

export default function Navbar() {
  return (
    <div className="bg-slate-600 sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-slate-600">
        <MaxWidthWrapper>
          <div className="">
            <div className="flex justify-between h-16 items-center">
              {/* TODO: Mobile nav */}
              <div className="">
                <Link href={'/'}>LOGO</Link>
              </div>
              <nav className="flex gap-6">
                <div className="flex items-center">
                  {SITECONFIG.mainNav.map((item, index) => (
                    <Link key={index} href={item.slug} className="">
                      {item.title}
                    </Link>
                  ))}
                </div>
                <Button variant="outline">
                  Request for Proposal
                </Button>
              </nav>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
}
