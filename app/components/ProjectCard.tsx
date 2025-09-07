'use client';

import AutoScroll from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback } from 'react';

interface ProjectCardProps {
  title: string;
  bgColor?: string;
  textColor?: string;
}

export function ProjectCard({
  title,
  bgColor = 'bg-zinc-100/80 dark:bg-zinc-800',
  textColor = 'text-zinc-600 dark:text-white',
}: ProjectCardProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      skipSnaps: false,
      slidesToScroll: 1,
      containScroll: 'trimSnaps',
    },
    [AutoScroll({ delay: 8000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const slidesData = [
    {
      id: '1',
      img: '/images/designtocode-site.webp',
      alt: 'Slide 1',
      url: 'https://designtocode.xyz',
      techstack: 'Next.js, Tailwind CSS, TypeScript, Prisma, PostgreSQL',
    },
    {
      id: '2',
      img: '/images/controla-site.webp',
      alt: 'Slide 2',
      url: 'https://controla.com.vn',
      techstack: 'PHP, Laravel, MySQL, Pug.js, SCSS, JavaScript',
    },
    {
      id: '3',
      img: '/images/aiblog-site.webp',
      alt: 'Slide 3',
      url: 'https://strapi-cms-frontend-mauve.vercel.app',
      techstack: 'React Router, Tailwind CSS, TypeScript, GraphQL, Strapi',
    },
  ];
  return (
    <div className={`${bgColor} rounded-2xl p-4 relative overflow-hidden`}>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white/20' />
      <div className='flex items-center justify-between mb-5'>
        {title && (
          <h3 className={`${textColor} text-xl font-bold uppercase`}>
            {title}
          </h3>
        )}
        {/* Navigation Arrows */}
        <div className='flex gap-2'>
          <button
            onClick={scrollPrev}
            className='bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 xl:hover:border-zinc-400 dark:xl:hover:border-zinc-300 cursor-pointer rounded-full p-2 text-center'
            aria-label='Previous slide'
          >
            <ChevronLeftIcon className='w-5 h-5' />
          </button>
          <button
            onClick={scrollNext}
            className='bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 xl:hover:border-zinc-400 dark:xl:hover:border-zinc-300 cursor-pointer rounded-full p-2 text-center'
            aria-label='Next slide'
          >
            <ChevronRightIcon className='w-5 h-5' />
          </button>
        </div>
      </div>
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex'>
          {slidesData.map((slide) => (
            <div key={slide.id} className='flex-none w-full'>
              <div className='rounded-lg overflow-hidden'>
                <Link
                  href={slide.url || 'javascript:void(0)'}
                  title={slide.alt}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='w-full h-auto rounded-lg overflow-hidden block relative'
                >
                  <Image
                    src={slide.img}
                    alt={slide.alt}
                    width={300}
                    height={300}
                    className='w-full h-auto rounded-lg'
                    priority
                  />
                  <div className='absolute bottom-0 left-0 right-0 px-2 py-4 flex items-center justify-center flex-wrap gap-x-2 gap-y-1'>
                    {slide.techstack &&
                      slide.techstack.split(',').map((tech, index) => (
                        <span
                          key={index}
                          className='bg-zinc-50 shadow-sm dark:bg-zinc-950 border border-zinc-200 cursor-pointer rounded-2xl px-4 py-1 text-[10px] text-center'
                        >
                          {tech}
                        </span>
                      ))}
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
