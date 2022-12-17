import React from 'react'
import "./css/subscription.css"

const Subscription = () => {
  return (
    <div className='subscription-container'>
      <p className='subscription-title'>Profile/ Subscription Packages</p>
      <hr />
      <h3 className='subscription-status'>You're yet to Subscribe</h3>
      {/* <h3>You're subscribed to {{Auth::user()->role}} Plan</h3> */}

      <div className="card">
          <p className='card-title'>Lone Ranger Monthly</p>
          <hr />
          <p className='card-top-text'>Great reading plan for individuals</p>
          <p className='card-middle-text'>Access to a vast repository of books, Sync reading accross all devices, Get the latest book releases, One (1) Number of Devices</p>
          <h3 className='card-bottom-text'>N1,000/ 1 Month</h3>
          <a href="/home/subscription" className='select-btn'>Select</a>
      </div>


      <div className="card">
          <p className='card-title'>Lone Ranger Quartely</p>
          <hr />
          <p className='card-top-text'>Great reading plan for individuals</p>
          <p className='card-middle-text'>Access to a vast repository of books, Sync reading accross all devices, Get the latest book releases, One (1) Number of Devices</p>
          <h3 className='card-bottom-text'>N2,500/ 3 Months</h3>
          <a href="/home/subscription" className='select-btn'>Select</a>
      </div>

      <div className="card">
          <p className='card-title'>Lone Ranger Biannual</p>
          <hr />
          <p className='card-top-text'>Great reading plan for individuals</p>
          <p className='card-middle-text'>Access to a vast repository of books, Sync reading accross all devices, Get the latest book releases, One (1) Number of Devices</p>
          <h3 className='card-bottom-text'>N5,500/ 6 Months</h3>
          <a href="/home/subscription" className='select-btn'>Select</a>
      </div>

      <div className="card">
          <p className='card-title'>Lone Ranger Annual</p>
          <hr />
          <p className='card-top-text'>Great reading plan for individuals</p>
          <p className='card-middle-text'>Access to a vast repository of books, Sync reading accross all devices, Get the latest book releases, One (1) Number of Devices</p>
          <h3 className='card-bottom-text'>N11,200/ 12 Months</h3>
          <a href="/home/subscription" className='select-btn'>Select</a>
      </div>

    </div>
  )
}

export default Subscription