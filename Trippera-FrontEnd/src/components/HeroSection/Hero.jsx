/* eslint-disable no-unused-vars */
import React from 'react'
import './Hero.css'
import HeroImage from '../../images/photo-grid.png'

function Hero() {
  return (
    <section className='hero-section'>
        <img className='hero-image' src={HeroImage} alt='Hero Image' />
        <h1 className='hero-header'>Online Experiences</h1>
        <p className='hero-text'>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
    </section>
  )
}

export default Hero