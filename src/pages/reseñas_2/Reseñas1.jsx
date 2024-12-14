import React from "react";
import "./Reseñas.css";

function Reseñas1() {
  return (
    <div className="absolute-container">
      <div className="title-container">
        <h1 className="titulo">Reseñas</h1>
        <div className="line"></div>
      </div>
      <div className="contenedor-padre">
        <button className="boton-navegacion-izquierda">&lt;</button>

        <div className="contenedor-hijo">
          <img src='./img/avatar1.jpg' alt="Nelson Nigel" className="avatar" />
          <h2 className="title-avatar">Nelson Nigel</h2>
          <div className="estrellas">★★★★★</div>
          <div className="text-container">
            <p className="resena-text">"La página es intuitiva y fácil de usar. Encontré todo lo que buscaba rápidamente."</p>
          </div>
        </div>

        <div className="contenedor-hijo">
          <img src="/src/img/avatar2.jpg" alt="Wilson Ortiz" className="avatar" />
          <h2 className="title-avatar">Wilson Ortiz</h2>
          <div className="estrellas">★★★★★</div>
          <div className="text-container">
            <p className="resena-text">"Me encanta lo fácil que es navegar en la página. Todo bien organizado y con mucha variedad."</p>
          </div>
        </div>

        <div className="contenedor-hijo">
          <img src="/src/img/avatar3.jpg" alt="Olivia Morales" className="avatar" />
          <h2 className="title-avatar">Olivia Morales</h2>
          <div className="estrellas">★★★★★</div>
          <div className="text-container">
            <p className="resena-text">"Gran selección de productos y detalles claros sobre cada artículo. ¡10/10!"</p>
          </div>
        </div>

        <div className="contenedor-hijo">
          <img src="/src/img/avatar4.jpg" alt="Carlos Cataño" className="avatar" />
          <h2 className="title-avatar">Carlos Cataño</h2>
          <div className="estrellas">★★★★★</div>
          <div className="text-container">
            <p className="resena-text">"Ofrecen promociones increíbles, y el proceso de pago es muy seguro y confiable."</p>
          </div>
        </div>

        <button className="boton-navegacion-derecha">&gt;</button>
      </div>

      <div className="stars-filter">
        <div className="cuadro-estrella">Todas</div>
        <div className="cuadro-estrella">5 ★</div>
        <div className="cuadro-estrella">4 ★</div>
        <div className="cuadro-estrella">3 ★</div>
        <div className="cuadro-estrella">2 ★</div>
        <div className="cuadro-estrella">1 ★</div>
      </div>
    </div>
  );
}

export default Reseñas1;