import React from 'react';
import "./BtnCotizar.css"

const BtnCotizar = () => {
  return (
    <a
      href="https://api.whatsapp.com/send/?phone=573147561960&amp;text&amp;type=phone_number&amp;app_absent=0" target="_blank" className="btn-cotiza">
      Cotiza Con Nosotros &nbsp;
      <i class="fa-solid fa-pencil fa-bounce"></i>
    </a>
  );
}

export default BtnCotizar;