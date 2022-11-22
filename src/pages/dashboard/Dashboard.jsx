import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import UserNavbar from '../../components/userNavbar/UserNavbar'
import Preloader from "../../components/preloader/Preloader";
import SingleBook from "../../components/singleBook/SingleBook";
import "./dashboard.css";
import { fetchAllTrendingBooks } from "../../Actions";
import { Footer } from "../../containers";



const Dashboard = () => {

    const dispatch = useDispatch();
    const { trendingBooks } = useSelector((state) =>state.books);


    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 2000);

        
        dispatch(fetchAllTrendingBooks())
      }, []);


      
      

  return (
    <>
    {
      loading ? <Preloader /> : (
        <>
        <UserNavbar />
        <div className="book-container">
          <SingleBook datas = {trendingBooks} searchBar = {false} title = "Trending Books" />
        </div>
        <Footer/>
        </>
      )

    }
    </>
  )
}

export default Dashboard