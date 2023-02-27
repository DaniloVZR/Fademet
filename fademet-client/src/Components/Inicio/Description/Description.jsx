import "./Description.css";
import Logo from "../../../img/logo_fm.png";

const Description = () => {
  return (
    <div class="desc">
      <div className="desc__logo">
        <img className="desc__logo-img" src={Logo} alt="Logo Fademet" />
        <div>
          <h5>Somos una empresa domiciliada y creada en la ciudad de Medellín, con el fin de ofrecer productos y servicios metalmecánicos, estamos especializados en el diseño, fabricación y montaje de estructuras metálicas para el sector industrial y doméstico.</h5>
        </div>
      </div>
    </div>
  )
}

export default Description;