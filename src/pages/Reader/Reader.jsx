import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./reader.css";
import { useLocation } from "react-router-dom";
// import ReactJkMusicPlayer from 'react-jinke-music-player'
// import 'react-jinke-music-player/assets/index.css'
// import { fetchSongs } from '../../Actions';

// import TimeMe from 'timeme.js';
import { hideFacebookIcon, restoreHideFacebookIcon, updateReadingTime } from "../../Actions";

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
    dispatch(hideFacebookIcon());
    // TimeMe.initialize({
    //   currentPageName: "reader-page", // current page
    //   idleTimeoutInSeconds: 60 // seconds
    // });

    //  TimeMe.startTimer();

    // setInterval(function(){
    //   setTimeSpentOnPage(TimeMe.getTimeOnCurrentPageInSeconds())
    // }, 25);

    let isActive = true;
    let startTime;
    let totalTime = 0;

    // function to start tracking time
    function startTrackingTime() {
      isActive = true;
      startTime = Date.now();
      trackTime();
    }

    // function to stop tracking time
    function stopTrackingTime() {
      isActive = false;
      totalTime += Date.now() - startTime;
    }

    // function to track time
    function trackTime() {
      if (isActive) {
        totalTime += Date.now() - startTime;
        startTime = Date.now();
      }
    }

    // start tracking time on page load
    startTrackingTime();

    // track time when user switches tabs
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "hidden") {
        stopTrackingTime();
      } else {
        startTrackingTime();
      }
    });

    // track time when user minimizes window
    window.addEventListener("blur", function () {
      // stopTrackingTime();
      // let stringTime = (totalTime / 1000).toString()
      // console.log(typeof stringTime);
    });

    window.addEventListener("focus", function () {
      startTrackingTime();
    });

    // get total time spent on page
    window.setInterval(function () {
      trackTime();
      // setTimeSpentOnPage(totalTime / 1000);
    }, 25);

    return () => {
      // TimeMe.stopTimer('reader-page'); // Stop the timer when the component unmounts
      // let timeSpentOnPage = TimeMe.getTimeOnCurrentPageInSeconds();
      // console.log('time spent on page in reader ' + totalTime / 1000 + ' Seconds');
      stopTrackingTime();

      dispatch(
        updateReadingTime({
          total_seconds: parseInt(totalTime / 1000),
          book_id: location.state.bookId,
        })
      );
      dispatch(restoreHideFacebookIcon());
      // TimeMe.resetRecordedPageTime('reader-page')
    };
  }, []);

  // const handleTimeme = () => {
  //   TimeMe.stopTimer('reader-page'); // Stop the timer when the component unmounts

  //      let timeSpentOnPage = TimeMe.getTimeOnCurrentPageInSeconds();
  //      console.log('time spent on page ' + timeSpentOnPage);

  // }

  return (
    <div className="wrapper">
      <iframe
        className="frame"
        src={`https://reada.mylibribooks.com/#${location.state.id}`}
        scrolling="yes"
        allowFullScreen={true}
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
      ></iframe>
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
      {/* <div>{timeSpentOnPage}</div> */}
    </div>
  );
};

export default Reader;
