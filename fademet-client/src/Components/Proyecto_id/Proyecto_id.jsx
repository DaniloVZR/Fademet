import React from 'react';
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer";
import { Link, useParams } from "react-router-dom";
import images from "../../utils/images";
import "./Proyecto_id.css";

function Proyecto_id() {
  const { id } = useParams();
  const image = images.find((e) => e.id === Number(id));

  return (
    <div className='proyecto_id'>
      <Navbar />
      <Link className='Back-btn' to="/Proyectos">
        <i className="fa-solid fa-arrow-left" />&nbsp;
        Volver
      </Link>

      <section className='proyecto_id__container m-snav animate__animated animate__fadeIn'>
        <div className='project__info'>
          <img src={image.photo} alt="" />
          <div className='project__info-desc'>
            <div className='section-title'>
              <h1>{image.title}</h1>
            </div>
            <div className='project__info-details'>
              <p>{image.description}</p>
              <p>
                <i className="fa-sharp fa-solid fa-location-dot fa-lg" />&nbsp;
                <span className='project__card-location'>
                  {image.location}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Proyecto_id;