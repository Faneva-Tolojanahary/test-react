import React from "react";

const Pagination = ({ postsPerPage, totalPosts, currentPage, setCurrentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber, event) => {
    event.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <nav>
        <ul className="flex space-x-5">
          {pageNumbers.map((item) => (
            <li key={item} onClick={(e) => paginate(item, e)} className="cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
