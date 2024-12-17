// Reseñas.jsx
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './AtencionCliente.css';

function Reseñas() {
  const formRef = useRef();
  const [buttonText, setButtonText] = useState('Enviar');

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText('Enviando...');

    const serviceID = 'default_service';
    const templateID = 'template_wv3lm19';

    emailjs.sendForm(serviceID, templateID, formRef.current, '5FGNbmgYtzMrB5bNa')
      .then(() => {
        setButtonText('Enviar');
        alert('¡Correo enviado con éxito!');
        formRef.current.reset();
      })
      .catch((err) => {
        setButtonText('Enviar');
        alert(`Error al enviar el correo: ${JSON.stringify(err)}`);
      });
  };

  return (
    <>
      <button className="boton-regresar-atencion" onClick={() => navigate(-1)}>
        <i className="ri-arrow-left-line"></i> Volver
      </button>
      <div className="reseñas-container">
        <h1 className="title">ATENCIÓN AL CLIENTE</h1>
        <div className="linea-resenas"></div>
        <div>
          <form ref={formRef} className="form-client-atention" onSubmit={sendEmail} id="form">
            <div className="form-labels">
              <label htmlFor="from_name">Nombre Completo</label>
              <input type="text" id="from_name" name="from_name" className="input-text" required />

              <label htmlFor="number">Teléfono</label>
              <input type="number" id="number" name="number" className="input-text" required />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" className="input-text" required />
            </div>

            <label htmlFor="message">
              <strong>Comentario / Descripción del problema</strong>
            </label>
            <div className="coment-and-send-section">
              <textarea className="coment-area" id="message" name="message" rows="4" required></textarea>
              <button type="submit" className="btn-submit">
                <strong>{buttonText}</strong>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Reseñas;