import React from 'react'
import "./reader.css"
import { useLocation } from "react-router-dom";


const Reader = () => {

    const location = useLocation();
  return (
    <div className='wrapper'>
        <iframe className='frame' src={`http://reada.mylibribooks.com/#${location.state.id}`} scrolling="yes"   allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
    </div>
  )
}

export default Reader