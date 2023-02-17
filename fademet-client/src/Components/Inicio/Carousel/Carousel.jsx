// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Img1 from "../../../img/Slider/foto1.jpeg";
import Img2 from "../../../img/Slider/foto2.jpeg";
import Img3 from "../../../img/Slider/foto3.jpg";
import "./Carousel.css";

const Carousel = () => {
  return (
    <Swiper
      // install Swiper modules
      loop={true}
      navigation={{
        nextEl: '.swiper-button-next',
        nextEl: '.swiper-button-next',
      }}
      modules={[Navigation, Autoplay]}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false
      }}
      className="Carousel"
    >
      <SwiperSlide><img className='Carousel-img' src={Img1} /></SwiperSlide>
      <SwiperSlide><img className='Carousel-img' src={Img2} /></SwiperSlide>
      <SwiperSlide><img className='Carousel-img' src={Img3} /></SwiperSlide>
    </Swiper>
  )
}

export default Carousel;