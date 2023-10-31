import formatDate from "@/lib/formatDate";
import Link from "next/link";
import { CalendarIcon } from '@radix-ui/react-icons';

type Props = {
  post: BlogPost;
}

export const PostItem = ({ post }: Props) => {
  const {id, title, date } = post;
  const formattedDate = formatDate(date);
  return (
    <li className="mt-4 text-2xl text-black/80 dark:text-white/90" key={id}>
      <Link 
        className="underline text-black/80 hover:text-black/70 dark:text-white/90 dark:hover:text-white"
        href={`/posts/${id}`}
      >
        {title}
      </Link>
      <br />
      <p className="text-sm mt-1 flex items-center text-black/80 dark:text-white/90">
        <CalendarIcon width={15} height={15}/>
        &nbsp;{formattedDate}
      </p>
    </li>
  )
}
