import React from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="bg-slate-600 sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-slate-600">
        <MaxWidthWrapper>
          <div className="">
            <div className="flex h-16 items-center">
              {/* TODO: Mobile nav */}
              <div className="ml-4 flex lg:ml-0">
                <Link href={'/'}>Footer</Link>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
}
