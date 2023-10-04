import React from 'react'
import Img1 from '../assets/img-1.webp'

function Card() {
  return (
    <>
    <section>
      <div className="card-box">
        <div className="img-box">
        <img src= {Img1} alt="" className='card-img'/>
        </div>
        <div className="text-box">
          <h2>Nashik, India</h2>
          <p className='gray'>150 KM away</p>          
          <p><span className='bold-text'>Rs.5706</span> night</p>          

        </div>

      </div>
    </section>
    </>
  )
}

export default Card