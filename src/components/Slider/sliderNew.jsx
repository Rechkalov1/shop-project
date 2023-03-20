import slide1 from './img/slide1.jpg';
import slide2 from './img/slide2.jpg';
import slide3 from './img/slide3.jpg';
import slide4 from './img/slide4.jpg';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import sale from './img/sale.png';

import './Slider.scss';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper React components

// Import Swiper styles

function Sliders() {
  return (
    <section className="container">
      <div className="StyledBox wrapper">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          spaceBetween={10}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="Thumb">
              <img className="imgSlider" src={slide1} alt="bg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Thumb">
              <img className="imgSlider" src={slide2} alt="bg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Thumb">
              <img className="imgSlider" src={slide3} alt="bg" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Thumb">
              <img className="imgSlider" src={slide4} alt="bg" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="thumb_sale">
        <img src={sale} alt="images" />
      </div>
    </section>
  );
}
export default Sliders;
