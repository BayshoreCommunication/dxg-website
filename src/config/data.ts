import { StaticImageData } from 'next/image';
import Service1 from '../../public/service/service-1.png';
import Service2 from '../../public/service/service-2.png';
import Service4 from '../../public/service/service-4.png';
import Service5 from '../../public/service/service-5.png';
import Service6 from '../../public/service/service-6.png';

export const TESTIMONIAL_DATA = [
  {
    id: 1,
    name: 'John Doe',
    title: 'CEO',
    image: '/testimonial/client-1.png',
    quote: `Working with DXG was an absolute game-changer for our event. Their team's expertise in audiovisuals and event production is unparalleled. The immersive experiences they crafted, coupled with innovative technology, elevated our event to new heights. DXG's attention to detail and commitment to measurable results make them our go-to partner for impactful experiences.`,
  },
  {
    id: 2,
    name: 'Jane Doe',
    title: 'CTO',
    image: '/testimonial/client-2.png',
    quote: `DXG exceeded our expectations in every aspect. Their Triple E Xperience™ framework truly transformed our event. Engaging elements, seamless networking opportunities, and thought-provoking content showcased their dedication to attendee satisfaction. DXG's adaptability in handling virtual and hybrid formats ensures they remain the top choice for any event production needs.`,
  },
  {
    id: 3,
    name: 'John Smith',
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
    heading: 'Event;Production',
    title: 'Event Production',
    image: '/service/dxg-agency-project-management.png',
    excerpt: `Comprehensive event planning and execution.
Management of in-person, virtual, and hybrid events.
`,
  },
  {
    id: 2,
    heading: 'Audio;Visual Services',
    title: 'Audio Visual Services',
    image: '/service/dxg-agency-audiovisual-technology.png',
    excerpt: `Expertise in audiovisual technology.
Skilled audiovisual technical producers, directors, engineers, and technicians.
`,
  },
  {
    id: 3,
    heading: 'Immersive;Experiences',
    title: 'Immersive Experiences',
    image: '/service/dxg-agency-event-platform-service.png',
    excerpt: `Design and implementation of immersive event experiences.
Integration of captivating visuals and interactive elements.
`,
  },
  {
    id: 4,
    heading: 'Project;Management',
    title: 'Project Management',
    image: '/service/dxg-agency-event-experience-design.png',
    excerpt: `Dedicated project managers to oversee the planning and execution of events.
Content Strategy and Development:

Assistance in developing content that is valuable, relevant, and thought-provoking.
Networking Solutions:

Implementation of tools and strategies to facilitate networking among event attendees.
`,
  },
  {
    id: 5,
    heading: 'Social;Events',
    title: 'Social Events',
    image: '/service/dxg-agency-graphics-and-animation.png',
    excerpt: `Planning and execution of social events to enhance attendee interaction.
Consultation and Strategy:

Consultative services to intimately understand event objectives.
Strategic planning to connect event content with the target audience.
`,
  },
];

interface ServicesData {
  id: number;
  image: StaticImageData;
  caption: string;
  captionPosition: 'top' | 'bottom';
}
export const SERVICES_PAGE_DATA: ServicesData[] = [
  {
    id: 0,
    image: Service1,
    caption: 'PRODUCTION MANAGEMENT',
    captionPosition: 'top',
  },
  {
    id: 1,
    image: Service2,
    caption: 'AUDIOVISUAL TECHNOLOGY',
    captionPosition: 'top',
  },

  {
    id: 2,
    image: Service2,
    captionPosition: 'top',
    caption: 'EVENT PLATFORM SERVICES',
  },
  {
    id: 3,
    image: Service4,
    captionPosition: 'bottom',
    caption: 'EVENT EXPERIENCE DESIGN',
  },
  {
    id: 5,
    image: Service5,
    captionPosition: 'bottom',
    caption: 'GRAPHICS & ANIMATION',
  },
  {
    id: 5,
    captionPosition: 'bottom',
    image: Service6,
    caption: 'VIDEO EDITING & PRODUCTION',
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
    title: 'Microsoft Event Planning',
    image: 'https://picsum.photos/523/430',
    description:
      'Demo Digital Xperience Group (DXG), a pioneering division of WLJ Consulting, is a premier partner in transforming events into unforgettable experiences. With our roots firmly planted in the event hospitality industry. We pride ourselves on elevating the digital and production quality of in-person, virtual, and hybrid events.',
    tag: ['design', 'research'],
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
    id: 'world-1',
    imgUrl: '/support/dxg-agency-event-planner.png',
    title: 'Expertise and Experience',
    description:
      'DXG boasts a diverse team with extensive experience in the event hospitality industry. The average experience of team members being ten-plus years indicates a wealth of knowledge in event production',
  },
  {
    id: 'world-2',
    imgUrl: '/support/dxg-agency-event-production.png',
    title: 'Innovation and Technology',
    description: `Staying at the forefront of technology and harnessing innovative solutions showcases DXG's commitment to enhancing engagement and streamlining production processes. This is crucial in the rapidly evolving landscape of event technology.`,
  },
  {
    id: 'world-3',
    imgUrl: '/support/dxg-agency-event-production-2.png',
    title: 'Outcome-Focused Strategy',
    description: `The emphasis on delivering measurable results and turning a client's vision into a dynamic reality aligns with the goal of leaving a lasting impression on event attendees.`,
  },
];
