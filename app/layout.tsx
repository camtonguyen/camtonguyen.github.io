
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from './components/Navbar'
import { ProfilePicture } from './components/ProfilePicture'
import { Footer } from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Tech Tips & Stuff",
  description: 'Dive into the world of innovation and discovery with my blog. Uncover the coolest tips, masterful tricks, and the latest in tech, all in one place.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} grid grid-rows-[1fr_auto] h-[100vh] m-0 dark:bg-black`}>
        <div className="wrapper flex-1 h-[95%] my-0 mx-auto w-full">
          <Navbar/>
          <ProfilePicture />
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}
