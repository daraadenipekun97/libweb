import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserNavbar from "../../components/userNavbar/UserNavbar";
import { Footer } from "../../containers";
import "./newReleases.css";
import { useNavigate } from "react-router-dom";
import SingleBook from "../../components/singleBook/SingleBook";
import { fetchNewReleases } from "../../Actions";
import Pagination from "../../components/pagination/Pagination";
import { fetchProfile } from "../../Actions";
import ModalRedirect from "../../components/modal/ModalRedirect";
import {  useLocation } from "react-router-dom";


let PageSize = 30;

const NewReleases = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const [activeTab, setActiveTab] = useState("Discover");
  const [currentPage, setCurrentPage] = useState(1);

  const { newReleases } = useSelector((state) => state.books);

  const {
    profileData,
  } = useSelector((state) => state.profile);
  const [showRedirectModal, setShowRedirectModal] = useState(false)

  useEffect(() => {
    dispatch(fetchNewReleases());
    dispatch(fetchProfile());

  }, [dispatch]);

  useEffect(() => {
    if(profileData){

      if(profileData.dob === null || profileData.country_id === null && (location.pathname !== "/home/profile") ){
        setShowRedirectModal(true)
      }else {

      }

    }else{

    }

  },[profileData])

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
      <ModalRedirect  showRedirectModal={showRedirectModal}  />

    </>
  );
};

export default NewReleases;
