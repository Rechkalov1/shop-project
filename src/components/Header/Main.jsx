import React from 'react';

import MainBar from './MainBar';
import SearchBar from 'components/Searchbar/SearchBar';
import Sliders from '../Slider/sliderNew';
import Category from 'components/Category/Category';
import CardStaff from 'components/CardStaff/CardStaff';

function Main() {
  return (
    <>
      <MainBar />
      <Sliders />
      <SearchBar />
      <Category />
      <CardStaff />
    </>
  );
}

export default Main;
