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

const Trabajos = () => {
  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = (i) => {
    setSlideNumber(i)
    setOpenModal(true)
    document.querySelector("nav").classList.add("modal-open");
  }

  const handleCloseModal = () => {
    setOpenModal(false)
    document.querySelector("nav").classList.remove("modal-open");
  };

  const prevSlide = () => {
    slideNumber === 0 ?
      setSlideNumber(images.length - 1)
      : setSlideNumber(slideNumber - 1)
  };

  const nextSlide = () => {
    slideNumber + 1 === images.length ?
      setSlideNumber(0)
      : setSlideNumber(slideNumber + 1)
  };

  return (
    <>
      <Navbar isModalOpen={openModal} />
      <div className="trabajos">
        <div className="trabajos-wrapper m-snav animate__animated animate__fadeIn">
          {
            openModal &&
            <div className="sliderWrap">
              <div className="btnClose" onClick={handleCloseModal}>
                <i className="fa-sharp fa-solid fa-circle-xmark fa-2x"></i>
              </div>
              <div className="btnPrev" onClick={prevSlide}>
                <i className="fa-solid fa-circle-left fa-2x"></i>
              </div>
              <div className="btnNext" onClick={nextSlide}>
                <i className="fa-solid fa-circle-right fa-2x"></i>
              </div>
              <div className="fullScreenImage animate__animated animate__fadeInDown">
                <div className="fullScreenImage__container">
                  <img src={images[slideNumber].photo} alt="" />
                  <footer className="fullScreenImage__footer">{images[slideNumber].title} - {images[slideNumber].location}</footer>
                </div>
              </div>
            </div>
          }
          <div className="trabajos-container">
            <div className="section-title">
              <h1>Galería</h1>
              <h3>Algunas fotografías tomadas de los trabajos realizados</h3>
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
                  />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
        <Footer />
      </div >
    </>

  )
}

export default Trabajos;