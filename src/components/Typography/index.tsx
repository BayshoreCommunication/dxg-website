import React from 'react';

interface HeadingProps {
  text: string;
}

export const H1: React.FC<HeadingProps> = ({ text }) => {
  return (
    <h1 className='mb-6 text-4xl font-bold leading-10 text-white'>
      <span className='border-b border-b-brand text-brand'>
        {text.split(' ').at(0)}
      </span>{' '}
      {text
        .split(' ')
        .filter((_, index) => index !== 0)
        .join(' ')}
    </h1>
  );
};

export const H2: React.FC<HeadingProps> = ({ text }) => {
  return (
    <h2 className='text-3xl font-semibold leading-10 text-brand'>{text}</h2>
  );
};

export const H3: React.FC<HeadingProps> = ({ text }) => {
  return (
    <h3 className='text-2xl font-semibold leading-10 text-brand'>{text}</h3>
  );
};

export const H4: React.FC<HeadingProps> = ({ text }) => {
  return (
    <h4 className='text-xl font-semibold leading-10 text-brand'>{text}</h4>
  );
};

export const H5: React.FC<HeadingProps> = ({ text }) => {
  return (
    <h5 className='text-lg font-semibold leading-10 text-brand'>{text}</h5>
  );
};

export const H6: React.FC<HeadingProps> = ({ text }) => {
  return (
    <h6 className='text-base font-semibold leading-10 text-brand'>{text}</h6>
  );
};

export const P: React.FC<HeadingProps> = ({ text }) => {
  return (
    <p className='mb-3 text-justify text-base font-medium leading-[27px] tracking-[0.18px] text-white'>
      {text}
    </p>
  );
};
