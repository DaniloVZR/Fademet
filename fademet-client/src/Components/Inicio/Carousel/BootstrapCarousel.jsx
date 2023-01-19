import { Carousel } from "react-bootstrap";
import Img1 from "../../../img/Slider/foto1.jpeg";
import Img2 from "../../../img/Slider/foto2.jpeg";
import Img3 from "../../../img/Slider/foto3.jpg";
import "./BootstrapCarousel.css";

const BootstrapCarousel = () => {
  return (
    <Carousel fade className="Carousel">
      <Carousel.Item>
        <div className="img-container">
          <img className="d-block w-100 img-carousel" src={Img1} alt="First slide" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="img-container">
          <img
            className="d-block w-100 img-carousel"
            src={Img2}
            alt="Second slide"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="img-container">
          <img
            className="d-block w-100 img-carousel"
            src={Img3}
            alt="Third slide"
          />
        </div>
      </Carousel.Item>
    </Carousel>
  )
}

export default BootstrapCarousel;