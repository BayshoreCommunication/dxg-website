import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
export default function NewsLetter() {
  return (
    <MaxWidthWrapper className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-5 bg-sky-500 px-5 py-8 rounded-3xl">
        <div className="col-span-3">
          <h1 className="text-white uppercase text-2xl md:text-3xl font-semibold text-center md:text-left">
            See our latest and greatest
          </h1>
          <h2 className="text-white text-xl md:text-2xl text-center uppercase line my-1 md:text-left">
            Subscribe to our NewsLetter
          </h2>
          <p className="text-white text-sm md:text-base text-center md:text-left">
            With the average experience of our team members being
            ten-plus years in the event space, DXG is a sought-after
            resource by event planners, event production companies,
            and event platforms.
          </p>
        </div>
        <div className="col-span-2 mt-5 md:mt-0 md:ml-2">
          <Input className="mb-4" placeholder="Name" />
          <Input className="mb-4" placeholder="Email" />
          <Button className=" w-full bg-slate-800">Subscribe</Button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
