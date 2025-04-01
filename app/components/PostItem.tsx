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
    <li
      className='mt-4 text-md text-gray-800 dark:text-white/90 transition-colors'
      key={id}
    >
      <Link
        className='text-gray-800 hover:text-gray-600 dark:text-white/90 dark:hover:text-white transition-colors'
        href={`/posts/${id}`}
      >
        {title}
      </Link>
      <br />
      <p className='text-xs mt-1 flex items-center text-gray-600 dark:text-white/70 transition-colors'>
        <CalendarIcon width={10} height={10} />
        &nbsp;{formattedDate}
      </p>
    </li>
  );
};
