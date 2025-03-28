import formatDate from '@/lib/formatDate';
import Link from 'next/link';
import { CalendarIcon } from '@radix-ui/react-icons';

type Props = {
  post: BlogPost;
};

export const PostItem = ({ post }: Props) => {
  const { id, title, date } = post;
  const formattedDate = formatDate(date);
  return (
    <li className='mt-4 text-md text-zinc-400 dark:text-white/90' key={id}>
      <Link
        className='text-zinc-400 hover:text-zinc-300 dark:text-white/90 dark:hover:text-white'
        href={`/posts/${id}`}
      >
        {title}
      </Link>
      <br />
      <p className='text-xs mt-1 flex items-center text-zinc-700 dark:text-white/90'>
        <CalendarIcon width={10} height={10} />
        &nbsp;{formattedDate}
      </p>
    </li>
  );
};
