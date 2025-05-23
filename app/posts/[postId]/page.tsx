import formatDate from '@/lib/formatDate';
import { getPostData, getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Params = Promise<{ postId: string }>;
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export async function generateStaticParams() {
  const posts = await getSortedPostsData();

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export async function generateMetadata(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const params = await props.params;
  const postId = params.postId;

  const posts = await getSortedPostsData();

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
  };
}

export default async function Post(props: {
  params: Params;
  searchParams: SearchParams;
}) {
  const params = await props.params;
  const postId = params.postId;

  const posts = await getSortedPostsData();

  if (!posts.find((post) => post.id === postId)) notFound();

  const { title, date, contentHtml } = await getPostData(postId);

  const publishedDate = formatDate(date);

  return (
    <div className='my-5 max-w-[50rem] mx-auto prose-xl shadow-md dark:bg-zinc-900/80 bg-white/80 border dark:border-zinc-800 border-zinc-200 rounded-3xl py-6 px-8 backdrop-blur-sm'>
      <h1 className='text-3xl mt-4 mb-0 text-zinc-800 dark:text-zinc-200'>
        {title}
      </h1>
      <p className='mt-2 text-sm text-zinc-500 dark:text-zinc-600'>
        {publishedDate}
      </p>
      <article>
        <section
          className='text-zinc-700 dark:text-zinc-200 text-[1.15rem]'
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
        <p className='text-sm text-right'>
          <Link
            className='text-zinc-600 hover:text-zinc-800 dark:text-zinc-300 dark:hover:text-zinc-100'
            href='/'
          >
            ← Back to home
          </Link>
        </p>
      </article>
    </div>
  );
}
