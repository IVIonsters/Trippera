/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Card.css';
import Star from '../../images/star.png';

function Card(props) {
  console.log(props); // Log props to see the passed values

  // Function to display the card status
  let cardStatus;
  if (props.openSpots === 0) {
    cardStatus = <div className='card-badge'>SOLD OUT</div>;
  } else if (props.country === 'Online') {
    cardStatus = <div className='card-badge'>ONLINE</div>;
  }

  return (
    <div className='card'>
      {cardStatus}
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