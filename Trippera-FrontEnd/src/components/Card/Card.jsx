/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Card.css';
import Star from '../../images/star.png';

function Card({ card }) { // Destructure the card prop
  console.log(card); // Log card to see the passed values

  // Function to display the card status
  let cardStatus;
  if (card.openSpots === 0) {
    cardStatus = <div className='card-badge'>SOLD OUT</div>;
  } else if (card.location === 'Online') {
    cardStatus = <div className='card-badge'>ONLINE</div>;
  }

  return (
    <div className='card'>
      {cardStatus}
      {/* Image for Card */}
      <img className='card-image' src={card.coverImg} alt='Image of ....' />
      <div className='card-info'>
        <img className='card-star' src={Star} alt='Star' />
        {/* Passing rating for product */}
        <span>{card.stats.rating}</span>
        {/* Review # for Card */}
        <span className='color'>({card.stats.reviewCount}) •</span>
        {/* Country of Origin */}
        <span className='color'>{card.location}</span>
      </div>
      {/* Image description */}
      <h2>{card.title}</h2>
      {/* Pricing for card object */}
      <p><span className='bold'>From ${card.price}</span> / Person</p>
    </div>
  );
}

export default Card;

