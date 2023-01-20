import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Navbar.css";

const Navbar = (props) => {
  const [position, setPosition] = useState('relative');
  let location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setPosition('absolute');
    }
  }, [location])

  return (
    <div className={`navbar ${position}`}>
      <Link to='/'>
        <Logo />
      </Link>
      <div className="navbar-options">
        <Link to='/'>
          {/* 
          Anterior Diseño de Botón
          <div className="navbar-options__link">
            Inicio
          </div> */}
          <button className="button">Inicio</button>
        </Link>
        <Link to='/Servicios'>
          <button className="button">Servicios</button>
        </Link>
        <Link to='/Trabajos'>
          <button className="button">Trabajos</button>
        </Link>
        <Link to='/QuienesSomos'>
          <button className="button">Nosotros</button>
        </Link>
        <Link to='/Contactanos'>
          <button className="button">Contactanos</button>
        </Link>
      </div>
    </div >
  )
}

export default Navbar;