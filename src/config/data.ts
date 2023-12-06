import { StaticImageData } from 'next/image';
import Service1 from '../../public/service/service-1.png';
import Service2 from '../../public/service/service-2.png';
import Service3 from '../../public/service/service-3.png';
import Service4 from '../../public/service/service-4.png';
import Service5 from '../../public/service/service-5.png';
import Service6 from '../../public/service/service-6.png';

export const TESTIMONIAL_DATA = [
  {
    id: 1,
    name: 'Albert',
    title: 'CEO',
    image: '/testimonial/client-1.png',
    quote: `Working with DXG was an absolute game-changer for our event. Their team's expertise in audiovisuals and event production is unparalleled. The immersive experiences they crafted, coupled with innovative technology, elevated our event to new heights. DXG's attention to detail and commitment to measurable results make them our go-to partner for impactful experiences.`,
  },
  {
    id: 2,
    name: 'Smith',
    title: 'CTO',
    image: '/testimonial/client-2.png',
    quote: `DXG exceeded our expectations in every aspect. Their Triple E Xperience™ framework truly transformed our event. Engaging elements, seamless networking opportunities, and thought-provoking content showcased their dedication to attendee satisfaction. DXG's adaptability in handling virtual and hybrid formats ensures they remain the top choice for any event production needs.`,
  },
  {
    id: 3,
    name: 'Randy',
    title: 'CFO',
    image: '/testimonial/client-3.png',
    quote: `DXG's services are a masterpiece in event production. From concept to execution, their team's passion and professionalism shine. The immersive experiences and cutting-edge technology they brought to our event left a lasting impression on attendees. DXG is not just a service provider; they are partners in creating unforgettable moments.`,
  },
];

export const BlogData = [
  {
    image: 'https://picsum.photos/797/547',
    date: 1700973637000,
    feature: "10 YEAR's COMBINED",
    title: 'We won against criminal',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores porro blanditiis earum veniam quia non rerum quasi! Ipsum, iure vitae.',
    link: 'https://youtube.com',
  },
  {
    image: 'https://picsum.photos/797/547',
    date: 1700973637000,
    feature: "10 YEAR's COMBINED",
    title: 'We won against criminal',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores porro blanditiis earum veniam quia non rerum quasi! Ipsum, iure vitae.',
    link: 'https://youtube.com',
  },
  {
    image: 'https://picsum.photos/797/547',
    date: 1700973637000,
    feature: "10 YEAR's COMBINED",
    title: 'We won against criminal',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores porro blanditiis earum veniam quia non rerum quasi! Ipsum, iure vitae.',
    link: 'https://youtube.com',
  },
];

export const SERVICE_DATA = [
  {
    id: 1,
    heading: 'Production;Management',
    title: 'Production Management',
    image: '/service/dxg-agency-production-management.png',
    excerpt: `DXG excels in comprehensive production management, overseeing every aspect of your event's execution. From meticulous planning to seamless coordination on-site or virtually, our experienced team ensures that your event runs flawlessly, leaving you free to focus on the content and experience.
`,
  },
  {
    id: 2,
    heading: 'Audio;Visual Technology',
    title: 'Audio Visual Technology',
    image: '/service/dxg-agency-audiovisual-technology.png',
    excerpt: `Harnessing the latest in audiovisual technology, DXG elevates your event's sensory experience. Our expert technicians and producers bring cutting-edge solutions to the forefront, ensuring immersive visuals, crystal-clear sound, and seamless technical execution for both in-person and virtual events.
`,
  },
  {
    id: 3,
    heading: 'Event;Platform Services',
    title: 'Event Platform Services',
    image: '/service/dxg-agency-event-platform-service.png',
    excerpt: `DXG specializes in crafting dynamic event platforms tailored to your needs. Whether it's a virtual space, a hybrid platform, or a customized digital environment, we design and optimize platforms to enhance engagement, foster networking, and create a seamless digital extension of your event.
`,
  },
  {
    id: 4,
    heading: 'Event;Experience Design',
    title: 'Event Experience Design',
    image: '/service/dxg-agency-event-experience-design.png',
    excerpt: `At the core of DXG's offerings is event experience design. We work closely with you to understand your objectives and craft immersive experiences that resonate with your audience. From interactive elements to spatial design, our focus is on creating events that leave a lasting impact on attendees.`,
  },
  {
    id: 5,
    heading: 'Graphics &;Animation',
    title: 'Graphics & Animation',
    image: '/service/dxg-agency-graphics-and-animation.png',
    excerpt: `DXG brings visuals to life with captivating graphics and animations. Our creative team combines artistic flair with technical expertise to deliver stunning visual elements that enhance presentations, engage audiences, and contribute to the overall aesthetic appeal of your event.`,
  },
];

