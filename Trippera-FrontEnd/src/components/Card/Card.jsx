/* eslint-disable no-unused-vars */
import React from 'react'
import './Card.css'
import CardImage from '../../images/katie-zaferes.png'
import Star from '../../images/star.png'

function Card() {
  return (
    <div className='card'>
      <img className='card-image' src={CardImage} alt='Card Image' />
      <div className='card-info'>
        <img src={Star} alt='Star' />
        <span>5.0</span>
        <span>(6) •</span>
        <span>USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p>From $136 / Person</p>
    </div>
  )
}

export default Card