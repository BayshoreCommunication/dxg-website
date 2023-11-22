import { Button } from './ui/button';

const links = [
  'Home',
  'Triple E Xperience',
  'Who We Are',
  'Services',
  'Our Blog',
  'Contact Us',
];
export default function Navbar() {
  return (
    <header className='sticky inset-x-0 top-0 z-50 h-20 bg-header'>
      <div>
        {links.map((item, index) => (
          <Button className='text-white' key={index} variant='link'>
            {item}
          </Button>
        ))}
      </div>
    </header>
  );
}
