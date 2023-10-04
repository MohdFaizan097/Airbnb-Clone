import React from 'react'
import HeroImage from '../assets/hero-grid.png'

function Hero() {
  return (
    <>
    <main className='hero-container'>
    <img src={HeroImage} alt="" className='hero-photo'/>
    <h1 className='hero-header'>Online Experiences</h1>
    <p className='hero-text'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </main>
    
    </>
  )
}

export default Hero