import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserNavbar from "../../components/userNavbar/UserNavbar";
import { Footer } from "../../containers";
import "./kiddies.css";
import { useNavigate } from "react-router-dom";
import SingleBook from "../../components/singleBook/SingleBook";
import { fetchKiddiesBooks } from "../../Actions";
import Pagination from "../../components/pagination/Pagination";

let PageSize = 30;

const Kiddies = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("Discover");
  const [currentPage, setCurrentPage] = useState(1);

  const { kiddiesBooks } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchKiddiesBooks());
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
    return kiddiesBooks.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, kiddiesBooks]);

  return (
    <>
      <UserNavbar />
      <div className="kiddies-container">
        <ul className="nav-discover">
          <li className={activeTab === "Discover" ? "active" : ""} onClick={handleDiscover}>
            Discover
          </li>
          <li className={activeTab === "Genre" ? "active" : ""} onClick={handleGenre}>
            Genre
          </li>
        </ul>

        <SingleBook datas={currentTableData} searchBar="" title="Educational & Kiddies Books" />
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={kiddiesBooks.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
      <Footer />
    </>
  );
};

export default Kiddies;
