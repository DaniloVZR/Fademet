import React from 'react';
import images from "../../utils/images";
import { Link } from 'react-router-dom';
import "./ProjHome.css";

function ProjHome() {

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section className='ProjHome' id='ProjHome'>
      <div className="section-title ProjHome-title">
        <h1>Proyectos</h1>
        <h3>Estos fueron algunos de los proyectos que hicimos realidad a nuestros clientes</h3>
      </div>
      <div className='ProjHome__cards__container'>
        {
          images.slice(0, 3).map((image) => (
            <Link onClick={handleClick} to={`/Proyectos/${image.id}`} key={image.id}>
              <section className='ProjHome__card'>
                <div className='ProjImg'>
                  <div className='ProjHome__img-overlayer' />
                  <img src={image.photo} />
                  <footer className='ProjHome__img-text'>
                    <div>
                      <h4>{image.title}</h4>
                      <p><i className="fa-sharp fa-solid fa-location-dot fa-lg"></i>&nbsp;
                        <span className='project__card-location'>{image.location}</span></p>
                    </div>
                  </footer>
                </div>
              </section>
            </Link>
          ))
        }
      </div>
    </section>
  );
}

export default ProjHome;