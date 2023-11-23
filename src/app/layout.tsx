import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import TailwindIndicator from '@/components/TailwindIndicator';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='h-full'>
      <body
        className={cn('relative h-full font-sans antialiased', inter.className)}
      >
        <Navbar />
        <main className='relative flex min-h-screen flex-col'>
          <div className='flex-1 flex-grow'>{children}</div>
        </main>

        <TailwindIndicator />
      </body>
    </html>
  );
}
