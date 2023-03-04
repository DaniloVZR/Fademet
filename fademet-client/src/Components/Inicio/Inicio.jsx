import Navbar from "../Navbar/Navbar";
import Carousel from "./Carousel/Carousel";
import Eligenos from "../Eligenos/Eligenos";
import Servicios from "../Servicios/Servicios";
import Footer from "../Footer/Footer";
import Description from "./Description/Description";
import "./Inicio.css";

const Inicio = () => {
  return (
    <div className="inicio">
      <Navbar />
      <div className="inicio__home">
        <Carousel />
        <Description />
      </div>
      <Eligenos />
      <Servicios />
      <Footer />
    </div>

  )
}

export default Inicio;
