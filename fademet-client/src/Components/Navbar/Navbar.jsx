import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Navbar.css";

const Navbar = ({ isModalOpen }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`nv-z ${isModalOpen ? "modal-open" : ""}`}>
      <div className="navbar nav-default">
        <Link to='/'>
          <Logo />
        </Link>
        <div className="navbar-options">
          <Link to='/'>
            <button className="button">Inicio</button>
          </Link>
          <Link to='/Trabajos'>
            <button className="button">Galería</button>
          </Link>
          <Link to='/QuienesSomos'>
            <button className="button">Nosotros</button>
          </Link>
          <Link to='/Contactanos'>
            <button className="button">Contáctanos</button>
          </Link>
        </div>
      </div>

      <div className="navbar nav-mobile">
        <Link to='/'>
          <Logo />
        </Link>
        <div className="nav-menu-option" onClick={() => setToggle(!toggle)}>
          <i className="fa-solid fa-bars fa-2x menu-icon" />
        </div>
      </div>

      {
        toggle ?
          <div className="menu-mobile animate__animated animate__slideInRight">
            <i onClick={() => setToggle(!toggle)} className="fa-solid fa-x mobile-x-btn" />
            <Link className="mobile-btn" to='/'>
              Inicio
            </Link>
            <Link className="mobile-btn" to='/Trabajos'>
              Trabajos
            </Link>
            <Link className="mobile-btn" to='/QuienesSomos'>
              Nosotros
            </Link>
            <Link className="mobile-btn" to='/Contactanos'>
              Contáctanos
            </Link>
          </div> : null
      }
    </nav >
  )
}

export default Navbar;