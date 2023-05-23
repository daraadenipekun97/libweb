import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from "react-redux";
import "./reader.css"
import { useLocation } from "react-router-dom";
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'








const Reader = () => {

    const location = useLocation();
    const dispatch = useDispatch();

    const { allSongs } = useSelector((state) => state.getAll);


    const [audioList, setAudioList] = useState([])

    useEffect(() => {
      const createSongPlaylist = () => {
        let songData = [];
        allSongs.map((allSong) => {
          let option = { name: allSong.name, singer: allSong.author, cover: allSong.image, musicSrc:allSong.song };
          songData.push(option);
        });
  
        setAudioList(songData);
      };
  
      allSongs.length !== 0 && createSongPlaylist();
    }, [allSongs]);



    //test songs  data 
    const audioLists = [
      {
        name: 'Despacito',
        singer: 'Luis Fonsi',
        cover:
          'http://res.cloudinary.com/alick/image/upload/v1502689731/Despacito_uvolhp.jpg',
        musicSrc:
          'http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3',
        // support async fetch music src. eg.
        // musicSrc: async () => {
        //   return await fetch('/api')
        // },
      },
      {
        name: 'Dorost Nemisham',
        singer: 'Sirvan Khosravi',
        cover:
          'https://res.cloudinary.com/ehsanahmadi/image/upload/v1573758778/Sirvan-Khosravi-Dorost-Nemisham_glicks.jpg',
        musicSrc:
          'https://res.cloudinary.com/ehsanahmadi/video/upload/v1573550770/Sirvan-Khosravi-Dorost-Nemisham-128_kb8urq.mp3',
      }
    ]



    
    
    
  return (
    <div className='wrapper'>
        {/* <iframe className='frame' src={`https://reada.mylibribooks.com/#${location.state.id}`} scrolling="yes"   allowFullScreen={true} webkitallowfullscreen="true" mozallowfullscreen="true"></iframe> */}
        <iframe className='frame' src={`https://libreader.vercel.app/#${location.state.id}`} scrolling="yes"   allowFullScreen={true} webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>

        <ReactJkMusicPlayer 
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
      
      />
    </div>
  )
}

export default Reader