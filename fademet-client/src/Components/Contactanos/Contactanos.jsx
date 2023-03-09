import Navbar from "../Navbar/Navbar";
import ContactForm from "./ContactForm/ContactForm";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import "./Contactanos.css";

const Contactanos = () => {
  return (
    <div className="Contactanos">
      <Navbar />
      <section className="Contactanos__container m-snav animate__animated animate__fadeIn">
        <div className="section-title">
          <h1>Contáctanos!</h1>
          <h3>Si deseas cotizar algún proyecto, no dudes en escribirnos o enviarnos un correo</h3>
        </div>
        <div className="contactanos__content">
          <ContactForm />
          <div className="contactanos__medios">
            <h5>También puedes contactarnos a tráves de nuestras redes sociales o via celular:</h5>
            <div className="contactanos__medios-celrs">
              <div className="contactanos__medios-cel">
                <p>Cel: 314-7561960</p>
                <p>Cel: 317-5030339</p>
              </div>
              <div className="contactanos-social">
                <a href="https://api.whatsapp.com/send/?phone=573147561960&text&type=phone_number&app_absent=0" target="_blank" className="footer-social__wpp">
                  <i className="fa-brands fa-whatsapp fa-3x contact-icon wpp"></i>
                </a>
                <a href="https://www.instagram.com/fademetmontajes/?hl=es" target="_blank" className="footer-social__ig">
                  <i className="fa-brands fa-instagram fa-3x contact-icon ig"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Contactanos;