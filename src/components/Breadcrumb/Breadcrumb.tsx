import MaxWidthWrapper from '../MaxWidthWrapper';
import { HeaderTextStyle } from '../TextStyle';
import { Button } from '../ui/button';
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
  description: string;
}
export const BreadCrumb: React.FC<BreadCrumbProps> = ({
  buttonTitle,
  description,
  titleProps,
  ...rest
}) => {
  return (
    <div
      className='bg-black bg-[url("/breadcrumb-bg.png")] bg-cover bg-no-repeat'
      {...rest}
    >
      <MaxWidthWrapper>
        <div className='py-9 xl:py-28'>
          <div className=' lg:gap-18 items-center lg:grid lg:grid-cols-12 xl:gap-28 '>
            <div className='lg:col-span-7 xl:col-span-6'>
              <HeaderTextStyle {...titleProps} />
              <Button
                variant='dashed'
                className='mt-5 rounded-full px-10 py-3 md:px-14 lg:px-24'
              >
                {buttonTitle}
              </Button>
            </div>

            <div className='mt-6 lg:col-span-5 lg:mt-0 xl:col-span-6'>
              <p className='text-justify text-base font-medium leading-[27px] tracking-[0.18px] text-white'>
                {description}
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
