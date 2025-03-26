import Image from 'next/image';

export const ProfilePicture = () => {
  return (
    <Image
      className="drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
      width={200}
      height={200}
      style={{ height: '200px', width: '200px' }}
      src="/images/avataaars.png"
      alt="Profile pic"
      priority={true}
    />
  );
};
