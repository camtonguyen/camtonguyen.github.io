export const Footer = () => {
  return (
    <footer className='p-2 mt-auto bottom-0 w-full text-slate-400'>
      <div className='mx-auto text-center pt-2'>
        <p className='text-xs'>
          Copyright &copy; {new Date().getFullYear()} - Created by @camto
        </p>
      </div>
    </footer>
  );
};
