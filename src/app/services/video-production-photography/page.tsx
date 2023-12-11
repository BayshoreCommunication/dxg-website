import GetAQoute from '@/components/GetAQuote';
import Testimonial from '@/components/Testimonial';
import WhyDxg from '@/components/home/WhyDxg';
import { VideoProductionPhotographySection } from '@/components/Sections/VideoProductionPhotographySection';

export default function GraphicsAnimation() {
  return (
    <div className='bg-black'>
      <VideoProductionPhotographySection />
      <div className='flex flex-col md:flex-row md:px-28'>
        <div className='w-full md:w-1/2 p-4'>
          <p
            style={{
              color: 'white',
              paddingTop: '4rem',
              paddingBottom: '4rem',
              textAlign: 'justify',
            }}
          >
            At DXG, we specialize in turning your vision into a seamless
            audiovisual spectacle. Our production management service is the
            cornerstone of your event&apos;s success. We handle every aspect of
            production, from initial concept to final execution, with meticulous
            attention to detail. Our team of experienced professionals is
            equipped with the latest technology and industry insights to manage
            logistics, coordinate with vendors, and oversee technical
            requirements. We understand the complexities of audiovisual
            production and are dedicated to ensuring that everything runs
            smoothly. We aim to bring your event to life while providing you
            complete peace of mind. Trust us to handle the intricacies of
            production management so you can focus on what truly matters - your
            message and your audience.
          </p>
        </div>
        <div className='w-full md:w-1/2 p-4'>
          <GetAQoute />
        </div>
      </div>
      <Testimonial />
      <WhyDxg />
    </div>
  );
}
