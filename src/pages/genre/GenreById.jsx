import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import UserNavbar from "../../components/userNavbar/UserNavbar";
import { Footer } from "../../containers";
import "./genreById.css";
import { AiFillLeftCircle } from "react-icons/ai";
import SingleBook from "../../components/singleBook/SingleBook";
import { fetchBookByGenre } from "../../Actions";
import SingleGenrePagination from "../../components/pagination/SingleGenrePagination";

let PageSize = 15;

const GenreById = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { booksByGenre } = useSelector((state) => state.books);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchBookByGenre(params.id));
  }, [dispatch]);

  const handleBack = () => {
    navigate("/home/genre");
  };

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return booksByGenre.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, booksByGenre]);

  return (
    <>
      <UserNavbar />

      <div className="genre-id-container">
        <div className="genre-id-wrapper">
          <div className="backbutton" onClick={handleBack}>
            <AiFillLeftCircle size={20} color="#78787d" /> &nbsp;
            <p>Back to Genre</p>
          </div>

          <SingleBook datas={currentTableData} searchBar="" title="" />

          <SingleGenrePagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={booksByGenre.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default GenreById;
