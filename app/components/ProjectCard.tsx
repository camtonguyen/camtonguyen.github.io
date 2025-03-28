interface ProjectCardProps {
  title: string;
  bgColor?: string;
  textColor?: string;
}

export function ProjectCard({
  title,
  bgColor = 'bg-zinc-800',
  textColor = 'text-white',
}: ProjectCardProps) {
  return (
    <div className={`${bgColor} rounded-2xl p-4 relative overflow-hidden`}>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-white/20' />

      <div className='relative z-10'>
        <h3 className={`${textColor} text-2xl font-bold`}>{title}</h3>
      </div>
    </div>
  );
}
