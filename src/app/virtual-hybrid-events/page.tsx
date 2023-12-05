import NewsLetter from '@/components/NewsLetter';
import Testimonial from '@/components/Testimonial';
import WhyDxg from '@/components/home/WhyDxg';
import {VirtualHybridEventsSection} from '@/components/Sections/VirtualHybridEventsSection';


export default function GraphicsAnimation() {
  return (
    <div className='bg-black'>
      <VirtualHybridEventsSection />
      <div className="flex flex-wrap md:px-28">
        <div className="w-1/2 p-4">
          <p style={{color:'white', paddingTop:'4rem', paddingBottom:'4rem', }}>Demo Digital Xperience Group (DXG), a pioneering division of WLJ Consulting, is a premier partner in transforming events into unforgettable experiences. With our roots firmly planted in the event hospitality industry. We pride ourselves on elevating the digital and production quality of in-person, virtual, and hybrid events. Demo Digital Xperience Group (DXG), a pioneering division of WLJ Consulting, is a premier partner in transforming events into unforgettable experiences. With our roots firmly planted in the event hospitality industry. We pride ourselves onDemo Digital Xperience Group (DXG), a pioneering division of WLJ Consulting, is a premier partner in transforming events into unforgettable experiences. With our roots firmly planted in the event hospitality industry. We pride ourselves on elevating the digital and production quality of in-person, virtual, and hybrid events. Demo Digital Xperience Group (DXG), a pioneering division of WLJ Consulting, is a premier partner in transforming events into unforgettable experiences. With our roots firmly planted in the event hospitality industry. We pride ourselves on . .</p>
        </div>
        <div className="w-1/2 p-4">
        <NewsLetter />
        </div>
      </div>      
      <Testimonial />
      <WhyDxg />
    </div>
  );
}
