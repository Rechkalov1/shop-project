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
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function Sliders() {
  return (
    <section className="container">
      <div className=" wrapper">
        <div className="StyledBox wrapper">
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            spaceBetween={10}
          >
            <SwiperSlide>
              <div className="thumbBox">
                <img className="imgSlider" src={slide1} alt="bg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="thumbBox">
                <img className="imgSlider" src={slide2} alt="bg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="thumbBox">
                <img className="imgSlider" src={slide3} alt="bg" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="thumbBox">
                <img className="imgSlider" src={slide4} alt="bg" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="thumb_sale">
          <img src={sale} alt="images" />
        </div>
      </div>
    </section>
  );
}
export default Sliders;
