import Navbar from "../Navbar/Navbar";
import Carousel from "./Carousel/Carousel";
import Servicios from "../Servicios/Servicios";
import Footer from "../Footer/Footer";
import Description from "./Description/Description";
import "./Inicio.css";

const Inicio = () => {
  return (
    <div className="inicio">
      <Navbar />
      <Carousel />
      <Servicios />
      <Footer />
      {/* <div className="description-component">
        <Description />
      </div> */}
    </div>

  )
}

export default Inicio;
