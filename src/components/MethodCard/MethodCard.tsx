import { IconName, Icons } from '../Icons';

interface MethodCardProps {
  title: string;
  icon: IconName;
  description: string;
  image: string;
}
export const MethodCard: React.FC<MethodCardProps> = ({
  title,
  icon,
  description,
  image,
}) => {
  const titleArray = title.split(' ');
  const SelectedIcon = Icons[icon];
  return (
    <div
      className='relative h-[400px] w-[250px] overflow-hidden rounded-3xl bg-cover bg-center shadow-md'
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className='absolute inset-0 rounded-md bg-black opacity-50'></div>
      <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
        <SelectedIcon />
        <h1 className='text-center text-2xl font-bold uppercase text-white '>
          {titleArray[0]}{' '}
        </h1>
        <h1 className='outline-with-shaddow '>{titleArray[1]}</h1>
        <p className='px-2 text-center'>{description}</p>
      </div>
    </div>
  );
};