interface ServicesData {
  id: number;
  image: StaticImageData;
  caption: string;
  captionPosition: 'top' | 'bottom';
  url: string;
}
export const SERVICES_PAGE_DATA: ServicesData[] = [
  {
    id: 0,
    image: Service1,
    caption: 'PRODUCTION MANAGEMENT',
    captionPosition: 'top',
    url: '/production-management',
  },
  {
    id: 1,
    image: Service2,
    caption: 'AUDIOVISUAL TECHNOLOGY',
    captionPosition: 'top',
    url: '/audiovisual-technology',
  },

  {
    id: 2,
    image: Service3,
    captionPosition: 'top',
    caption: 'Virtual & Hybrid Events',
    url: '/virtual-hybrid-events',
  },
  {
    id: 3,
    image: Service4,
    captionPosition: 'bottom',
    caption: 'EVENT EXPERIENCE DESIGN',
    url: '/event-experience-design',
  },
  {
    id: 5,
    image: Service5,
    captionPosition: 'bottom',
    caption: 'GRAPHICS & ANIMATION',
    url: '/graphics-animation',
  },
  {
    id: 5,
    captionPosition: 'bottom',
    image: Service6,
    caption: 'VIDEO EDITING & PRODUCTION',
    url: '/video-production-photography',
  },
];

export const OurMethods = [
  {
    index: 1,
    title: 'OUR PROCESS',
    icon: 'repeat' as const,
    description:
      'With the average experience of our team members being ten-plus years in the event space, DXG is a sought-after resource by event planners, event production companies, and event platforms.',
    image: '/why-dxg/process.png',
  },
  {
    index: 2,
    title: 'OUR SERVICE',
    icon: 'happyFace' as const,
    description:
      'With the average experience of our team members being ten-plus years in the event space, DXG is a sought-after resource by event planners, event production companies, and event platforms.',
    image: '/why-dxg/service.png',
  },
  {
    index: 3,
    title: 'OUR MISSION',
    icon: 'group' as const,
    description:
      'With the average experience of our team members being ten-plus years in the event space, DXG is a sought-after resource by event planners, event production companies, and event platforms.',
    image: '/why-dxg/mission.png',
  },
  {
    index: 4,
    title: 'OUR EXPERIENCE',
    icon: 'mechanics' as const,
    description:
      'With the average experience of our team members being ten-plus years in the event space, DXG is a sought-after resource by event planners, event production companies, and event platforms.',
    image: '/why-dxg/experience.png',
  },
];

export const RECENT_BLOG_POST = [
  {
    id: 0,
    date: 1700973637000,
    title:
      'Challenges Event Planners Have Working With In-House AV Companies: 10 Biggest Problems You Might Face',
    image: 'https://picsum.photos/523/430',
    description: '<p></p>',
    tag: ['Read More'],
  },
  {
    id: 1,
    date: 1700973637000,
    title: 'Microsoft Event Planning',
    image: 'https://picsum.photos/523/430',
    description:
      'Demo Digital Xperience Group (DXG), a pioneering division of WLJ Consulting, is a premier partner in transforming events into unforgettable experiences. With our roots firmly planted in the event hospitality industry. We pride ourselves on elevating the digital and production quality of in-person, virtual, and hybrid events.',
    tag: ['design', 'research'],
  },
  {
    id: 2,
    date: 1700973637000,
    title: 'Microsoft Event Planning',
    image: 'https://picsum.photos/523/430',
    description:
      'Demo Digital Xperience Group (DXG), a pioneering division of WLJ Consulting, is a premier partner in transforming events into unforgettable experiences. With our roots firmly planted in the event hospitality industry. We pride ourselves on elevating the digital and production quality of in-person, virtual, and hybrid events.',
    tag: ['design', 'research'],
  },
  {
    id: 3,
    date: 1700973637000,
    title: 'Microsoft Event Planning',
    image: 'https://picsum.photos/523/430',
    description:
      'Demo Digital Xperience Group (DXG), a pioneering division of WLJ Consulting, is a premier partner in transforming events into unforgettable experiences. With our roots firmly planted in the event hospitality industry. We pride ourselves on elevating the digital and production quality of in-person, virtual, and hybrid events.',
    tag: ['design', 'research'],
  },
];

export const SPECIAL_OFFER = [
  {
    id: 1,
    title: 'Create a beautiful event platform services',
    date: 1700973637000,
    image: 'https://picsum.photos/523/430',
    description:
      'Demo Digital Xperience Group (DXG), a pioneering division of WLJ Consulting, is a premier partner in transforming events into unforgettable experiences. With our roots firmly planted in the event hospitality industry. We pride ourselves on elevating the digital and production quality of in-person, virtual, and hybrid events. Demo Digital Xperience Group (DXG), a pioneering division of WLJ Consulting, is a premier partner in transforming events into unforgettable experiences. With our roots firmly planted in the event hospitality industry. We pride ourselves on.',
    tag: ['design', 'research'],
  },
];

