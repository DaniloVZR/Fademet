import servicesList from "../../utils/Services";
import "./Servicios.css";

const Servicios = () => {
  return (
    <section className="servicios" id="servicios">
      <div className="servicios__photo">
      </div>
      <div className="servicios-container">
        <div className="section-title">
          <h1>Nuestros Servicios</h1>
          <h3>En Fademet contamos con los siguientes servicios:</h3>
        </div>
        <div className="servicios-content">
          <ul>
            {servicesList.slice(0, Math.ceil(servicesList.length / 2)).map((service, i) => {
              return (
                <li key={i} className="servicio-option">{service}</li>
              )
            })}
          </ul>
          <ul>
            {servicesList.slice(Math.ceil(servicesList.length / 2), servicesList.length).map((service, i) => {
              return (
                <li key={i} className="servicio-option">{service}</li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Servicios;