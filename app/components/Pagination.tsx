
type Props = {
  postsPerPage: number;
  totalPosts: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
}

export const Pagination = ({ postsPerPage, totalPosts, currentPage, paginate }: Props) => {
  if (totalPosts <= postsPerPage) {
    // Don't render pagination if there are 10 or fewer posts.
    return null;
  }
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex justify-center space-x-2 mt-8">
        {pageNumbers.map((number) => (
          <li key={number} className="relative">
            <button
              onClick={() => paginate(number)}
              className={`${
                currentPage === number
                  ? 'bg-slate-500 text-white'
                  : 'bg-white text-slate-500'
              } px-3 py-1 rounded-md cursor-pointer`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}