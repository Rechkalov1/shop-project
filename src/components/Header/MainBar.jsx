import React from 'react';
import './Header.scss';

function MainBar() {
  return (
    <section className="container">
      <div className="thumb">
        <ul className="thumb-content">
          <li className="content">Квадроциклы</li>

          <li className="content">Катера</li>
          <li className="content">Гидроциклы</li>
          <li className="content">Лодки</li>
          <li className="content">Вездеходы</li>
          <li className="content">Снегоходы</li>
          <li className="content">Двигатели</li>
          <li className="content">Запчасти</li>
        </ul>
      </div>
    </section>
  );
}

export default MainBar;
