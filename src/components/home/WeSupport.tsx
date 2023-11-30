import SupportCard from '../Cards/SupportCard';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { H1, P, Paragraph, Title } from '../Typography';
import { Button } from '../ui/button';
import Link from 'next/link';
import { BottomToTop } from '../Animation';
import { exploreDXG } from '@/config/data';
import SupportCardTwo from '../Cards/SupportCardTwo';
const infos = {
  title: 'Who We Support',
  description:
    'With the average experience of our team members being ten-plus years in the event space, DXG is a sought-after resource by event planners, event production companies, and event platforms.',
};

export default function WeSupport() {
  return (
    <div className='bg-black'>
      <div className='container'>
        <div className='flex flex-col  items-end py-10'>
          <Title text={infos.title} />
          <Paragraph text={infos.description} className='md:max-w-lg' />

          <BottomToTop>
            <Button
              asChild
              variant={'outline'}
              className='rounded-full border-brand bg-transparent px-7 text-brand hover:bg-brand hover:text-white'
            >
              <Link href='/'>Read More</Link>
            </Button>
          </BottomToTop>
        </div>
        <div className='options flex min-h-[500px] skew-y-6 transform flex-col items-stretch overflow-hidden md:flex-row'>
          {exploreDXG.map((item, index) => (
            <SupportCard key={index} data={item} />
          ))}
        </div>
        {/* <div className='mt-[31px] flex max-w-[370px] flex-col gap-[24px]'>
          {exploreDXG.map((item, index) => (
            <SupportCardTwo
              key={index}
              data={item}
              number={`${index < 10 ? '0' : ''} ${index + 1}`}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
}
