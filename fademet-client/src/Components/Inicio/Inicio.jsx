import Navbar from "../Navbar/Navbar";
import Carousel from "./Carousel/Carousel";
import Eligenos from "../Eligenos/Eligenos";
import ProjHome from "../ProjHome/ProjHome";
import Servicios from "../Servicios/Servicios";
import About from "../About/About";
import Contactanos from "../Contactanos/Contactanos";
import Footer from "../Footer/Footer";
import Header from "./Description/Description";
import "./Inicio.css";

const Inicio = () => {
  return (
    <div className="inicio">
      <Navbar />
      <header className="inicio__home m-snav">
        <Carousel />
        <div className="inicio__header">
          <Header />
        </div>
      </header>
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
