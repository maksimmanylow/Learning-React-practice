import React from 'react';
import StarRating from './StarRating';

const Color = ({
  title,
  color,
  rating = 0,
  totalStars=5,
  onRemove = f => f,
  onRate = f => f
}) => (
  <section className="color">
    <h1>{title}</h1>
    <button type="submit" onClick={onRemove}>X</button>
    <div className="color" style={{ backgroundColor: color }} />
    <div>
      <StarRating starsSelected={rating} onRate={onRate} totalStars={totalStars} />
    </div>
  </section>
);

export default Color;
