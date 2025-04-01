'use client';
import {
  GitHubLogoIcon,
  EnvelopeClosedIcon,
  LinkedInLogoIcon,
  ExternalLinkIcon,
} from '@radix-ui/react-icons';

export function SocialList() {
  const socialLinks = [
    {
      href: 'https://github.com/camtonguyen',
      icon: GitHubLogoIcon,
      label: 'GitHub',
    },
    {
      href: 'https://www.linkedin.com/in/camtonguyen',
      icon: LinkedInLogoIcon,
      label: 'LinkedIn',
    },
    {
      href: 'mailto:nguyenthicamto@gmail.com',
      icon: EnvelopeClosedIcon,
      label: 'Email',
    },
    {
      href: 'https://designtocode.xyz',
      icon: ExternalLinkIcon,
      label: 'Buy themes',
    },
  ];

  return (
    <div className='flex justify-between gap-x-2'>
      <div className='text-xl font-bold opacity-20 flex items-center uppercase mr-[auto]'>
        Links:
      </div>
      <ul className='grid grid-cols-4 gap-2'>
        {socialLinks.map((link) => (
          <li key={link.href} className='relative group'>
            <a
              href={link.href}
              target='_blank'
              className='bg-zinc-100 dark:bg-zinc-900 border group border-zinc-200 dark:border-zinc-800 rounded-xl p-3 flex items-center justify-center hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors'
            >
              <span className='absolute w-[min-content] left-0 -top-4 origin-right flex max-sm:group-hover:hidden opacity-0 translate-y-5 group-hover:translate-y-0 group-hover:opacity-100 items-center justify-center dark:bg-white bg-zinc-900 dark:text-zinc-900 text-zinc-100 transition-all duration-500 ease-in-out font-bold rounded-xl px-2 text-xs whitespace-nowrap z-20'>
                {link.label}
              </span>
              <link.icon className='w-6 h-6 text-zinc-900 dark:text-zinc-100' />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
