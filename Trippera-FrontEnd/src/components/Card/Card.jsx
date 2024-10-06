/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Card.css';
import Star from '../../images/star.png';

function Card(props) {
  return (
    <div className='card'>
      <img className='card-image' src={props.img} alt='Image of ....' />
      <div className='card-info'>
        <img className='card-star' src={Star} alt='Star' />
        <span>{props.rating}</span>
        <span className='color'>{props.reviews} •</span>
        <span className='color'>{props.country}</span>
      </div>
      <h2>{props.title}</h2>
      <p><span className='bold'>From {props.price}</span> / Person</p>
    </div>
  );
}

export default Card;