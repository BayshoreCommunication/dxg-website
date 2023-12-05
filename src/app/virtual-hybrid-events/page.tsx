import NewsLetter from '@/components/NewsLetter';
import Testimonial from '@/components/Testimonial';
import WhyDxg from '@/components/home/WhyDxg';
import { VirtualHybridEventsSection } from '@/components/Sections/VirtualHybridEventsSection';

export default function GraphicsAnimation() {
  return (
    <div className='bg-black'>
      <VirtualHybridEventsSection />
      <div className='flex flex-wrap md:px-28'>
        <div className='w-1/2 p-4'>
          <p
            style={{
              color: 'white',
              paddingTop: '4rem',
              paddingBottom: '4rem',
              textAlign: 'justify',
            }}
          >
            In today&apos;s digital-first world, an event&apos;s success often
            hinges on the robustness and intuitiveness of its digital platform.
            At DXG, our Event Platform Services are designed to bridge the gap
            between physical and digital event experiences. We offer a range of
            digital solutions, from live streaming to session records and
            virtual event platforms for live and on-demand viewing, ensuring
            your event easily reaches a global audience. Our platforms are
            user-friendly, highly interactive, and customizable to suit the
            specific needs of your event. Whether it&apos;s a hybrid conference,
            a virtual seminar, or an online product launch, our platforms
            facilitate seamless engagement, allowing attendees to connect,
            interact, and participate anywhere in the world. We integrate the
            latest digital technology to provide stable, secure, and scalable
            solutions, ensuring that your event is not just a broadcast but a
            fully immersive digital experience.
          </p>
        </div>
        <div className='w-1/2 p-4'>
          <NewsLetter />
        </div>
      </div>
      <Testimonial />
      <WhyDxg />
    </div>
  );
}
