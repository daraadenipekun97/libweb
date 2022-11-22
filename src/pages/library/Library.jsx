import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import UserNavbar from '../../components/userNavbar/UserNavbar'
import Preloader from "../../components/preloader/Preloader";
import SingleBook from "../../components/singleBook/SingleBook"
import "./library.css"
import { Footer } from "../../containers";

const Library = () => {

    const dispatch = useDispatch();
    const {  } = useSelector((state) =>state.books);


    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 2000);

      }, []);

  return (
    
    <>
    {
      loading ? <Preloader /> : (
        <>
        <UserNavbar />
        <div className="book-container">
            
        </div>  
        <Footer />  
        </>
      )

    }
    </>
  )
}

export default Library