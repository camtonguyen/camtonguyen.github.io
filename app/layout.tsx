import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from './context/LanguageContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cam To - Portfolio',
  description: 'Frontend Developer Portfolio',
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
        className={`${inter.className} bg-white text-black min-h-screen`}
      >
        <main className='wrapper flex-1 overflow-x-hidden my-0 mx-auto w-full'>
          <LanguageProvider>{children}</LanguageProvider>
        </main>
      </body>
    </html>
  );
}
