import Image from 'next/image';

interface Tool {
  name: string;
  icon: string;
}

export function ToolStack() {
  const list: Tool[] = [
    {
      name: 'Visual Studio Code',
      icon: '/images/vscode.png',
    },
    {
      name: 'Terminal',
      icon: '/images/terminal.png',
    },
    {
      name: 'Figma',
      icon: '/images/figma.png',
    },
    {
      name: 'Postgres',
      icon: '/images/postgres.png',
    },
    {
      name: 'Chrome',
      icon: '/images/chrome.png',
    },
    {
      name: 'Insomnia',
      icon: '/images/insomnia.png',
    },
    {
      name: 'Claude',
      icon: '/images/claude.png',
    },
  ];

  return (
    <div className='relative w-full mx-auto max-w-md md:max-w-lg'>
      <div className='columns-3 gap-3'>
        <div className='mb-3 flex flex-col gap-2 opacity-20'>
          <p className='text-3xl font-bold leading-none'>#</p>
          <p className='text-3xl font-bold leading-none'>TOOL</p>
          <p className='text-3xl font-bold leading-none'>STACK</p>
        </div>
        {list.map((tool, index) => (
          <div key={tool.name} className='mb-3 break-inside-avoid'>
            <ToolItem icon={tool.icon} name={tool.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

function ToolItem({ icon, name }: Tool) {
  return (
    <div className='rounded-2xl bg-zinc-800 p-4 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center'>
      <div className='mb-2 flex items-center justify-center'>
        <Image
          src={icon}
          alt={name}
          width='40'
          height='40'
          style={{ width: '40px', height: '40px' }}
        />
      </div>
    </div>
  );
}
