import { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [contactForm, setcontactForm] = useState({
    subject: "",
    email: "",
    message: "",
  });

  const handleContactForm = (e) => {
    const { name, value } = e.target;
    setcontactForm({
      ...contactForm, [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contactForm);

    axios.post('http://localhost:3001/api/contact', contactForm)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <form className="contact__form" onSubmit={handleSubmit}>
      <div className="form__section">
        <label htmlFor="subject">Asunto:</label>
        <input
          type="text"
          className="form__input"
          name="subject"
          value={contactForm.subject}
          onChange={handleContactForm}
        />
      </div>

      <div className="form__section">
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          name="email"
          className="form__input"
          value={contactForm.email}
          onChange={handleContactForm}
        />
      </div>

      <div className="form__section">
        <label htmlFor="message">Mensaje:</label>
        <textarea
          id="message"
          name="message"
          className="form__input textarea-input"
          value={contactForm.message}
          onChange={handleContactForm}
        />
      </div>

      <div className="form__section">
        <button type="submit" className="form__submit">Enviar</button>
      </div>
    </form>
  )
}

export default ContactForm;