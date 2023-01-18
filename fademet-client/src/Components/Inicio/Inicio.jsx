import Navbar from "../Navbar/Navbar";
import BootstrapCarousel from "./Carousel/BootstrapCarousel";
import "./Inicio.css";

const Inicio = () => {
  return (
    <div className="inicio">
      <Navbar />
      <div className="inicio-container">
        <div className="inicio-intro">
          <BootstrapCarousel />
          <p className="inicio-intro__texto">Somos una empresa domiciliada y creada en la ciudad de Medellín, con el fin de ofrecer productos y servicios metalmecánicos, estamos   especializados en el diseño, fabricación y montaje de estructuras metálicas para el sector industrial y doméstico.</p>
        </div>
      </div>
    </div>
  )
}

export default Inicio;
