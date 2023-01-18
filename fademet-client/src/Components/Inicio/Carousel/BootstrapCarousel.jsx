import { Carousel } from "react-bootstrap";
import Img1 from "../../../img/Slider/foto1.jpeg";
import Img2 from "../../../img/Slider/foto2.jpeg";
import Img3 from "../../../img/Slider/foto3.jpg";
import "./BootstrapCarousel.css";

const BootstrapCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="img-container">
          <img
            className="d-block w-100 img-carousel"
            src={Img1}
            alt="First slide"
          />
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="img-container">
          <img
            className="d-block w-100 img-carousel"
            src={Img2}
            alt="Second slide"
          />
        </div>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="img-container">
          <img
            className="d-block w-100 img-carousel"
            src={Img3}
            alt="Third slide"
          />
        </div>

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default BootstrapCarousel;