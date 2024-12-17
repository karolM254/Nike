import React from "react";
import './Marcas.css';

const SectionBrands = () => {
  return (
    <>
      <section className="section-BRANDS">
        <div className="container-principal-BRANDS">
          <div className="contenido-BRANDS">
            <h1 className="titulo-contenido-BRANDS">
              PASSION. POTENTIAL. <br />
              AND OUR <br />
              QUEST
            </h1>
            <p className="parrafo-contenido-BRANDS">
              NIKE is not just a product. NIKE is a philosophy. It's a way of life: doing more, going further.
              It's about pushing boundaries and crossing borders. It’s about creating the future.
              This philosophy is expressed on the fields, on the beach, or in the streets, because
              it is the foundation of all the brands in our family: NIKE, Converse, and Jordan.
            </p>
          </div>
          <div className="imagen-BRANDS">
            <img
              src="assets/pexels-wendelmoretti-1869646.jpg"
              alt="Image description"
            />
          </div>
        </div>
        <span className="linea-BRANDS"></span>
      </section>

      <section className="section-marcas-BRANDS">
        <h1 className="titulo-marcas">OUR BRANDS</h1>
        <div className="container-principal-marcas-BRANDS">
          <div className="nike-BRANDS">
            <h2 className="titulo-nike-BRANDS">
              ALWAYS<br />
              FORWARD<br />
              ALWAYS<br />
              NIKE.</h2>
            <img
              src="assets/nike2-removebg-preview.png"
              alt="Nike Logo"
            />
          </div>
          <div className="converse-BRANDS">
            <h2>KEEP<br />
              LOVING<br />
              KEEP<br />
              FIGHTING.</h2>
            <img
              src="assets/Converse-Logo-PNG-HD-Image-removebg-preview.png"
              alt="Converse Logo"
            />
          </div>
          <div className="Jordan-BRANDS">
            <h2>OUR<br />
              TURN.</h2>
            <img
              src="assets/jordan2-removebg-preview.png"
              alt="Jordan Logo"
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
            <h1>WE CREATE THE FUTURE OF SPORT</h1>
            <p>
              At NIKE, Inc., we believe in a world where everyone is an athlete,
              united by the joy of movement. Guided by our passion for sport
              and our innovative instinct, we strive to elevate human potential.
            </p>
          </div>
          <div className="imagen-BRANDS2">
            <img src="assets/pexels-mgblr-3287160.jpg" alt="Sports image" />
          </div>
        </div>
        <span className="linea-BRANDS"></span>
      </section>

      <section className="section-BRANDS3">
        <div className="container-principal-BRANDS3">
          <div className="imagen-BRANDS3">
            <img
              src="assets/pexels-nina-hill-76946523-11402832.jpg"
              alt="Image related to the brand"
            />
          </div>
          <div className="contenido-BRANDS3">
            <div className="imagen-section-BRANDS3">
              <img src="assets/Converse-Logo-PNG-HD-Image-removebg-preview.png" alt="Converse Logo" />
            </div>
            <h1>A HUNDRED YEARS IN THE GAME</h1>
            <p>
              Converse has been defining culture through urban, sports,
              and creative expression for over a hundred years since its foundation.
              Just take a look at the Converse All-Star Chuck Taylor to prove it.
            </p>
          </div>
        </div>
        <span className="linea-BRANDS"></span>
      </section>

      <section className="section-BRANDS4">
        <div className="container-principal-BRANDS4">
          <div className="contenido-BRANDS4">
            <div className="imagen-section-BRANDS4">
              <img src="assets/jordan2-removebg-preview.png" alt="Jordan Logo" />
            </div>
            <h1>TRIBUTE TO GREATNESS</h1>
            <p>
              What began as a tribute to one player (Michael Jordan) has become synonymous
              with superior performance and the relentless pursuit of excellence.
            </p>
          </div>
          <div className="imagen-BRANDS4">
            <img
              src="assets/pexels-hamza01nsr-6023104.jpg"
              alt="Image of sport or athlete"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionBrands;
