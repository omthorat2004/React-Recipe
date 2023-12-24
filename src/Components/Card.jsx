import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';
const Card = ({id,title,cookingTime,method}) => {
  return (
    <div key={id} className='card'>
        <h3>{title}</h3>
        <p>{cookingTime}</p>
        <div>{method.substring(0,100)}...</div>
        <Link to={`/recipe/${id}`} >Cook this</Link>
    </div>
  );
}

export default Card;
