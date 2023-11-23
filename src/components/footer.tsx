// import bgFooter from '../public/bgFooter.png';
import MaxWidthWrapper from './MaxWidthWrapper';

export default function Footer() {
  return (
    <div className='sticky inset-x-0 top-0 z-50 h-16 bg-slate-600'>
      <footer
        className='relative bg-slate-600'
        style={{
          // backgroundImage: `url(${bgFooter.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <MaxWidthWrapper>
          <div className=''>
            <div className='flex h-16 items-center'>
              {/* TODO: Mobile nav */}
              <div className='ml-4 flex lg:ml-0'></div>
            </div>
          </div>
        </MaxWidthWrapper>
      </footer>
    </div>
  );
}
