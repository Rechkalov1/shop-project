import React from 'react';
import './SearchBar.scss';

function SearchBar() {
  return (
    <section className="container">
      <div>
        <div className="thumb_staff">
          <ul className="product_list">
            <li className="product_list__li">Поиск по номеру</li>
            <li className="product_list__li">Поиск по марке</li>
            <li className="product_list__li">Поиск по названию товара</li>
          </ul>
        </div>
        <div>
          <form action="" className="formSeacrh">
            <label>
              <input
                type="text"
                className="inputForm"
                placeholder="Введите марку"
              />
            </label>
            <button className="buttonSearch">ИСКАТЬ</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SearchBar;
