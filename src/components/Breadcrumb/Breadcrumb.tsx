import { ReactElement } from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { HeaderTextStyle } from '../TextStyle';
import { Button } from '../ui/button';
import { MotionDiv } from '../Motion';
import { fadeIn, staggerContainer } from '@/lib/motion';
import Link from 'next/link';
import { SITECONFIG } from '@/config/site';
type HeaderTextProps = {
  preText?: string;
  coloredText: string;
  postText?: string;
  variant?: 'section' | 'caps';
  texAlign?: 'text-center' | 'text-right' | 'text-left';
};
interface BreadCrumbProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  titleProps: HeaderTextProps;
  buttonTitle: string;
  description?: string;
  customDescription?: ReactElement;
}
export const BreadCrumb: React.FC<BreadCrumbProps> = ({
  buttonTitle,
  description,
  titleProps,
  customDescription,
  ...rest
}) => {
  return (
    <div
      className=' min-h-[300px] bg-differentBackground bg-[url("/breadcrumb-bg.png")] bg-cover bg-no-repeat'
      {...rest}
    >
      <MaxWidthWrapper>
        <div className='py-9 xl:py-28'>
          <MotionDiv
            variants={staggerContainer(0.2, 0.1)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className='lg:gap-18  h-[200px] items-center  lg:grid lg:grid-cols-12 xl:gap-28'
          >
            <MotionDiv
              variants={fadeIn('right', 'tween', 0.2, 1)}
              className='lg:col-span-7 xl:col-span-6'
            >
              <HeaderTextStyle {...titleProps} />
              <Button
                asChild
                variant='dashed'
                className='mt-5 rounded-full px-10 py-3 capitalize md:px-14 lg:px-24'
              >
                <Link href={SITECONFIG.appointmentLink}>{buttonTitle}</Link>
              </Button>
            </MotionDiv>

            <MotionDiv
              variants={fadeIn('left', 'tween', 0.2, 1)}
              className='mt-6 lg:col-span-5 lg:mt-0 xl:col-span-6'
            >
              {description && (
                <p className='text-justify text-base font-medium leading-[27px] tracking-[0.18px] text-white'>
                  {description}
                </p>
              )}
              {customDescription && customDescription}
            </MotionDiv>
          </MotionDiv>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
