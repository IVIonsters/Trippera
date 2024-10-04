/* eslint-disable no-unused-vars */
import React from 'react'
import './Card.css'
import CardImage from '../../images/katie-zaferes.png'
import Star from '../../images/star.png'

function Card() {
  return (
    <div className='card'>
      <img className='card-image' src={CardImage} alt='Image of ....' />
      <div className='card-info'>
        <img className='card-star' src={Star} alt='Star' />
        <span>5.0</span>
        <span className='color'>(6) •</span>
        <span className='color'>USA</span>
      </div>
      <h2>Life lessons with Katie Zaferes</h2>
      <p><span className='bold'>From $136</span> / Person</p>
    </div>
  )
}

export default Card