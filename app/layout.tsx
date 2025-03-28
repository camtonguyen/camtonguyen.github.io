import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { ProfilePicture } from './components/ProfilePicture';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'brain dumps & bright ideas',
  description:
    'My collection of random fascinations, from code to stuff. Short guides for the curious but easily distracted.',
  icons: {
    icon: '/images/icon.png', // references /public/icon.png
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-black text-white`}>
        <div className='wrapper flex-1 h-[95%] my-0 mx-auto w-full'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
