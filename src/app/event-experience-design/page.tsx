import NewsLetter from '@/components/NewsLetter';
import Testimonial from '@/components/Testimonial';
import WhyDxg from '@/components/home/WhyDxg';
import { EventExperienceDesignBannerSection } from '@/components/Sections/EventExperienceDesignBannerSection';

export default function AudioVisualTechnology() {
  return (
    <div className='bg-black'>
      <EventExperienceDesignBannerSection />
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
            At DXG, we believe that the heart of every memorable event lies in
            its experience design. Our Event Experience Design service is
            dedicated to creating immersive and impactful environments that
            resonate with your audience. We blend creativity with strategic
            planning to craft experiences that are not only visually stunning
            but also emotionally engaging and in line with your brand's message.
            Our team of experienced designers and planners work closely with you
            to understand your vision and audience, ensuring every aspect of the
            event, from the decor to the lighting and sound, is meticulously
            tailored to create the desired atmosphere and mood. Whether it's a
            corporate gala, a product launch, or a thematic exhibition, we bring
            your story to life in a way that captivates, inspires, and leaves a
            lasting impression on every attendee.
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
