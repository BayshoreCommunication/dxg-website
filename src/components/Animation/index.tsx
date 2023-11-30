import { Children } from 'react';

// write motion div wrapper component so that we can use it in other components

import { MotionDiv } from '../Motion';
import { textVariant2, zoomIn } from '@/lib/motion';
interface MotionDivProps {
  children: React.ReactNode;
}
export const BottomToTop = ({ children }: MotionDivProps) => {
  return (
    <MotionDiv variants={textVariant2} initial='hidden' whileInView='show'>
      {children}
    </MotionDiv>
  );
};
