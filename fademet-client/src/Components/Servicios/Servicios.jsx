import servicesList from "../../utils/Services";
import { useRef } from "react";
import "./Servicios.css";

const Servicios = () => {
  const serviciosRef = useRef(null)
  return (
    <div className="servicios" id="servicios" ref={serviciosRef}>
      <div className="servicios-container">
        <div className="servicios-title">
          <h1>Servicios</h1>
          <h3>En Fademet contamos con los siguientes servicios:</h3>
        </div>
        <div className="servicios-content">
          {
            servicesList.map(service => {
              return (
                <div className="servicio-option">{service}</div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Servicios;