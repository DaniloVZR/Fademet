import Navbar from "../Navbar/Navbar";
import BootstrapCarousel from "./Carousel/BootstrapCarousel";
import Footer from "../Footer/Footer";
import Description from "./Description/Description";
import "./Inicio.css";

const Inicio = () => {
  return (
    <div className="inicio">
      <Navbar />
      <BootstrapCarousel />
      {/* 
      Mostrar información introductoria de la empresa

      <div className="description-component">
        <Description />
      </div> */}
    </div>

  )
}

export default Inicio;