export const MULTIPLE_SERVICE = [
  {
    id: 0,
    title: 'Create a beautiful website for any device.',
    image: 'https://picsum.photos/523/430',
    description:
      'Demo Digital Xperience Group (DXG), a pioneering division of WLJ Consulting, is a premier partner in transforming events into unforgettable experiences. With our roots firmly planted in the event hospitality industry. We pride ourselves on elevating the digital and production quality of in-person, virtual, and hybrid events. Demo Digital Xperience Group (DXG), a pioneering division of WLJ Consulting, is a premier partner in transforming events into unforgettable experiences. With our roots firmly planted in the event hospitality industry. We pride ourselves on.',
  },
  {
    id: 1,
    title: 'Create a beautiful website for any device.',
    image: 'https://picsum.photos/523/430',
    description:
      'Demo Digital Xperience Group (DXG), a pioneering division of WLJ Consulting, is a premier partner in transforming events into unforgettable experiences. With our roots firmly planted in the event hospitality industry. We pride ourselves on elevating the digital and production quality of in-person, virtual, and hybrid events. Demo Digital Xperience Group (DXG), a pioneering division of WLJ Consulting, is a premier partner in transforming events into unforgettable experiences. With our roots firmly planted in the event hospitality industry. We pride ourselves on.',
  },
  {
    id: 2,
    title: 'Create a beautiful website for any device.',
    image: 'https://picsum.photos/523/430',
    description:
      'Demo Digital Xperience Group (DXG), a pioneering division of WLJ Consulting, is a premier partner in transforming events into unforgettable experiences. With our roots firmly planted in the event hospitality industry. We pride ourselves on elevating the digital and production quality of in-person, virtual, and hybrid events. Demo Digital Xperience Group (DXG), a pioneering division of WLJ Consulting, is a premier partner in transforming events into unforgettable experiences. With our roots firmly planted in the event hospitality industry. We pride ourselves on.',
  },
];

export const exploreDXG = [
  {
    id: 1,
    title: 'Production',
    imgUrl: '/support/production2.png',
    description:
      'With the average experience of our team members being ten-plus years in the event space, DXG is a sought-after resource by event planners, event production companies, and event platforms.',
  },
  {
    id: 2,
    title: 'Production',
    imgUrl: '/support/production2.png',
    description:
      'With the average experience of our team members being ten-plus years in the event space, DXG is a sought-after resource by event planners, event production companies, and event platforms.',
  },
  {
    id: 3,
    title: 'Production',
    imgUrl: '/support/production2.png',
    description:
      'With the average experience of our team members being ten-plus years in the event space, DXG is a sought-after resource by event planners, event production companies, and event platforms.',
  },
  {
    id: 4,
    title: 'Production',
    imgUrl: '/support/production2.png',
    description:
      'With the average experience of our team members being ten-plus years in the event space, DXG is a sought-after resource by event planners, event production companies, and event platforms.',
  },
];
export const exploreWorlds = [
  {
    id: 1,
    imgUrl: '/support/dxg-agency-event-planner.png',
    title: 'Planners',
    description: `Event planners are the architects of memorable experiences, and at DXG, we understand the intricate details that go into bringing a vision to life. Our support for planners goes beyond execution – we collaborate intimately, providing insights, creative solutions, and leveraging our extensive experience to ensure your event exceeds expectations. From conceptualization to execution, DXG is your dedicated partner in turning ideas into impactful realities.
`,
  },
  {
    id: 2,
    imgUrl: '/support/dxg-agency-event-production.png',
    title: 'Production',
    description: `The heart of any successful event lies in its production, and DXG stands as the beating pulse that brings events to life. With our core teams having a rich background in live events, broadcast, and entertainment, we understand the nuances of flawless production. From audiovisual wizardry to seamless execution, DXG is here to elevate the production quality of your event, making it an unforgettable spectacle for attendees.
`,
  },
  {
    id: 3,
    imgUrl: '/support/dxg-agency-event-production-2.png',
    title: 'Platforms',
    description: `In the digital age, events span beyond physical spaces, extending into virtual and hybrid platforms. DXG recognizes the significance of a robust and engaging platform. Whether it's a virtual event space or a hybrid platform connecting in-person and remote attendees, we have the expertise to navigate and optimize these environments. DXG ensures that the platform serves as an immersive stage for your event, fostering connection and interaction irrespective of the format.
`,
  },
];
