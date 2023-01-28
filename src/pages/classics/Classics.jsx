import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserNavbar from "../../components/userNavbar/UserNavbar";
import { Footer } from "../../containers";
import "./classics.css";
import { useNavigate } from "react-router-dom";
import SingleBook from "../../components/singleBook/SingleBook";
import { fetchClassicBooks } from "../../Actions";
import Pagination from "../../components/pagination/Pagination";

let PageSize = 30;

const Classics = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("Discover");
  const [currentPage, setCurrentPage] = useState(1);

  const { classicBooks } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchClassicBooks());
  }, [dispatch]);

  const handleDiscover = () => {
    navigate("/home/discover");
  };

  const handleGenre = () => {
    navigate("/home/genre");
  };

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return classicBooks.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, classicBooks]);

  return (
    <>
      <UserNavbar />
      <div className="classic-container">
        <ul className="nav-discover">
          <li className={activeTab === "Discover" ? "active" : ""} onClick={handleDiscover}>
            Discover
          </li>
          <li className={activeTab === "Genre" ? "active" : ""} onClick={handleGenre}>
            Genre
          </li>
        </ul>

        <SingleBook datas={currentTableData} searchBar="" title="  Classics Books" />
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={classicBooks.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
      <Footer />
    </>
  );
};

export default Classics;
