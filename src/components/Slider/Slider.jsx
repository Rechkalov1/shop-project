import React, { useState, useEffect, useCallback } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { motion, AnimatePresence } from 'framer-motion';
import slide1 from './img/slide1.jpg';
import slide2 from './img/slide2.jpg';
import slide3 from './img/slide3.jpg';
import slide4 from './img/slide4.jpg';
import sale from './img/sale.png';
import './Slider.scss';

const dataSlider = [
  { img: slide1 },
  { img: slide2 },
  { img: slide3 },
  { img: slide4 },
];
function Slider() {
  const [slider, setSlider] = useState(0);
  const handleSlider = useCallback(
    side => {
      const sliders = dataSlider.length - 1;
      if (side === 'left') {
        slider - 1 >= 0 ? setSlider(slider - 1) : setSlider(sliders);
      } else {
        const numberSlide = slider + 1;
        numberSlide > sliders ? setSlider(0) : setSlider(numberSlide);
      }
    },
    [slider]
  );
  useEffect(() => {
    const interval = setInterval(() => {
      handleSlider('right');
    }, 4000);
    return () => clearInterval(interval);
  }, [slider, handleSlider]);
  return (
    <section className="container">
      <div className=" wrapper slider_container">
        <div className="slider">
          <ArrowBackIosIcon
            className="slider_left"
            onClick={() => handleSlider('left')}
          ></ArrowBackIosIcon>
          <div>
            <AnimatePresence>
              <motion.img
                className="slider_img"
                src={dataSlider[slider].img}
                key={dataSlider[slider].img}
              ></motion.img>
            </AnimatePresence>
          </div>
          <ArrowForwardIosIcon
            className="slider_right"
            onClick={() => handleSlider('right')}
          ></ArrowForwardIosIcon>
        </div>
        <div className="thumb_sale">
          <img src={sale} alt="images" />
        </div>
      </div>
    </section>
  );
}

export default Slider;
