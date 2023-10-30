import Image from 'next/image'

export const ProfilePicture = () => {
  return (
    <Image
      className='border-4 border-slate-600 dark:border-slate-400 drop-shadow-xl shadow-black rounded-full mx-auto mt-8'
      width={200}
      height={200}
      src="/images/edna-mode.png"
      alt="Profile pic"
      priority={true}
    />
  )
}
