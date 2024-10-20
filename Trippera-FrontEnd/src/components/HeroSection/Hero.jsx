/* eslint-disable no-unused-vars */
import React from 'react'
import './Hero.css'
import HeroImage from '../../images/photo-grid.png'

function Hero() {
  return (
    <section className='hero-section'>
      <img className='hero-image' src={HeroImage} alt='Hero Image' />
      <h1 className='hero-header'>Virtual Adventures</h1>
      <p className='hero-text'>Engage in immersive, hands-on experiences led by experts, all from the comfort of your home.</p>
    </section>
  )
}

export default Hero