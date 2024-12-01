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

  const posts = getSortedPostsData();

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

  const posts = getSortedPostsData();

  if (!posts.find((post) => post.id === postId)) notFound();

  const { title, date, contentHtml } = await getPostData(postId);

  const publishedDate = formatDate(date);

  return (
    <main className='px-6 prose prose-xl prose-slate dark:prose-invert mx-auto'>
      <h1 className='text-3xl mt-4 mb-0'>{title}</h1>
      <p className='mt-2 text-sm'>{publishedDate}</p>
      <article>
        <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        <p>
          <Link href='/'>← Back to home</Link>
        </p>
      </article>
    </main>
  );
}
