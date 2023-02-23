import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <Link to="/">
          <Logo />
        </Link>
        <div className="footer-address">
          <p>Dirección:</p>
          <p>Calle 61 A # 55 A 29</p>
          <p>Barrio Chagualo</p>
          <p>Medellín - Colombia</p>
        </div>
        <div className="footer-contact">
          <p>Contacto:</p>
          <p>Celular: 314-7561960 - 3175030339</p>
          <div className="footer-social">
            <a href="https://api.whatsapp.com/send/?phone=573147561960&text&type=phone_number&app_absent=0" target="_blank" className="footer-social-i wpp">
              <i className="fa-brands fa-whatsapp fa-2x"></i>
            </a>
            <a href="https://www.instagram.com/fademetmontajes/?hl=es" target="_blank" className="footer-social-i ig">
              <i className="fa-brands fa-instagram fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
      <p className="copy">Todos los derechos reservados 2022 ©.</p>
    </div>
  )
}

export default Footer;