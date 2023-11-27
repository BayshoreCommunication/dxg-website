import Image, { StaticImageData } from 'next/image';

interface SectionInformationWithImageProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  sectionTitle: string;
  sectionDescription: string[];
  sectionImage: StaticImageData;
  sectionImageOverlay: string;
  imagePosition?: 'left' | 'right';
}
export const SectionInformationWithImage: React.FC<
  SectionInformationWithImageProps
> = ({
  sectionTitle,
  sectionDescription,
  sectionImage,
  sectionImageOverlay,
  imagePosition = 'right',
  ...rest
}) => {
  return (
    <div className='bg-black' {...rest}>
      <div className='container py-9 lg:py-16'>
        <div className=' items-center lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-14 '>
          <div
            className={`${
              imagePosition === 'left' && 'order-last'
            } lg:col-span-5 `}
          >
            <h2 className='mb-3 text-3xl font-semibold capitalize leading-tight text-brand'>
              {sectionTitle}
            </h2>
            {sectionDescription?.map((section, index) => {
              return (
                <p
                  key={index}
                  className='mb-3 text-justify text-base font-medium leading-[27px] tracking-[0.18px] text-white'
                >
                  {section}
                </p>
              );
            })}
          </div>

          <div className='mt-6 lg:col-span-7 lg:mt-0 '>
            <Image
              src={sectionImage}
              alt={sectionTitle}
              quality={100}
              style={{ width: '100%' }}
              className='w-full rounded'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
