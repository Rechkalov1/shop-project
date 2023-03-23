import React from 'react';
import gidro from '../utils/gidroscoter.json';
import quadro from '../utils/quadro.json';
import backet from '../img/backet.svg';
import Vector from '../img/Vector.svg';
import './CardStaff.scss';
function CardStaff() {
  const elements = quadro.map(({ name, image, id, price }) => {
    return (
      <li className="staff" key={id}>
        <button className="staff-heart">
          <img src={Vector} alt="vector" />
        </button>
        <img className="images" src={image} alt="img" />
        <p className="staff-name">{name}</p>
        <p className="staff-price">{price}</p>
        <button className="staff-basket">
          <img className="img-basket" src={backet} alt="korzina" />
        </button>
      </li>
    );
  });
  return (
    <section className="container">
      <ul className="thumb-staff">{elements}</ul>
    </section>
  );
}

export default CardStaff;
