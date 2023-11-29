import React from 'react';

export default function MaxWidthWrapper({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      // className={cn(
      //   'mx-auto w-full max-w-screen-xl px-2.5 md:px-20',
      //   className
      // )}
      className='container px-2.5 md:px-20'
    >
      {children}
    </div>
  );
}
