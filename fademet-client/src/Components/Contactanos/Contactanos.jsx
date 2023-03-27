import ContactForm from "./ContactForm/ContactForm";
import "./Contactanos.css";

const Contactanos = () => {
  return (
    <section className="Contactanos" id="contactanos">
      <div className="Contactanos__container">
        <div className="section-title">
          <h1>Contáctanos!</h1>
          <h3>Si deseas cotizar algún proyecto, no dudes en escribirnos o enviarnos un correo</h3>
        </div>
        <div className="contactanos__content">
          <ContactForm />
          <div className="contactanos__medios">
            <p>También puedes contactarnos a tráves de nuestras redes sociales o via celular:</p>
            <div className="contactanos__medios-celrs">
              <div className="contactanos__medios-cel">
                <p><strong>Cel:</strong> 314-7561960</p>
                <p><strong>Cel:</strong> 317-5030339</p>
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
      </div>
    </section>
  )
}

export default Contactanos;