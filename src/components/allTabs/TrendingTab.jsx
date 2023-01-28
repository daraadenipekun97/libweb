import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import SingleBook from "../../components/singleBook/SingleBook";
import { fetchAllTrendingBooks } from "../../Actions";
import Pagination from "../pagination/Pagination";

let PageSize = 30;

const TrendingTab = () => {
  const dispatch = useDispatch();

  const { trendingBooks } = useSelector((state) => state.books);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAllTrendingBooks());
  }, [dispatch]);

  const currentTableData = useMemo(() => {
    debugger;
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return trendingBooks.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, trendingBooks]);

  return (
    <>
      <SingleBook datas={currentTableData} searchBar="" title="Trending Books" />
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={trendingBooks.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
};

export default TrendingTab;
