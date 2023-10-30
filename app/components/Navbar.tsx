"use client"
import Link from 'next/link'
import { 
  HomeIcon, 
  GitHubLogoIcon, 
  LinkedInLogoIcon,
  ExternalLinkIcon, 
} from '@radix-ui/react-icons'
import ThemeSwitcher from './ThemeSwitcher'

export const Navbar = () => {
  return (
    <nav className='bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10'>
      <div className="prose prose-xl mx-auto flex justify-between">
        <div className="grid place-content-center mb-2 md:mb-0">
          <Link href="/" className="no-undeline flex items-center opacity-80 hover:opacity-100">
            <HomeIcon color="white" width="25" height="25"/>
          </Link>
        </div>
        <div className="flex flex-row justify-center sm-justify-evenly align-middle gap-4">
          <Link href="https://github.com/camtonguyen" className="no-undeline opacity-80 hover:opacity-100">
            <GitHubLogoIcon color="white" width="25" height="25"/>
          </Link>
          <Link href="https://www.linkedin.com/in/camtonguyen/" className="no-undeline opacity-80 hover:opacity-100">
            <LinkedInLogoIcon color="white" width="25" height="25"/>
          </Link>
          <Link href="https://designtocode.xyz/" className="no-undeline opacity-80 hover:opacity-100">
            <ExternalLinkIcon color="white" width="25" height="25"/>
          </Link>
          <ThemeSwitcher/>
        </div>
      </div>
    </nav>
  )
}
