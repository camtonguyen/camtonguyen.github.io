import Image from 'next/image';

export const ProfilePicture = () => {
  return (
    <Image
      className='rounded-full'
      width={48}
      height={48}
      style={{ height: '48px', width: '48px' }}
      src='/images/avataaars.png'
      alt='Profile pic'
      priority={true}
    />
  );
};
