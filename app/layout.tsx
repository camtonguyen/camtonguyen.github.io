import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { ProfilePicture } from './components/ProfilePicture';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'tips & stuff for lazy folks',
  description:
    'Dive into my lazy world. Uncover the tips, tricks, knowledge, all in one place.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} grid grid-rows-[1fr_auto] h-[100vh] m-0 dark:bg-black`}
      >
        <div className="wrapper flex-1 h-[95%] my-0 mx-auto w-full">
          <Navbar />
          <ProfilePicture />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
