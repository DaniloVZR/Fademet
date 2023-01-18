import logo from "../../img/logo_fm.png";
import { Link } from "react-router-dom"
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to='/'>
        <div className="navbar-logo">
          <img className="navbar-logo__img" src={logo} alt="Logo" />
          <h1 className="navbar-logo__text">FADEMET</h1>
        </div>
      </Link>
      <div className="navbar-options">
        <Link to='/'>
          <div className="navbar-options__link">
            Inicio
          </div>
        </Link>
        <Link to='/Servicios'>
          <div className="navbar-options__link">
            Servicios
          </div>
        </Link>
        <Link to='/Trabajos'>
          <div className="navbar-options__link">
            Trabajos
          </div>
        </Link>
        <Link to='/QuienesSomos'>
          <div className="navbar-options__link">
            Quienes Somos
          </div>
        </Link>
        <Link to='/Contactanos'>
          <div className="navbar-options__link">
            Contáctanos
          </div>
        </Link>
      </div>
    </div >
  )
}

export default Navbar;