'use client';
import { useState, useEffect } from 'react';
import '@/style/custom.css';
import { cn } from '@/lib/utils';

interface Number {
  value: number;
  className: string;
}
const NumberAnimation = ({ value, className }: Number) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => (prevCount < value ? prevCount + 1 : prevCount));
    }, 50);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [value]);

  return <h1 className={cn('font-bold text-brand', className)}>{count}+</h1>;
};

export default NumberAnimation;
