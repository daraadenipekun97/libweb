import React, {useEffect, useState} from 'react'
 import { useSelector, useDispatch } from "react-redux";
import "./reader.css"
import { useLocation } from "react-router-dom";
// import ReactJkMusicPlayer from 'react-jinke-music-player'
// import 'react-jinke-music-player/assets/index.css'
// import { fetchSongs } from '../../Actions';

import TimeMe from 'timeme.js';
import { updateReadingTime } from '../../Actions';








const Reader = () => {

    const location = useLocation();
     const dispatch = useDispatch();

    // const { allSongs } = useSelector((state) => state.getAll);


    const [timeSpentOnPage, setTimeSpentOnPage] = useState("");




    // const [audioList, setAudioList] = useState([])


    // useEffect(() => {
    //   dispatch(fetchSongs());     
    // }, [dispatch])
    

    // useEffect(() => {
    //   const createSongPlaylist = () => {
    //     let songData = [];
    //     allSongs.map((allSong) => {
    //       let option = { name: allSong.name, singer: allSong.author, cover: allSong.image, musicSrc:allSong.song };
    //       songData.push(option);
    //     });
  
    //     setAudioList(songData);
    //   };
  
    //   allSongs.length !== 0 && createSongPlaylist();
    // }, [allSongs]);


    useEffect(() => {
    
      TimeMe.initialize({
        currentPageName: "reader-page", // current page
        idleTimeoutInSeconds: 60 // seconds
      });

       TimeMe.startTimer();

      // setInterval(function(){
      //   setTimeSpentOnPage(TimeMe.getTimeOnCurrentPageInSeconds())
      // }, 25);

      return () => {
        TimeMe.stopTimer('reader-page'); // Stop the timer when the component unmounts
        let timeSpentOnPage = TimeMe.getTimeOnCurrentPageInSeconds();
        console.log('time spent on page in reader ' + timeSpentOnPage.toFixed(0) + ' Seconds');
        dispatch(updateReadingTime({
          total_seconds : parseInt(timeSpentOnPage.toFixed(0)),
          book_id: location.state.bookId
        }))
        TimeMe.resetRecordedPageTime('reader-page')      
      };
    }, [])
    


    const handleTimeme = () => {
      TimeMe.stopTimer('reader-page'); // Stop the timer when the component unmounts
  
         let timeSpentOnPage = TimeMe.getTimeOnCurrentPageInSeconds();
         console.log('time spent on page ' + timeSpentOnPage);
         
    }

    
    
    
  return (
    <div className='wrapper'>
        <iframe className='frame' src={`https://reada.mylibribooks.com/#${location.state.id}`} scrolling="yes"   allowFullScreen={true} webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
        {/* <iframe className='frame' src={`https://libreader.vercel.app/#${location.state.id}`} scrolling="yes"   allowFullScreen={true} webkitallowfullscreen="true" mozallowfullscreen="true"></iframe> */}

        {/* <ReactJkMusicPlayer 
        audioLists={audioList}
        autoPlay={false}
        responsive
        glassBg
        mode='mini'
        showDownload={false}
        showLyric={false}
        showDestroy={true}
        autoHiddenCover={true}
        spaceBar={true}
      
      /> */}
      {/* <div>{timeSpentOnPage}</div>
      <button onClick={() => handleTimeme()}>TimemerBtn</button> */}
    </div>
  )
}

export default Reader