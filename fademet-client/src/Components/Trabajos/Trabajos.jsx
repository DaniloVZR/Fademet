import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import images from "../../utils/images";
import "./Trabajos.css"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import Modal from "react-modal";

const Trabajos = () => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (i) => {
    setSlideNumber(i)
    setOpenModal(true)
  }

  return (
    <div className="trabajos">
      <Navbar />
      <div className="trabajos-wrapper m-snav animate__animated animate__fadeIn">
        {
          openModal &&
          <div className="sliderWrap">
            <div>X</div>
            <div>Prev</div>
            <div>Next</div>
            <div className="fullScreenImage">
              <img src={images[slideNumber].photo} alt="" />
            </div>
          </div>
        }
        <div className="trabajos-container">
          <div className="section-title">
            <h1>Trabajos</h1>
            <h3>Estos fueron algunos de los trabajos realizados:</h3>
          </div>
        </div>
        <div className="trabajos__gallery-container">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
            <Masonry gutter="15px">
              {images.map((image, i) => (
                <img
                  key={i}
                  src={image.photo}
                  style={{ width: "100%", display: "block", cursor: "pointer" }}
                  alt={image.title}
                  onClick={() => handleOpenModal(i)}
                // onClick={() => viewImage(image.photo, image.title, image.location, image.description, i)}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
      <Footer />
    </div >
  )
}

export default Trabajos;