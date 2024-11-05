import CallToAction from '@/components/LandingPages/MyEvent/CallToAction';
import GetInTouch from '@/components/LandingPages/MyEvent/GetInTouch';
import HeroSection from '@/components/LandingPages/MyEvent/HeroSection';
import KeyService from '@/components/LandingPages/MyEvent/KeyService';
import Services from '@/components/LandingPages/MyEvent/Services';
import Testimonial from '@/components/LandingPages/MyEvent/Testimonial';
import React from 'react';

const page = () => {
  return (
    <div>
      {/* My Events Components */}
      <HeroSection />
      <Services />
      <KeyService />
      <CallToAction />
      <Testimonial />
      <GetInTouch />
    </div>
  );
};

export default page;
