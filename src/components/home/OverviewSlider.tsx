'use client';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '@/style/custom.css';

import { useRef } from 'react';

import Link from 'next/link';
import { Icons } from '../Icons';
import { Button } from '../ui/button';
import { ChevronLeftCircle, ChevronRightCircle } from 'lucide-react';

// data array obejct type
interface Data {
  title: string;
  description: string;
  image: string;
  icon: string;
  href: string;
}

// slider props type
interface SliderProps {
  data: Data[];
}

export default function OverviewSlider({ data }: SliderProps) {
  const swiperRef = useRef(null);

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              className="h-full w-full bg-[url('/banner/engage.png')] bg-no-repeat bg-center bg-cover"
            >
              <div
                className={`flex flex-col bg-sky-700 bg-opacity-50  justify-center items-center  group `}
              >
                <div className="relative text-white mt-10">
                  {item.icon === 'man' && (
                    <Icons.man className="h-20 w-20" />
                  )}
                  {item.icon === 'media' && (
                    <Icons.media className="h-20 w-20" />
                  )}
                  {item.icon === 'monitor' && (
                    <Icons.monitor className="h-20 w-20" />
                  )}
                </div>
                <div className="py-5 px-20 text-center">
                  <h1 className="text-2xl font-bold text-white uppercase py-2">
                    {item.title}
                  </h1>
                  <p className="text-base text-white">
                    {item.description}
                  </p>

                  <div className="h-20 mt-6">
                    <Button
                      className=" bg-white text-sky-400 rounded-full  hover:bg-white"
                      asChild
                    >
                      <Link href={item.href}>Read More</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="swiper-button-next">
        <ChevronRightCircle className=" text-white" />
      </div>
      <div className="swiper-button-prev">
        <ChevronLeftCircle className=" text-white" />
      </div>
    </div>
  );
}
