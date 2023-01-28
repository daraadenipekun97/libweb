import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllAuthors } from "../../Actions";
import SingleAuthor from "../../components/singleAuthor/SingleAuthor";
import UserNavbar from "../../components/userNavbar/UserNavbar";
import "./allAuthors.css";
import Pagination from "../../components/pagination/Pagination";

let PageSize = 30;

const AllAuthors = () => {
  const dispatch = useDispatch();
  const { allAuthors } = useSelector((state) => state.books);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchAllAuthors());
  }, [dispatch]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return allAuthors.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, allAuthors]);

  return (
    <>
      <UserNavbar />
      <div className="all-authors-container">
        <SingleAuthor datas={currentTableData} title="Favourite Authors" seeAllText={false} />
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={allAuthors.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </>
  );
};

export default AllAuthors;
