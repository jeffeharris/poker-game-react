import React from 'react';
import './Card.css';

const Card = ({ card }) => {
  const { suit, rank } = card;

  return (
    <div className="card" id={`card-id-${rank}-${suit}`}>
      <div className="card-rank">{rank}</div>
      <div className="card-suit">{suit}</div>
    </div>
  );
};

export default Card;