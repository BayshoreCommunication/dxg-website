export const SITECONFIG = {
  siteMetadata: {
    title: 'Digital Xperience Group',
    description:
      'Digital Xperience Group (DXG), a pioneering division of WLJ Consulting, is a premier partner in transforming events into unforgettable experiences.',
  },
  mainNav: [
    {
      title: 'Home',
      slug: '/',
    },
    {
      title: 'Triple E Xperience',
      slug: '/triple-e-xperience',
    },
    {
      title: 'Who We Are',
      slug: '/who-we-are',
    },
    {
      title: 'Services',
      slug: '/services',
    },
    {
      title: 'Why DXG',
      slug: '/why-dxg',
    },
    {
      title: 'Contact Us',
      slug: '/contact-us',
    },
  ],
  footerNav: {
    services: [
      {
        title: 'Production Management',
        slug: '/production-management',
      },
      {
        title: 'Audio Visual Technology',
        slug: '/audiovisual-technology',
      },
      {
        title: 'Event Experience Design',
        slug: '/event-experience-design',
      },
    ],
    whyDXG: [
      {
        title: 'Our Process',
        slug: '/why-dxg',
      },
      {
        title: 'Our Services',
        slug: '/services',
      },
      {
        title: 'Our Mission',
        slug: '/why-dxg',
      },
      {
        title: 'Our Experience',
        slug: '/why-dxg',
      },
    ],
    legal: [
      {
        title: 'Privacy Policy',
        slug: '/privacy-policy',
      },
      {
        title: 'Terms of Use',
        slug: '/terms-of-use',
      },
    ],
  },
  socialLinks: [
    {
      title: 'Facebook',
      url: '',
    },
    {
      title: 'LinkedIn',
      url: '',
    },
    {
      title: 'Twitter',
      url: '',
    },
    {
      title: 'Instagram',
      url: '',
    },
  ],
  address: '2202 N. Westshore Blvd, Suite 200, Tampa, FL 33602',
  phone: '855.450.2823',
  email: 'Info@dxg.agency',
  appointmentBookingUrl:
    process.env.NEXT_PUBLIC_ZOHO_APPOINTMENT_BOOKING_URL || '',
  contact: {
    xnQsjsdp: process.env.NEXT_PUBLIC_ZOHO_CONTACT_SECRET_1 || '',
    xmIwtLD: process.env.NEXT_PUBLIC_ZOHO_CONTACT_SECRET_2 || '',
    leadCampaign: 'TGVhZHM=',
    returnUrl: process.env.NEXT_PUBLIC_ZOHO_CONTACT_RETURN_URL || '',
    leadSource: 'Online-Store',
  },
};
