interface HeaderTextProps {
  preText?: string;
  coloredText: string;
  postText?: string;
  variant?: 'section' | 'caps';
}
export const HeaderTextStyle: React.FC<HeaderTextProps> = ({
  preText,
  coloredText,
  postText,
  variant = 'section',
}) => {
  if (variant === 'section')
    return (
      <h1 className='text-center text-2xl font-bold text-white md:text-4xl'>
        {preText}{' '}
        <span className='border-b border-b-brand text-brand'>
          {coloredText}
        </span>{' '}
        {postText}
      </h1>
    );
  return (
    <h1 className='text-center text-4xl font-bold uppercase text-white md:text-6xl'>
      {preText} <span className='uppercase text-brand'>{coloredText}</span>{' '}
      {postText}
    </h1>
  );
};
