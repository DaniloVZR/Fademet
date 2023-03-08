import servicesList from "../../utils/Services";
import { motion } from "framer-motion";
import "./Servicios.css";

const Servicios = () => {

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5
      }
    }
  }

  const item = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 }
  }


  return (
    <section className="servicios" id="servicios">
      <div className="servicios-container">
        <div className="servicios-title">
          <h1>Servicios</h1>
          <h3>En Fademet contamos con los siguientes servicios:</h3>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="servicios-content">
          {
            servicesList.map((service, i) => {
              return (
                <motion.div key={i} className="servicio-option" variants={item}>{service}</motion.div>
              )
            })
          }
        </motion.div>
      </div>
    </section>
  )
}

export default Servicios;