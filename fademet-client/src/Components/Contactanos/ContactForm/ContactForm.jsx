import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
axios.defaults.baseURL = "http://localhost:3001/"

const ContactForm = () => {

  const [contactForm, setcontactForm] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const [messageForm, setMessageForm] = useState("");

  const handleContactForm = (e) => {
    const { name, value } = e.target;
    setcontactForm({
      ...contactForm, [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contactForm.name === "") return setMessageForm("Debes escribir tu nombre")
    if (contactForm.subject === "") return setMessageForm("Debes escribir un asunto")
    if (contactForm.email === "") return setMessageForm("Debes escribir tu correo electrónico")
    if (contactForm.message === "") return setMessageForm("El correo debe contener un mensaje");

    axios.post('/api/contact', contactForm)
      .then((response) => {
        Swal.fire(
          'Correo Enviado!',
          response.data,
          'success'
        );
        setcontactForm({
          name: "",
          subject: "",
          email: "",
          message: "",
        })
        setMessageForm("");
      })
      .catch((error) => {
        Swal.fire(
          'No se envió el correo',
          'Inténtalo más tarde',
          'error'
        );
        console.log(error);
      });
  };


  return (
    <form className="contact__form" onSubmit={handleSubmit}>
      {
        messageForm.length ?
          <div className="form__error">
            {messageForm}
          </div> : null
      }
      <div className="form__section">
        <label htmlFor="subject">Nombre:</label>
        <input
          type="text"
          className="form__input"
          name="name"
          value={contactForm.name}
          onChange={handleContactForm}
        />
      </div>

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
        <button type="submit" className="form__submit">Enviar <i className="fa-solid fa-paper-plane iconplane"></i></button>
      </div>
    </form>
  )
}

export default ContactForm;