import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import images from "../../utils/images";
import "./Trabajos.css"
import { useState, useEffect } from "react";

const Trabajos = () => {

  const [showImage, setShowImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleNext = () => {
    const currentIndex = images.findIndex(image => image.id === selectedImage.id);
    if (currentIndex === images.length - 1) return;
    setSelectedImage(images[currentIndex + 1]);
  }

  const handlePrev = () => {
    const currentIndex = images.findIndex(image => image.id === selectedImage.id);
    if (currentIndex === 0) return;
    setSelectedImage(images[currentIndex - 1]);
  }

  const handlerImageShow = (image) => {
    setSelectedImage(image)
    setShowImage(true);
  }

  const handleCloseModal = () => {
    setSelectedImage(null);
    setShowImage(false);
  }

  const handleClickOutside = (e) => {
    if (!e.target.closest('.image-selected')) {
      handleCloseModal();
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, []);

  return (
    <div className="trabajos">
      <Navbar />
      <div className="trabajos-wrapper">
        <div className="trabajos-container">
          <div className="trabajos-title">
            <h1>Trabajos</h1>
            <h3>Estos fueron algunos de los trabajos realizados:</h3>
          </div>
          {
            images.length ? <div className="trabajos-gallery">
              {
                images.map((image) => {
                  return (
                    <div className="trabajos-gallery__container" key={image.id} onClick={() => handlerImageShow(image)}>
                      <img className="trabajos-gallery__picture" src={image.photo} alt={image.title} />
                    </div>
                  )
                })}
            </div> : <div> <i className="fa-solid fa-circle-notch fa-3x fa-spin"></i> </div>
          }
        </div>
        {
          showImage &&
          <div className="image-selected">
            <button onClick={handleCloseModal} className="image-selected__btn">X</button>
            <img src={selectedImage.photo} alt={selectedImage.title} />
            <div className="image-selected__btn__flex">
              <button onClick={handlePrev} className="image-selected__btn">←</button>
              <button onClick={handleNext} className="image-selected__btn">→</button>
            </div>
          </div>
        }
      </div>
      <Footer />
    </div >
  )
}

export default Trabajos;