import HeroSection from '@/components/LandingPages/ClientSuccessStory/HeroSection';
import CallToAction from '@/components/LandingPages/Shared/CallToAction';
import Testimonial from '@/components/LandingPages/Shared/Testimonial';
import NewsLetter from '@/components/NewsLetter';

const page = () => {
  return (
    <div>
      {/* My Events Components */}
      <HeroSection />
      <CallToAction />
      <Testimonial />
      <NewsLetter />
    </div>
  );
};

export default page;
