import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./About.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000 // Duración de la animación
    });
  }, []);

  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__mv">
          <div className="section-title" data-aos="fade-up">
            <h1>Misión <i className="fa-regular fa-compass"></i></h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae asperiores architecto accusantium possimus, est autem, et perspiciatis error animi beatae excepturi. Molestiae aliquid obcaecati commodi nisi aliquam distinctio cupiditate sint.</p>
          </div>
          <div className="section-title" data-aos="fade-up">
            <h1>Visión <i className="fa-sharp fa-regular fa-eye"></i></h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae asperiores architecto accusantium possimus, est autem, et perspiciatis error animi beatae excepturi. Molestiae aliquid obcaecati commodi nisi aliquam distinctio cupiditate sint.</p>
          </div>
        </div>
        <div className="about__valores">
          <div className="section-title" data-aos="fade-up">
            <h1>Valores <i className="fa-sharp fa-regular fa-heart"></i></h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae asperiores architecto accusantium possimus, est autem, et perspiciatis error animi beatae excepturi. Molestiae aliquid obcaecati commodi nisi aliquam distinctio cupiditate sint.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;