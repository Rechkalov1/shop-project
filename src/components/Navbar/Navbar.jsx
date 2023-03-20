import React from 'react';
import { NavLink } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
import logo from '../img/logo.svg';
import face from '../img/face.svg';
import Vector from '../img/Vector.svg';
import backet from '../img/backet.svg';
import './Navbar.scss';
function Navbar() {
  return (
    <section className="container">
      <nav>
        <div className="Thumb">
          <ul className="thumb-nav">
            <li className="content">
              <NavLink className="NavLink" to="/shop">
                Магазины
              </NavLink>
            </li>
            <li className="content">
              <NavLink className="NavLink" to="/sale">
                Акции
              </NavLink>
            </li>
            <li className="content">
              <NavLink className="NavLink" to="/cashe">
                Доставка и оплата
              </NavLink>
            </li>
            <li className="logo">
              <NavLink to="/">
                <img src={logo} alt="images" />
              </NavLink>
            </li>
            <li className="content">
              <NavLink className="NavLink">Одеса Стуса 25</NavLink>
            </li>
          </ul>
          <div className="thumb-button--nav">
            <ul className="button-nav">
              <li className="butoon-nav--content">
                <img src={face} alt="" />
              </li>
              <li className="butoon-nav--content">
                <img src={Vector} alt="" />
              </li>
              <li className="butoon-nav--content">
                <img src={backet} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
