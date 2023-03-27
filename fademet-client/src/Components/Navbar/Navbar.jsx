import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Navbar.css";

const Navbar = ({ isModalOpen }) => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    window.scrollTo(0, 0);
  }

  return (
    <nav className={`nv-z ${isModalOpen ? "modal-open" : ""}`}>
      <div className="navbar nav-default">
        <Link onClick={handleClick} to='/'>
          <Logo />
        </Link>
        <div className="navbar-options">
          <Link onClick={handleClick} to='/'>
            <button className="button">Inicio</button>
          </Link>
          <Link
            onClick={() => document.getElementById("ProjHome").scrollIntoView({ behavior: "smooth" })}
            to='/'
          >
            <button className="button">Proyectos</button>
          </Link>
          <Link onClick={handleClick} to='/Galería'>
            <button className="button">Galería</button>
          </Link>
          <Link
            onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}
            to='/'>
            <button className="button">Nosotros</button>
          </Link>
          <Link onClick={handleClick} to='/Contactanos'>
            <button className="button">Contáctanos</button>
          </Link>
        </div>
      </div>

      <div className="navbar nav-mobile">
        <Link onClick={handleClick} to='/'>
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
            <Link onClick={handleClick} className="mobile-btn" to='/'>
              Inicio
            </Link>
            <Link
              onClick={() => document.getElementById("ProjHome").scrollIntoView({ behavior: "smooth" })}
              to='/'
              className="mobile-btn" >
              Proyectos
            </Link>
            <Link onClick={handleClick} className="mobile-btn" to='/Galería'>
              Galería
            </Link>
            <Link
              onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}
              to='/'
              className="mobile-btn">
              Nosotros
            </Link>
            <Link onClick={handleClick} className="mobile-btn" to='/Contactanos'>
              Contáctanos
            </Link>
          </div> : null
      }
    </nav >
  )
}

export default Navbar;