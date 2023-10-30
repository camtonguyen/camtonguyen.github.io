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
    <li className="mt-4 text-2xl dark:text-white/90" key={id}>
      <Link 
        className="underline hover:text-black/70 dark:hover:text-white"
        href={`/posts/${id}`}
      >
        {title}
      </Link>
      <br />
      <p className="text-sm mt-1 flex items-center">
        <CalendarIcon width={15} height={15}/>
        &nbsp;{formattedDate}
      </p>
    </li>
  )
}
