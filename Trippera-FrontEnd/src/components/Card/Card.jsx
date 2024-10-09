/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Card.css';
import Star from '../../images/star.png';

function Card(props) {
  console.log(props);/* this allows us to see the props we passed in the console */
  return (
    <div className='card'>
      {props.openSpots === 0 && <div className='card-badge'>SOLD OUT</div>}
      {/* Image for Card */}
      <img className='card-image' src={props.img} alt='Image of ....' />
      <div className='card-info'>
        <img className='card-star' src={Star} alt='Star' />
        {/* Passing rating for product */}
        <span>{props.rating}</span>
        {/* Review # for Card */}
        <span className='color'>({props.reviews}) •</span>
        {/* Country of Origin */}
        <span className='color'>{props.country}</span>
      </div>
      {/* Image description */}
      <h2>{props.title}</h2>
      {/* Pricing for card object */}
      <p><span className='bold'>From ${props.price}</span> / Person</p>
    </div>
  );
}

export default Card;