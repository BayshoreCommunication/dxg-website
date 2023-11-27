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
    name: 'John Doe',
    title: 'CEO',
    image: '/testimonial/client-1.png',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.',
  },
  {
    id: 2,
    name: 'Jane Doe',
    title: 'CTO',
    image: '/testimonial/client-2.png',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.',
  },
  {
    id: 3,
    name: 'John Smith',
    title: 'CFO',
    image: '/testimonial/client-3.png',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.',
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
    image: '/service/product-management.png',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.',
  },
  {
    id: 2,
    heading: 'Audio;Visual Technology',
    title: 'Audio Visual Technology',
    image: '/service/audio-visual.png',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.',
  },
  {
    id: 3,
    heading: 'Event;Platform Service',
    title: 'Event Platform Service',
    image: '/service/event-platform.png',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.',
  },
  {
    id: 4,
    heading: 'Event;Platform Service',
    title: 'Event Experience Design',
    image: '/service/event-experience.png',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.',
  },
  {
    id: 5,
    heading: 'Graphics;And Animation',
    title: 'Graphics And Animation',
    image: '/service/graphics.png',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.',
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
