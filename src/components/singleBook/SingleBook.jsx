import React from 'react'
import './singleBook.css'

import BookImg from "../../assets/images/wolesoyinka.jpg"


const SingleBook = () => {
  return (
    <div className="lib-book-gallery">
      <div className="lib-book-gallery-text">
        <h1>Trending Books</h1>
        <div class="growing-search">
        <div class="input">
          <input type="text" name="search" placeholder='search for a book'/>
        </div>
        <div class="submit">
          <button type="submit">
           Search
          </button>
        </div>
      </div>
      </div>
      <div className="lib-book-gallery-wrapper">
        <div className="lib-book-gallery-inner-wrapper">
            <div className="lib-gallery-box">
              <img src={BookImg} alt="" />
              <p className='lib-gallery-box-author'>Matt Damon</p>
              <h1 className='lib-gallery-box-book-name'>Testing  principles of time</h1>
            </div>
            <div className="lib-gallery-box">
              <img src={BookImg} alt="" />
              <p className='lib-gallery-box-author'>Matt Damon</p>
              <h1 className='lib-gallery-box-book-name'>Ake</h1>
            </div>
            <div className="lib-gallery-box">
              <img src={BookImg} alt="" />
              <p className='lib-gallery-box-author'>Matt Damon</p>
              <h1 className='lib-gallery-box-book-name'> design principles</h1>
            </div>
            <div className="lib-gallery-box">
              <img src={BookImg} alt="" />
              <p className='lib-gallery-box-author'>Matt Damon</p>
              <h1 className='lib-gallery-box-book-name'>Testing time</h1>
            </div>
            <div className="lib-gallery-box">
              <img src={BookImg} alt="" />
              <p className='lib-gallery-box-author'>Matt Damon</p>
              <h1 className='lib-gallery-box-book-name'>Testing</h1>
            </div>
            <div className="lib-gallery-box">
              <img src={BookImg} alt="" />
              <p className='lib-gallery-box-author'>Matt Damon</p>
              <h1 className='lib-gallery-box-book-name'> real time</h1>
            </div>
            <div className="lib-gallery-box">
              <img src={BookImg} alt="" />
              <p className='lib-gallery-box-author'>Matt Damon</p>
              <h1 className='lib-gallery-box-book-name'>Testing me</h1>
            </div>
            <div className="lib-gallery-box">
              <img src={BookImg} alt="" />
              <p className='lib-gallery-box-author'>Matt Damon</p>
              <h1 className='lib-gallery-box-book-name'> design principles in real time</h1>
            </div>
            <div className="lib-gallery-box">
              <img src={BookImg} alt="" />
              <p className='lib-gallery-box-author'>Matt Damon</p>
              <h1 className='lib-gallery-box-book-name'> product in real time</h1>
            </div>
            <div className="lib-gallery-box">
              <img src={BookImg} alt="" />
              <p className='lib-gallery-box-author'>Matt Damon</p>
              <h1 className='lib-gallery-box-book-name'>Testing product design principles in real time</h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SingleBook