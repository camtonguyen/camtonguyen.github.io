import {
  SkillsPanel,
  ProjectCard,
  ProfilePicture,
  Posts,
  CurrentTimeDisplay,
  TypingEffect,
  SocialList,
  ToolStack,
} from './components';

export default function Home() {
  return (
    <div className='min-h-screen p-4 lg:p-8 flex items-center justify-center bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors duration-300'>
      <div className='max-w-7xl w-full flex flex-col lg:grid lg:grid-cols-[1fr_minmax(600px,auto)_1fr] gap-4 lg:gap-8'>
        {/* Left Panel - Skills */}
        <div className='block max-lg:order-2'>
          <SkillsPanel />
        </div>

        {/* Center Panel - Profile Card */}
        <div className='flex flex-col max-lg:order-1 gap-4'>
          <div className='bg-zinc-100/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 backdrop-blur-sm transition-colors duration-300'>
            <div className='flex items-start gap-3 mb-4'>
              <ProfilePicture />
              <div>
                <h1 className='font-bold text-lg'>Cam To.</h1>
                <p className='text-zinc-600 dark:text-zinc-400 text-sm transition-colors duration-300'>
                  @camtonguyen
                </p>
              </div>
            </div>

            <div className='mb-4'>
              <div className='flex items-center gap-1 mb-2'>
                <p className='font-semibold'>I build</p>
                <TypingEffect
                  words={['Websites.', 'Web apps.', 'Extensions.']}
                  typingSpeed={100}
                  deletingSpeed={70}
                  pauseTime={1800}
                />
              </div>
              <p className='text-zinc-700 dark:text-zinc-300 text-sm transition-colors duration-300'>
                👋🏻 I&apos;m a frontend dev & ui / ux junkie based in HCM city -
                Vietnam.
              </p>
            </div>

            <div className='bg-zinc-200 dark:bg-zinc-950 rounded-xl p-4 my-6 font-mono text-sm transition-colors duration-300'>
              <div className='text-zinc-600 dark:text-zinc-400 mb-2 transition-colors duration-300'>
                &quot;I&apos;d flex my coding skills, but my container
                broke.&quot;
              </div>
              <div className='flex max-sm:flex-col items-end gap-1 justify-between text-xs'>
                <span className='text-green-600 dark:text-green-400 transition-colors duration-300'>
                  • Available for work
                </span>
                <CurrentTimeDisplay />
              </div>
            </div>
          </div>

          {/* Daily Blogs Section */}
          <div className='bg-zinc-100/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 backdrop-blur-sm transition-colors duration-300'>
            <h2 className='text-xl font-bold mb-4 opacity-30'>DAILY POSTS</h2>
            <Posts />
          </div>
        </div>

        {/* Right Panel - Social & Projects */}
        <div className='flex flex-col gap-4 max-lg:order-3'>
          <SocialList />

          <div className='flex lg:flex-col lg:gap-4'>
            <ProjectCard
              title='Side Projects'
              bgColor='bg-zinc-100/80 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 backdrop-blur-sm transition-colors duration-300'
              textColor='opacity-20'
            />
          </div>
          <ToolStack />
        </div>
      </div>
    </div>
  );
}
