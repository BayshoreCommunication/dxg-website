'use client';
import { useEffect, useState } from 'react';

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const OfferCountdown: React.FC = () => {
  const targetDate = new Date('2024-12-20T17:25:00');

  const calculateTimeLeft = (): CountdownTime => {
    const difference = targetDate.getTime() - new Date().getTime();
    const timeLeft: CountdownTime = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<CountdownTime>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='flex flex-col items-center justify-center  text-white'>
      <div className='flex items-center space-x-6 rounded-xl border border-white border-opacity-20 p-10 text-center'>
        <div className='flex min-w-36 items-end justify-center gap-1 text-[#2DC6F5]'>
          <p className='text-6xl font-semibold'>{timeLeft.days}</p>
          <span className='text-lg'>Days</span>
        </div>
        <p className='text-3xl font-medium text-white opacity-60'>:</p>
        <div className='flex min-w-36 items-end justify-center gap-1 text-[#2DC6F5]'>
          <p className='text-6xl font-semibold'>{timeLeft.hours}</p>
          <span className='text-lg'>Hours</span>
        </div>
        <p className='text-3xl font-medium text-white opacity-60'>:</p>
        <div className='flex min-w-36 items-end justify-center gap-1 text-[#2DC6F5]'>
          <p className='text-6xl font-semibold'>{timeLeft.minutes}</p>
          <span className='text-lg'>Minutes</span>
        </div>
        <p className='text-3xl font-medium text-white opacity-60'>:</p>
        <div className='flex min-w-36 items-end justify-center gap-1 text-[#2DC6F5]'>
          <p className='text-6xl font-semibold'>{timeLeft.seconds}</p>
          <span className='text-lg'>Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default OfferCountdown;
