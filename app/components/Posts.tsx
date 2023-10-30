import { getSortedPostsData } from '@/lib/posts';
import { PostsList } from './PostsList';

export function Posts() {
  const posts = getSortedPostsData();

  return (
    <section className="mt-6 mx-auto max-w-2xl">
      <PostsList posts={posts} />
    </section>
  );
}



