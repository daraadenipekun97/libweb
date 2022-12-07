import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserNavbar from "../../components/userNavbar/UserNavbar";
import { AiFillLeftCircle } from "react-icons/ai";
import { useParams, useNavigate } from "react-router-dom";
import "./books.css"
import Tab from "../../components/tab/Tab";
import bookImg from "../../assets/images/wolesoyinka.jpg"
import { AiFillHeart, AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { Footer } from "../../containers";
import SingleBook from "../../components/singleBook/SingleBook";
import { fetchBookDetails, addBookToFav, removeBookFromFav, restoreFavouriteInitial, restoreUnfavouriteInitial  } from "../../Actions";
import Preloader from "../../components/preloader/Preloader";
import StarRating from "../../components/starRating/StarRating";
import Reader from "../../containers/Reader";

const Books = () => {

    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();
    const { bookDetails, addBookToFavouriteSuccess, addBookToFavouriteFailure , removeBookFromFavouriteSuccess, removeBookFromFavouriteFailure } = useSelector((state) => state.books);

    const [toggleHeart, setToggleHeart] = useState(false);

    useEffect(() => {
        dispatch(fetchBookDetails(params.id));
      }, [dispatch]);
    

    const handleBack = () => {
        navigate("/home/trending");
      };

      const handleRemoveFav = (id) =>{
        dispatch(removeBookFromFav(id))
        setToggleHeart(false)
      }

      const handleAddFav = (id) => {
        debugger
        dispatch(addBookToFav(id))
      }

      useEffect(() => {
        
        if(addBookToFavouriteSuccess){
            setToggleHeart(true)
        }
      
        return () => {
          dispatch(restoreFavouriteInitial())
        }
      }, [addBookToFavouriteSuccess])
      
      useEffect(() => {
        
        if(addBookToFavouriteFailure){
            setToggleHeart(false)
        }
      
        return () => {
          dispatch(restoreFavouriteInitial())
        }
      }, [addBookToFavouriteFailure])


      useEffect(() => {
        
        if(removeBookFromFavouriteSuccess){
            setToggleHeart(false)
        }
      
        return () => {
          dispatch(restoreUnfavouriteInitial())
        }
      }, [removeBookFromFavouriteSuccess])


      useEffect(() => {
        
        if(removeBookFromFavouriteFailure){
            setToggleHeart(true)
        }
      
        return () => {
          dispatch(restoreUnfavouriteInitial())
        }
      }, [removeBookFromFavouriteFailure])


      
      if (Object.keys(bookDetails).length === 0) {
        return (

            <Preloader/>
        )
      }


      const handleStartReading = (url) => {
        navigate("/home/reader", {state:{
            id: url
        }})
      }

  return (
    <>
    <UserNavbar/>
    <div className="books-container">
              <div className="backbutton" onClick={handleBack}>
                  <AiFillLeftCircle size={20} color="#78787d" /> &nbsp;
                  <p>Back to Discover</p>
              </div>


        <div className="books-container-wrapper">
            <div className="book-and-author">
                <div className="book-img">
                    <img src={bookDetails.book.image_data} alt="" />
                </div>
                <div className="book-details">
                    <h1 className="book-name">{bookDetails.book.name}</h1>
                    <p className="author-name">{bookDetails.book.author.name}</p>
                    <button className="start-reading-btn" 
                    onClick={() =>handleStartReading(bookDetails.book.epub_data)}
                    
                    >Start Reading</button>
                    {
                        toggleHeart ?   <AiFillHeart size={25} color="red" onClick={() => handleRemoveFav(bookDetails.book.id)}/> :<AiOutlineHeart size={25} color="red" onClick={() => handleAddFav(bookDetails.book.id)}/>

                    }
        
                    <StarRating/>
                    <p className="no-of-page-text">{`${bookDetails.book.pages} Pages`}</p>

                </div>
            </div>

            <div className="about-book-review">
                <Tab tabName="book" />
            </div>
            
        </div>
        
        <SingleBook datas = {bookDetails.book.author.books} searchBar = {false} title = "Author's Book"/>

    </div>
    <Footer/>
    </>
  )
}

export default Books