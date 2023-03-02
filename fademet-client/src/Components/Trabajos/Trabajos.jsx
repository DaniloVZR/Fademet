import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import images from "../../utils/images";
import "./Trabajos.css"
import { useState, useEffect } from "react";

const Trabajos = () => {

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
                    <div className="trabajos-gallery__container" key={image.id}>
                      <img className="trabajos-gallery__picture" src={image.photo} alt={image.title} />
                    </div>
                  )
                })}
            </div> : <div> <i className="fa-solid fa-circle-notch fa-3x fa-spin"></i> </div>
          }
        </div>
      </div>
      <Footer />
    </div >
  )
}

export default Trabajos;