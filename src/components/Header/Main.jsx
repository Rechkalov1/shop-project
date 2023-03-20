import React from 'react';

import MainBar from './MainBar';
import SearchBar from 'components/Searchbar/SearchBar';
import Sliders from '../Slider/sliderNew';

function Main() {
  return (
    <>
      <MainBar />

      <Sliders />
      <SearchBar />
    </>
  );
}

export default Main;
