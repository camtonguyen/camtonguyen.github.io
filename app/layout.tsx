import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Footer } from './components/Footer';
import ThemeSwitcher from './components/ThemeSwitcher';
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
    <html lang='en' className='dark'>
      <body
        className={`${inter.className} bg-white dark:bg-black text-black dark:text-white`}
      >
        <main className='wrapper flex-1 overflow-x-hidden my-0 mx-auto w-full'>
          {children}
        </main>
        <ThemeSwitcher />
        <Footer />
      </body>
    </html>
  );
}
