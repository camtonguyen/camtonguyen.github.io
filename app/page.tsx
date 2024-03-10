import { Posts } from './components/Posts';

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <section className="mx-auto text-center max-w-2xl">
        <h1 className="mb-2 mt-12 text-slate-900 text-3xl text-center dark:text-white">
          👋 Hello & Welcome&nbsp;
          <span className="whitespace-nowrap">to my Blog!</span>
        </h1>
        <p className="text-xl text-slate-500 dark:text-slate-300">
          Hey there! I&apos;m here to share my stuff, sometimes make you laugh,
          and maybe inspire you a little. So stick around, grab a snack, sit
          back, and have a blast while we learn!
        </p>
      </section>
      <Posts />
    </main>
  );
}
