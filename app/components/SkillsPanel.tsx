export function SkillsPanel() {
  const skills = {
    Frontend: [
      'React',
      'Next.js',
      'Angular',
      'Vanilla JS',
      'GSAP',
      'SCSS',
      'TailwindCSS',
      'TypeScript',
      '...',
    ],
    'Backend & APIs': [
      'Node.js',
      'Express.js',
      'Headless CMS',
      'RESTful API',
      'GraphQL',
      'tRPC',
    ],
    'DB & Services': ['PostgreSQL', 'Supabase', 'Prisma ORM', 'MongoDB'],
    'Currrently Learning': ['Python'],
  };

  return (
    <div className='bg-zinc-100/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 backdrop-blur-sm'>
      <div className='space-y-6'>
        <div className='flex gap-x-2 lg:gap-x-0 lg:flex-col opacity-20 justify-start pt-2'>
          <p className='text-4xl font-bold'>{`{}`}</p>
          <p className='text-4xl font-bold'>TECH</p>
          <p className='text-4xl font-bold'>STACK</p>
        </div>
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className='text-zinc-600 dark:text-zinc-400 text-base mb-2.5'>
              {category}:
            </h3>
            <div className='flex flex-wrap gap-1.5'>
              {items.map((skill) => (
                <div
                  key={skill}
                  className='bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 xl:hover:border-zinc-400 dark:xl:hover:border-zinc-300 cursor-pointer rounded-2xl px-4 py-1 text-xs text-center'
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
