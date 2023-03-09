import "./Description.css";
import { Link } from "react-router-dom";
import Logo from "../../../img/logo_fm.png";

const Description = () => {
  return (
    <div className="description">
      <div className="desc__shape" />
      <div className="desc">
        <div className="desc__info">
          <div className="card animate__animated animate__zoomIn">
            <div className="card-info">
              <img className="desc__info-logo" src={Logo} alt="Logo Fademet" />
              <h6 className="title">Somos una empresa domiciliada y creada en la ciudad de Medellín, con el fin de ofrecer productos y servicios metalmecánicos, estamos especializados en el diseño, fabricación y montaje de estructuras metálicas para el sector industrial y doméstico.</h6>
            </div>
          </div>
          <div className="desc__info-btn">
            <button
              onClick={() => document.getElementById("eligenos").scrollIntoView({ behavior: "smooth" })}
              className="btn-desc">¿Por qué Elegirnos?</button>
            <button
              onClick={() => document.getElementById("servicios").scrollIntoView({ behavior: "smooth" })}
              className="btn-desc">Mira Nuestros Servicios</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description;