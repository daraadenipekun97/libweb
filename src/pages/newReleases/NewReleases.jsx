import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserNavbar from "../../components/userNavbar/UserNavbar";
import { Footer } from "../../containers";
import "./newReleases.css";
import { useNavigate } from "react-router-dom";
import SingleBook from "../../components/singleBook/SingleBook";
import { fetchNewReleases } from "../../Actions";
import Pagination from "../../components/pagination/Pagination";

let PageSize = 30;

const NewReleases = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("Discover");
  const [currentPage, setCurrentPage] = useState(1);

  const { newReleases } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchNewReleases());
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
    return newReleases.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, newReleases]);

  return (
    <>
      <UserNavbar />
      <div className="new-release-container">
        <ul className="nav-discover">
          <li className={activeTab === "Discover" ? "active" : ""} onClick={handleDiscover}>
            Discover
          </li>
          <li className={activeTab === "Genre" ? "active" : ""} onClick={handleGenre}>
            Genre
          </li>
        </ul>

        <SingleBook datas={currentTableData} searchBar="" title="New Releases Books" />
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={newReleases.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
      <Footer />
    </>
  );
};

export default NewReleases;
