"use client"
import { useState } from "react";
import { PostItem } from "./PostItem";
import { Pagination } from "./Pagination";

export function PostsList({ posts }: any) {
  const [inputText, setInputText] = useState('');
  const [postList, setPostList] = useState(posts);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const handleChange = (event: any) => {
    const { value } = event.target;
    setInputText(value);
    const filtered = posts.filter((post: BlogPost) =>
      post.title.toLowerCase().includes(value.toLowerCase())
    );

    setPostList(filtered);
    setCurrentPage(1); // Reset to the first page when performing a new search.
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postList.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <input
        className="w-full p-2 mb-4 indent-2 rounded-lg border border-slate-300 focus:border-blue-400 text-slate-600" 
        type="text" 
        value={inputText} 
        onChange={handleChange}
        placeholder="Search by title..."
      />
      <ul className="w-full">
        {
          currentPosts.map((post: BlogPost) => (<PostItem post={post} key={post.id} />))
        }
      </ul>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={postList.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
}