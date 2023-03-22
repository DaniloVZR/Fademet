import React from 'react';
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer";
import images from "../../utils/images";
import "./Proyectos.css";
import { Link } from 'react-router-dom';

const Proyectos = () => {

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className='Proyectos'>
      <Navbar />
      <section className='Proyectos__container m-snav animate__animated animate__fadeIn'>
        <div className="section-title">
          <h1>Trabajos Realizados</h1>
          <h3>Estos fueron algunos de los proyectos que hicimos realidad a nuestros clientes</h3>
        </div>
        <div className='project__cards__container'>
          {
            images.slice(0, 3).map((image) => (
              <Link onClick={handleClick} to={`/Proyectos/${image.id}`} key={image.id}>
                <section className='project__card'>
                  <img src={image.photo} />
                  <div>
                    <h4>{image.title}</h4>
                    <p><i className="fa-sharp fa-solid fa-location-dot fa-lg"></i>&nbsp;
                      <span className='project__card-location'>{image.location}</span></p>
                  </div>
                </section>
              </Link>
            ))
          }
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Proyectos;