import Navbar from "../Navbar/Navbar";
import Carousel from "./Carousel/Carousel";
import Eligenos from "../Eligenos/Eligenos";
import ProjHome from "../ProjHome/ProjHome";
import Servicios from "../Servicios/Servicios";
import About from "../About/About";
import Contactanos from "../Contactanos/Contactanos";
import Footer from "../Footer/Footer";
import Description from "./Description/Description";
import "./Inicio.css";

const Inicio = () => {
  return (
    <div className="inicio">
      <Navbar />
      <main className="inicio__home">
        <Carousel />
        <Description />
      </main>
      <Eligenos />
      <ProjHome />
      <Servicios />
      <About />
      <Contactanos />
      <Footer />
    </div>

  )
}

export default Inicio;
