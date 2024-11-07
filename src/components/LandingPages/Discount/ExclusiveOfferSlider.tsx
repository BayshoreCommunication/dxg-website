import Image from 'next/image';

const exclusiveEventData = [
  {
    month: 'January',
    date: 'January, 5',
    title: 'Closeplay: Music of the Spheres - World Tour',
    img: '/landing-pages/discount/exclusive-event-1.jpg',
  },
  {
    month: 'February',
    date: 'February, 15',
    title: 'Closeplay: Music of the Spheres - World Tour',
    img: '/landing-pages/discount/exclusive-event-2.jpg',
  },
  {
    month: 'March',
    date: 'March, 5',
    title: 'Closeplay: Music of the Spheres - World Tour',
    img: '/landing-pages/discount/exclusive-event-1.jpg',
  },
  {
    month: 'April',
    date: 'April, 10',
    title: 'Closeplay: Music of the Spheres - World Tour',
    img: '/landing-pages/discount/exclusive-event-2.jpg',
  },
  {
    month: 'May',
    date: 'May, 9',
    title: 'Closeplay: Music of the Spheres - World Tour',
    img: '/landing-pages/discount/exclusive-event-2.jpg',
  },
];

const ExclusiveOfferSlider = () => {
  return (
    <div>
      <div className='flex items-center gap-8'>
        <div className='w-[30%]'>
          <ul className='flex flex-col gap-2 text-white'>
            <li className='px-2 py-3 text-center text-lg '>January</li>
            <li className='px-2 py-3 text-center text-lg '>February</li>
            <li className='bg-white/10 px-2 py-3 text-center text-2xl font-semibold '>
              March
            </li>
            <li className='px-2 py-3 text-center text-lg '>April</li>
            <li className='px-2 py-3 text-center text-lg '>May</li>
          </ul>
        </div>
        <div className='flex w-[70%] items-center gap-6'>
          <div className='relative'>
            <Image
              src='/landing-pages/discount/exclusive-event-1.jpg'
              alt='exclusive-event'
              width={700}
              height={500}
            ></Image>
            <div className='absolute bottom-0 w-full p-10'>
              <p className='mb-1  uppercase text-white opacity-80'>march, 5 </p>
              <h4 className='text-xl font-semibold text-white'>
                Closeplay: Music of the Spheres - World Tour
              </h4>
            </div>
          </div>
          <div className='relative blur-sm'>
            <Image
              src='/landing-pages/discount/exclusive-event-2.jpg'
              alt='exclusive-event'
              width={700}
              height={500}
            ></Image>
            <div className='absolute bottom-0  w-full p-10'>
              <p className='mb-1  uppercase text-white opacity-80'>march, 5 </p>
              <h4 className='text-xl font-semibold text-white'>
                Closeplay: Music of the Spheres - World Tour
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveOfferSlider;
