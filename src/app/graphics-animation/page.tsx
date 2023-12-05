import NewsLetter from '@/components/NewsLetter';
import Testimonial from '@/components/Testimonial';
import WhyDxg from '@/components/home/WhyDxg';
import { GraphicsAnimationSection } from '@/components/Sections/GraphicsAnimationSection';

export default function GraphicsAnimation() {
  return (
    <div className='bg-black'>
      <GraphicsAnimationSection />
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
            In the dynamic world of events, captivating visuals can make a
            profound impact. At DXG, our Graphics and Animation services are
            designed to bring your event's narrative to life. Our skilled
            graphic designers and animators specialize in creating custom,
            high-quality visual content that resonates with your audience and
            leaves a lasting impression. Whether sophisticated 3D animations,
            engaging motion graphics, impactful stage backdrops, or stunning
            visual effects, our creations are tailored to complement your
            event's theme and amplify its message. We understand that each
            element of graphic design plays a crucial role in storytelling, and
            we're committed to ensuring that your visuals look spectacular and
            communicate your message effectively.
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
