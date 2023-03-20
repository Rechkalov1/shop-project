import React from 'react';
import Slider from '../Slider/Slider';
import MainBar from './MainBar';
import SearchBar from 'components/Searchbar/SearchBar';

function Main() {
  return (
    <>
      <MainBar />
      <Slider />
      <SearchBar />
    </>
  );
}

export default Main;
