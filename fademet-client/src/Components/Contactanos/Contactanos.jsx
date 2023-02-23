import Navbar from "../Navbar/Navbar";
import ContactForm from "./ContactForm/ContactForm";
import Footer from "../Footer/Footer";
import "./Contactanos.css";

const Contactanos = () => {
  return (
    <div className="Contactanos">
      <Navbar />
      <div className="Contactanos__container">
        <div className="trabajos-title">
          <h1>Contáctanos!</h1>
          <h3>Si deseas cotizar algún proyecto, no dudes en escribirnos o enviarnos un correo</h3>
        </div>
        <ContactForm />
      </div>
      <Footer />
    </div>
  )
}

export default Contactanos;