import React from 'react';
import Slider from '../Slider/Slider';
import MainBar from './MainBar';
import SearchBar from 'components/Searchbar/SearchBar';
import Sliders from '../Slider/sliderNew';

function Main() {
  return (
    <>
      <MainBar />
      {/* <Slider /> */}
      <Sliders />
      <SearchBar />
    </>
  );
}

export default Main;
