import React, { useState, useEffect, use } from "react";
import axios from "axios";
import Pagination from "./components/Pagination";
import Card from "./components/Card";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [postClick, setPostClick] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [filtre, setFiltre] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const fetchPosts = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilter = (valeur) => {
    setFiltre(valeur);
    setPostClick(null);
  };

  const openModal = (item) => {
    setIsOpen(true);
    setPostClick(item);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const postsFilter = filtre === null ? posts : posts.filter((item) => item.completed === filtre);

  const lastPostsIndex = currentPage * postsPerPage;
  const firstPostsIndex = lastPostsIndex - postsPerPage;
  const currentPosts = postsFilter.slice(firstPostsIndex, lastPostsIndex);

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1 className="text-center font-medium text-2xl">Test exemple</h1>
      <div className="m-10 flex space-x-3">
        <input type="text" className="border border-gray-300 p-2" onChange={handleChange} />
        <div className="flex space-x-4">
          <button
            onClick={() => handleFilter(true)}
            className="rounded bg-green-300 p-2 text-sm rounded-full cursor-pointer  font-medium"
          >
            Complété
          </button>
          <button
            onClick={() => handleFilter(false)}
            className="rounded bg-red-400 p-2 text-sm rounded-full cursor-pointer font-medium"
          >
            Non complété
          </button>
        </div>
      </div>
      <div className="m-10">
        {currentPosts
          .filter((val) => val.title.includes(searchTerm))
          .map((val) => (
            <p
              key={val.id}
              onClick={() => openModal(val)}
              className="flex items-center justify-between border border-gray-300 p-3 my-2 hover:bg-slate-200 rounded-lg"
            >
              {val.title}

              {val.completed ? (
                <i className=" fa-solid fa-check text-green-500 text-lg"></i>
              ) : (
                <i className=" fa-solid fa-times text-red-500  text-lg"></i>
              )}
            </p>
          ))}
        <Pagination
          currentPage={currentPage}
          totalPosts={posts.length}
          setCurrentPage={setCurrentPage}
          postsPerPage={postsPerPage}
        />
        <Card isOpen={isOpen} onClose={closeModal} post={postClick} />
      </div>
    </div>
  );
};

export default App;
