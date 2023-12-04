'use client';
import { SITECONFIG } from '@/config/site';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CapsuleButton } from './CapsuleButton';
import { NavBarMobile } from './NavBarMobile';
import { Button } from './ui/button';
import { navVariants } from '@/lib/motion';
import { MotionDiv } from './Motion';

const links = [
  { name: 'Home', href: '#' },
  { name: 'Triple E Xperience', href: '#' },
  {
    name: 'Who We Are',
    href: '#',
  },
  { name: 'Services', href: '#' },
  { name: 'Our Blog', href: '#' },
  { name: 'Contact Us', href: '#' },
];

export default function Navbar() {
  const currentRoute = usePathname();
  console.log('Current Route is => ', currentRoute);
  return (
    <header className='sticky inset-x-0 top-0 z-50 h-20 bg-header'>
      <div className='flex h-full items-center justify-between px-2.5 md:px-28 '>
        <Link href='/'>
          <Image width={70} height={20} src={'/dxgLogo.svg'} alt='DXG Logo' />
        </Link>
        <div className='hidden lg:block'>
          {SITECONFIG.mainNav.map((item, index) => {
            return (
              <Link key={index} href={item.slug}>
                <Button
                  className={`font-semibold text-white hover:text-brand active:text-brand ${
                    currentRoute === item.slug
                      ? 'font-extrabold text-brand underline'
                      : ''
                  }`}
                  variant='link'
                >
                  {item.title}
                </Button>
              </Link>
            );
          })}
          <CapsuleButton
            title='Request for Proposal'
            as='link'
            href='/contact-us'
          />
        </div>
        {/* Mobile view */}
        <NavBarMobile />
      </div>
    </header>
  );
}

// 'use client';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useState } from 'react';
// import { CapsuleButton } from './CapsuleButton';
// import { Button } from './ui/button';

// const links = [
//   { name: 'Home', href: '#' },
//   { name: 'Triple E Xperience', href: '#' },
//   {
//     name: 'Who We Are',
//     child: [
//       { name: 'Our Concern', href: '#' },
//       { name: 'Our Commitment', href: '#' },
//     ],
//   },
//   { name: 'Services', href: '#' },
//   { name: 'Our Blog', href: '#' },
//   { name: 'Contact Us', href: '#' },
// ];
// export default function Navbar() {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const dropDownShownHandler = () => {
//     setShowDropdown(true);
//   };
//   const dropDownDisableHandler = () => {
//     setShowDropdown(false);
//   };
//   return (
//     <header className='sticky inset-x-0 top-0 z-50 h-20 bg-header'>
//       <div className='container flex h-full items-center justify-between '>
//         <div className=''>
//           <Image width={70} height={20} src={'/dxgLogo.svg'} alt='DXG Logo' />
//         </div>
//         <div className='hidden md:block'>
//           {links.map((item, index) => {
//             if (item.href) {
//               return (
//                 <Link key={index} href={item.href}>
//                   <Button
//                     className='font-semibold text-white hover:text-brand active:text-brand'
//                     variant='link'
//                   >
//                     {item.name}
//                   </Button>
//                 </Link>
//               );
//             } else
//               return (
//                 <div
//                   key={index}
//                   className={`relative  inline`}
//                   onMouseEnter={dropDownShownHandler}
//                   onMouseLeave={dropDownDisableHandler}
//                 >
//                   <Button
//                     className='font-semibold text-white hover:text-brand active:text-brand'
//                     variant='link'
//                   >
//                     {item.name} {'>'}
//                   </Button>
//                   <div
//                     className={`absolute right-0 top-5 h-10 w-full  ${
//                       showDropdown ? 'block' : 'hidden'
//                     }`}
//                   >
//                     {item.child &&
//                       item.child.map((childItem, childIndex) => (
//                         <Link key={childIndex} href={childItem.href}>
//                           <Button
//                             variant={'link'}
//                             className='block py-1 font-semibold text-white hover:text-brand active:text-brand'
//                           >
//                             {childItem.name}
//                           </Button>
//                         </Link>
//                       ))}
//                   </div>
//                 </div>
//               );
//           })}
//           <CapsuleButton title='Request for Proposal' as='link' href='#' />
//         </div>
//       </div>
//     </header>
//   );
// }
