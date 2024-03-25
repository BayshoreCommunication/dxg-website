import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import TailwindIndicator from '@/components/TailwindIndicator';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SITECONFIG } from '@/config/site';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: SITECONFIG.siteMetadata.title,
  description: SITECONFIG.siteMetadata.description,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='h-full scroll-smooth bg-black'>
      <body
        className={cn('relative h-full font-sans antialiased overflow-x-hidden', inter.className)}
      >
        <Navbar />
        <main className='relative flex min-h-screen flex-col'>
          <div className='flex-1 flex-grow bg-black'>{children}</div>
        </main>
        <Footer />
        <TailwindIndicator />
      </body>
    </html>
  );
}
