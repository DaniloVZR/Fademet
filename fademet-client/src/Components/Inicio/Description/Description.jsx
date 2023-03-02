import "./Description.css";
import { Link } from "react-router-dom";
import Logo from "../../../img/logo_fm.png";

const Description = () => {
  return (
    <div className="description">
      <div className="desc__shape" />
      <div class="desc">
        <div className="desc__info">
          <div class="card">
            <div class="card-info">
              <img className="desc__info-logo" src={Logo} alt="Logo Fademet" />
              <h6 class="title">Somos una empresa domiciliada y creada en la ciudad de Medellín, con el fin de ofrecer productos y servicios metalmecánicos, estamos especializados en el diseño, fabricación y montaje de estructuras metálicas para el sector industrial y doméstico.</h6>
            </div>
          </div>
          <Link to='/'>
            <button className="button btn-width">Servicios</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Description;