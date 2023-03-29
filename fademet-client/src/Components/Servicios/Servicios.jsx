import servicesList from "../../utils/Services";
import BtnCotizar from "../Btn/BtnCotizar/BtnCotizar";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Servicios.css";

const Servicios = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000 // Duración de la animación
    });
  }, []);

  return (
    <section className="servicios" id="servicios">
      <div className="servicios__photo">
        <div className="servicios__photo-overlay">
          <div className="servicios__photo-text">
            <h1 data-aos="fade-up">
              Diseño,<br />
              fabricación <br />
              y montaje <br />
              de estructuras <br />
              metálicas.
            </h1>
            <BtnCotizar />
          </div>
        </div>
      </div>
      <div className="servicios-container">
        <div className="section-title">
          <h1>Nuestros Servicios</h1>
          <h3>En Fademet contamos con los siguientes servicios:</h3>
        </div>
        <div className="servicios-content">
          <ul data-aos="fade-up">
            {servicesList.slice(0, Math.ceil(servicesList.length / 2)).map((service, i) => {
              return (
                <li key={i} className="servicio-option">{service}</li>
              )
            })}
          </ul>
          <ul data-aos="fade-up">
            {servicesList.slice(Math.ceil(servicesList.length / 2), servicesList.length).map((service, i) => {
              return (
                <li key={i} className="servicio-option">{service}</li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Servicios;