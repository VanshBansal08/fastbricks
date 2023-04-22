import React from 'react'
import './Banner.css'
const Banner = () => {
  return (
    <div className="banner">
        <div className="col active">
            <img src="/img/logo-fb.png" alt="" />
            <h1>Fastbricks</h1>
        </div>
        <div className="col col-a">
            <img src="/img/logo-service.png" className='service' alt="" />
            <h1>Services</h1>
        </div>
        <div className="col col-a">
            <img src="/img/rentals_1.png" alt="" />
            <h1>Rentals</h1>
        </div>
    </div>
  )
}

export default Banner