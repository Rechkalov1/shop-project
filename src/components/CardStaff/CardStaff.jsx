import React from 'react';
import data from '../utils/data.json';
import './CardStaff.scss';
function CardStaff() {
  const elements = data.map(({ name, image, id, price }) => {
    return (
      <div>
        <li key={id}>
          <p>{name}</p>
          <img className="images" src={image} alt="img" />
          <p>{price}</p>
        </li>
      </div>
    );
  });
  return <ul>{elements}</ul>;
}

export default CardStaff;
