import React from 'react';
import kater from '../../assets/category-img/kater.png';
import baggi from '../../assets/category-img/baggi.png';
import motor from '../../assets/category-img/motor.png';
import quadro from '../../assets/category-img/quadro.png';
import snow from '../../assets/category-img/snow.png';
import jet_ski from '../../assets/category-img/jet_ski.png';
import './Category.scss';
function Category() {
  return (
    <section className="container">
      <ul className="thumb-category">
        <li className="box">
          <div>
            <p className="category-title">Квадроцикл</p>
            <p className="category-info">Подробнее </p>
          </div>
          <div>
            <img className="imagee" src={quadro} alt="quadro" />
          </div>
        </li>
        <li className="box">
          {' '}
          <div>
            <p className="category-title">Гидроциклы</p>
            <p className="category-info">Подробнее </p>
          </div>
          <div>
            <img src={jet_ski} alt="ket_sky" />
          </div>
        </li>
        <li className="box">
          {' '}
          <div>
            <p className="category-title">Катера</p>
            <p className="category-info">Подробнее </p>
          </div>
          <div>
            <img src={kater} alt="kater" />
          </div>
        </li>
      </ul>
      <ul className="thumb-category">
        {' '}
        <li className="box box1">
          {' '}
          <div>
            <p className="category-title">Снегоходы</p>
            <p className="category-info">Подробнее </p>
          </div>
          <div>
            <img src={snow} alt="snow" />
          </div>
        </li>
        <li className="box box1">
          {' '}
          <div>
            <p className="category-title"> Вездеходы</p>
            <p className="category-info">Подробнее </p>
          </div>
          <div>
            <img src={baggi} alt="baggi" />
          </div>
        </li>
        <li className="box box1">
          {' '}
          <div>
            <p className="category-title"> Двигатели</p>
            <p className="category-info">Подробнее </p>
          </div>
          <div>
            <img src={motor} alt="motor" />
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Category;
