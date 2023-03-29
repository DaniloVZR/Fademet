import BtnCotizar from "../../Btn/BtnCotizar/BtnCotizar";
import "./Description.css";


const Description = () => {
  return (
    <div className="description">
      <div className="description__text animate__animated animate__fadeInLeft">
        <h1 className="description__title">Fademet</h1>
        <h3 className="description__slogan">"Soldando Sueños"</h3>
        <p className="description__intro">Somos una empresa domiciliada y creada en la ciudad de Medellín, con el fin de ofrecer productos y servicios metalmecánicos, estamos especializados en el diseño, fabricación y montaje de estructuras metálicas para el sector industrial y doméstico.</p>
      </div>
      <div className="desc__info-btn animate__animated animate__fadeInLeft">
        <button
          onClick={() => {
            const aboutElement = document.getElementById("eligenos");
            const offsetTop = aboutElement.offsetTop - 90;
            window.scrollTo({ top: offsetTop, behavior: "smooth" });
          }}
          className="btn-desc">¿Por qué Elegirnos?</button>
        <button
          onClick={() => {
            const aboutElement = document.getElementById("servicios");
            const offsetTop = aboutElement.offsetTop - 90;
            window.scrollTo({ top: offsetTop, behavior: "smooth" });
          }}
          className="btn-desc">Nuestros Servicios</button>
        <BtnCotizar />
      </div>
    </div >
  )
}

export default Description;