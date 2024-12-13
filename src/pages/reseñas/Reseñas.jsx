// Reseñas.jsx
import React from 'react';
import './Reseñas.css'; // Si tienes estilos específicos para este componente

function Reseñas() {
  return (
    <div className="reseñas-container">
      <h2 className="title" >ATENCIÓN AL CLIENTE</h2>
      <div className="line"></div>
      <div>
        <form action="#" method="post">
          <div className="form-labels ">
              <label htmlFor="nombre">Nombre Completo</label>
              <input type="text" id="nombre" name="nombre" required />
              <label htmlFor="apellido">Teléfono</label>
              <input type="text" id="apellido" name="apellido" required />
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
          </div>
          <label htmlFor="comentario">
            <strong>Comentario / Descripción del problema</strong>
          </label>
          <div className="coment-and-send-section">
              <textarea id="comentario" name="comentario" rows="4" required></textarea>
              <button type="submit" className="btn-submit">
                <strong>ENVIAR</strong>
              </button>
          </div>
        </form>
    </div>
    </div>
  );
}

export default Reseñas; // Exportar el componente
