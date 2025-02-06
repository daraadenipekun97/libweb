import React, {useState, useEffect} from 'react'
import UserNavbar from "../../components/userNavbar/UserNavbar";
import { Footer } from "../../containers";
import "./interactions.css";
import SingleBook from "../../components/singleBook/SingleBook";

import { useParams } from "react-router-dom";
import { 
    fetchAllTrendingBooks, 
    fetchPopularAuthors, 
    fetchNewReleases,
    fetchKiddiesBooks,
    fetchClassicBooks,
    fetchAllGenre,

} from "../../Actions";
import { useSelector, useDispatch } from 'react-redux';
import SingleAuthor from '../../components/singleAuthor/SingleAuthor';
import GenreTab from '../../components/allTabs/GenreTab';


const Interactions = () => {
    const params = useParams();
    const dispatch = useDispatch();

    const { trendingBooks, popularAuthors, newReleases, classicBooks, kiddiesBooks, allGenre } = useSelector((state) => state.books);



    useEffect(() => {
        switch (params.id) {
            case "trending":
                dispatch(fetchAllTrendingBooks());
                break;
            case "authors":
                dispatch(fetchPopularAuthors());
                break;
            case "educational":
                dispatch(fetchKiddiesBooks());
                break;
            case "latest":
                dispatch(fetchNewReleases());
                break;
            case "classic":
                dispatch(fetchClassicBooks());
                break;
            case "genre":
                dispatch(fetchAllGenre())
                break;
            default:
                console.log("No matching case for:", params.id);
        }
    }, [params.id, dispatch]);


     // Return Component Based on params.id
     const renderComponent = () => {
        switch (params.id) {
            case "trending":
                return <SingleBook datas={trendingBooks} searchBar=""  title="Trending Books" />;
            case "authors":
                return <SingleAuthor datas={popularAuthors} title="Popular Authors" seeAllText={false} />;
            case "educational":
                return <SingleBook datas={kiddiesBooks} searchBar=""  title="Educational Books" />;
            case "latest":
                return <SingleBook datas={newReleases} searchBar=""  title="Latest Books" />;
            case "classic":
                return <SingleBook datas={classicBooks} searchBar=""  title="Classic Books" />;
            case "genre":
                return  <GenreTab allGenre={allGenre} />
            default:
                return <></>;
        }
    };

  return (
    <>
    <UserNavbar />
        <div className="interaction-container">
          {renderComponent()}
        </div>
    <Footer />
    </>
  )
}

export default Interactions