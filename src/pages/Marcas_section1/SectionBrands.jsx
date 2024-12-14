import React from "react";
import './Marcas.css';

const SectionBrands = () => {
  return (
    <>
      <section className="section-BRANDS">
        <div className="container-principal-BRANDS">
          <div className="contenido-BRANDS">
            <h1 className="titulo-contenido-BRANDS">
              PASIÓN. POTENCIAL. <br />
              Y NUESTRA <br />
              BÚSQUEDA
            </h1>
            <p className="parrafo-contenido-BRANDS">
              NIKE no es solo un producto. NIKE es una filosofía. Es una actitud
              de vida: hacer más, llegar más lejos. Es sobre expandir los límites
              y cruzar las fronteras. Es crear el futuro. Esta filosofía se
              expresa en los campos de juego, en la playa o en las calles, porque
              es el pilar de todas las marcas de nuestra familia: NIKE, Converse y
              Jordan.
            </p>
          </div>
          <div className="imagen-BRANDS">
            <img
              src="assets/pexels-wendelmoretti-1869646.jpg"
              alt="Descripción de la imagen"
            />
          </div>
        </div>
        <span className="linea-BRANDS"></span>
      </section>

      <section className="section-marcas-BRANDS">
        <h1 className="titulo-marcas">NUESTRAS MARCAS</h1>
        <div className="container-principal-marcas-BRANDS">
          <div className="nike-BRANDS">
            <h2 className="titulo-nike-BRANDS">SIEMPRE<br/>
               ADELANTE<br/>
               SIEMPRE<br/>
               NIKE.</h2>
            <img
              src="assets/nike2-removebg-preview.png"
              alt="Logo de Nike"
            />
          </div>
          <div className="converse-BRANDS">
            <h2>SIGUE<br/> 
                AMANDO<br/>
                SIGUE<br/>
                LUCHANDO.</h2>
            <img
              src="assets/Converse-Logo-PNG-HD-Image-removebg-preview.png"
              alt="Logo de Converse"
            />
          </div>
          <div className="Jordan-BRANDS">
            <h2>NUESTRO<br/>
                TURNO.</h2>
            <img
              src="assets/jordan2-removebg-preview.png"
              alt="Logo de Jordan"
            />
          </div>
        </div>
        <span className="linea-BRANDS"></span>
      </section>

      <section className="section-BRANDS2">
        <div className="container-principal-BRANDS2">
          <div className="contenido-BRANDS2">
            <div className="imagen-section-BRANDS">
              <img src="assets/nike2-removebg-preview.png" alt="Nike Logo" />
            </div>
            <h1>CREAMOS EL FUTURO DEL DEPORTE</h1>
            <p>
              En NIKE, Inc., creemos en un mundo en el que todos son atletas,
              unidos por la alegría en movimiento. Guiados por nuestra pasión por
              el deporte y por nuestro instinto innovador, nos esforzamos por
              elevar el potencial humano.
            </p>
          </div>
          <div className="imagen-BRANDS2">
            <img src="assets/pexels-mgblr-3287160.jpg" alt="Imagen de deporte" />
          </div>
        </div>
        <span className="linea-BRANDS"></span>
      </section>

      <section className="section-BRANDS3">
        <div className="container-principal-BRANDS3">
          <div className="imagen-BRANDS3">
            <img
              src="assets/pexels-nina-hill-76946523-11402832.jpg"
              alt="Imagen relacionada con la marca"
            />
          </div>
          <div className="contenido-BRANDS3">
            <div className="imagen-section-BRANDS3">
              <img src="assets/Converse-Logo-PNG-HD-Image-removebg-preview.png" alt="Logo de Converse" />
            </div>
            <h1>CIEN AÑOS EN EL JUEGO</h1>
            <p>
              Converse viene definiendo la cultura desde lo urbano, lo deportivo
              y lo creativo desde su fundación, hace ya más de cien años. Basta
              con ver el Converse All-Star Chuck Taylor para comprobarlo.
            </p>
          </div>
        </div>
        <span className="linea-BRANDS"></span>
      </section>

      <section className="section-BRANDS4">
        <div className="container-principal-BRANDS4">
          <div className="contenido-BRANDS4">
            <div className="imagen-section-BRANDS4">
              <img src="assets/jordan2-removebg-preview.png" alt="Logo de Jordan" />
            </div>
            <h1>TRIBUTO A LA GRANDEZA</h1>
            <p>
              Lo que comenzó como un homenaje a un jugador (Michael Jordan) se
              ha vuelto sinónimo de rendimiento superior y de la búsqueda incesante
              de la excelencia.
            </p>
          </div>
          <div className="imagen-BRANDS4">
            <img
              src="assets/pexels-hamza01nsr-6023104.jpg"
              alt="Imagen de deporte o atleta"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionBrands;
