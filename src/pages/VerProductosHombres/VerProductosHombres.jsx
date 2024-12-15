/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
/* eslint-enable no-unused-vars */
import PropTypes from 'prop-types'; // Importar PropTypes para validar props
import { Link, useNavigate, useParams } from 'react-router-dom';
import Slider from "react-slick"; // Asegúrate de tener react-slick instalado
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './VerProductosHombres.css';
import { useCart } from "../../components/Carrito/CartContext";

function VerProductosHombres() {

  const { carrito, setCarrito } = useCart();
  // Estado para el arreglo de productos en el carrito

  const addToCart = () => {
    console.log("Producto ID:", producto.idMen); // Verifica que el id se esté tomando correctamente
    setCarrito((prevCarrito) => {
      const productoEnCarrito = prevCarrito.find(item => item.idMen === producto.idMen);
      if (!productoEnCarrito) {
        console.log("Producto agregado:", producto);
        return [...prevCarrito, producto];
      } else {
        console.log("El producto ya está dentro del carrito");
        return prevCarrito;
      }
    });
  };
  

  const navigate = useNavigate(); // Creamos la función navigate


  // Componentes para las flechas personalizadas
  const CustomPrevArrow = (props) => {
    const { style, onClick } = props;
    return (
      <div
        style={{ ...style, display: "block", position: "absolute", left: "-30px", top: "45%", cursor: "pointer", zIndex: 2 }}
        onClick={onClick}
      >
        <i className="ri-arrow-left-circle-fill" style={{ color: "#1e40af", fontSize: "30px" }}></i>
      </div>
    );
  };

  CustomPrevArrow.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
  };

  const CustomNextArrow = (props) => {
    const { style, onClick } = props;
    return (
      <div
        style={{ ...style, display: "block", position: "absolute", right: "-20px", top: "45%", cursor: "pointer", zIndex: 2 }}
        onClick={onClick}
      >
        <i className="ri-arrow-right-circle-fill" style={{ color: "#1e40af", fontSize: "30px" }}></i>
      </div>
    );
  };

  CustomNextArrow.propTypes = {
      className: PropTypes.string,
      style: PropTypes.object,
      onClick: PropTypes.func,
  };

  const SliderMen = () => {
      const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          prevArrow: <CustomPrevArrow />,
          nextArrow: <CustomNextArrow />,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
      };

      return (
          <div className='events-container'>

              <section className='events-upcoming'>
                  <Slider {...settings}>
                      <div className="event-card">
                          <img src="/assets/702841-500-500.jpg" alt="NIKE CORTEZ" />
                          <h3>NIKE CORTEZ</h3>
                          <p className='.titttle-producto-carousel-men' >Calzado para hombre</p>
                          <p className='priceMen-slider-2'>$ 380.950</p>
                      </div>
                      <div className="event-card">
                          <img src= "/assets/713556-500-500.jpg" alt="NIKE C1TY" />
                          <h3>Nike C1TY</h3>
                          <p>Calzado para hombre</p>
                          <p className='priceMen-slider'>$ 695.950</p>
                      </div>
                      <div className="event-card">
                          <img src="/assets/678515-500-500.jpg" alt="NIKE KILLSHOT 2 LEATHER" />
                          <h3>Nike Killshot 2 Leather</h3>
                          <p>Calzado para hombre</p>
                          <p className='priceMen-slider'>$ 922.950</p>
                      </div>
                  </Slider>
              </section>
          </div>
      );
  };


    const { idMen } = useParams(); // Obtiene el id del producto desde la URL
    const [mostrarModal, setMostrarModal] = useState(false);

    const productosHombre = [
        {
            idMen: '1',
            nombre: 'Air Jordan 11 Retro "Legend Blue"',
            descriMepcion: 'Calzado Para hombre',
            descripcion2: 'La suela de goma ofrece una tracción excepcional, ideal para cambios rápidos de dirección. Su lengüeta y cuello acolchados garantizan un ajuste cómodo y seguro durante los juegos más intensos, mientras que las agujetas redondas aseguran un ajuste firme y uniforme. Perfectos para jugadores que buscan combinar rendimiento y estilo en cada jugada',
            material: 'Material Principal: Cuero',
            precio: '$ 1.294.950',
            imagen: "/assets/fototennis.jpg",
        },
        {
          idMen: '2',
          nombre: 'W Nike Zoom Bella 6 PRm',
          descripcion: 'Calzado Para hombre',
          descripcion2: 'Los Nike Zoom Bella 6 PRM son tenis diseñados para ofrecer un equilibrio perfecto entre estilo, comodidad y funcionalidad, ideales para entrenamientos dinámicos y uso diario. Con un diseño moderno y sofisticado, estos tenis combinan tecnología avanzada con un look versátil para que te mantengas activo sin sacrificar tu estilo personal.',
          material: 'Material Principal: Cuero',
          precio: '$ 845.950',
          imagen: "/assets/678275-500-500.jpg",
        },
        {
          idMen: '3',
          nombre: 'Nike Full Force Low',
          descripcion: 'Calzado Para hombre',
          descripcion2: 'El Nike Full Force Low es un tenis que fusiona estilo urbano y funcionalidad para el uso diario. Con un diseño versátil y moderno, este modelo es ideal para quienes buscan una combinación de comodidad, durabilidad y un look casual para el día a día. Su suela proporciona una excelente amortiguación y tracción en diferentes superficies, mientras que sus materiales resistentes aseguran una larga vida útil.',
          material: 'Material Principal: Cuero',
          precio: '$ 560.950',
          imagen: "/assets/677182-500-500.jpg",
        },
        {
          idMen: '4',
          nombre: 'Nike Cortez',
          descripcion: 'Calzado Para hombre',
          descripcion2: 'El Nike Cortez es un clásico de la moda deportiva que combina estilo y funcionalidad. Con un diseño minimalista y elegante, este modelo es ideal para quienes buscan un look casual y versátil para el día a día. Su suela proporciona una excelente tracción y amortiguación, mientras que sus materiales resistentes aseguran una larga vida útil. El ajuste con cordones y su diseño clásico lo convierten en una opción imprescindible para complementar cualquier outfit.',
          material: 'Material Principal: Cuero',
          precio: '$ 380.950',
          imagen: "/assets/702841-500-500.jpg",
        },
        {
          idMen: '5',
          nombre: 'Nike C1TY',
          descripcion: 'Calzado Para hombre',
          descripcion2: 'El Nike C1TY es un modelo que refleja el espíritu urbano con un diseño contemporáneo y versátil. Inspirado en la moda callejera, este tenis ofrece una combinación ideal de estilo y rendimiento, con materiales transpirables que permiten comodidad durante todo el día. Su estructura ligera y su suela flexible facilitan el movimiento, mientras que la estética minimalista lo hace ideal tanto para actividades casuales como para ocasiones más formales.',
          material: 'Material Principal: Cuero',
          precio: '$ 695.950',
          imagen: "/assets/713556-500-500.jpg",
        },
        {
          idMen: '6',
          nombre: 'Nike Killshot 2 Leather',
          descripcion: 'Calzado Para hombre',
          descripcion2: 'El Nike Killshot 2 Leather es un tenis que combina estilo y funcionalidad con un diseño clásico y sofisticado. Inspirado en la moda deportiva de los años 70, este modelo ofrece una combinación ideal de comodidad, durabilidad y un look elegante. Su suela proporciona una excelente tracción y amortiguación, mientras que sus materiales de cuero aseguran una larga vida útil.',
          material: 'Material Principal: Cuero',
          precio: '$ 922.950',
          imagen: "/assets/678515-500-500.jpg",
        }
      ];
    const producto = productosHombre.find((producto) => producto.idMen === idMen);

    return (
      <>
        <button className="boton-regresar" onClick={() => navigate(-1)}>
        <i className="ri-arrow-left-line"></i> Volver
        </button>
        <div>
            {producto ? (
                <div className="producto-detalle">
                    <h1 className='tittle-productos-men'>{producto.nombre}</h1>
                    <img src={producto.imagen} alt={producto.nombre} className="ImagenPrincipal" />
                    <p className="descripcionMen" onClick={() => setMostrarModal(true)}>
                        {producto.descripcion}
                    </p>
                    <p className="materialHombre">{producto.material}</p>
                    <p className="PriceMen">{producto.precio}</p>

                    <select>
                        <option>Color</option>
                        <option value="Azul">Azul</option>
                        <option value="Rojo">Rojo</option>
                        <option value="Blanco">Blanco</option>
                        <option value="Negro">Negro</option>
                        <option value="Amarillo">Amarillo</option>
                    </select>
                    <select>
                        <option>Talla</option>
                        <option value="US Size 9">US Size 9</option>
                        <option value="US Size 10">US Size 10</option>
                        <option value="US Size 11">US Size 11</option>
                        <option value="Size 39 EU">Size 39 EU</option>
                        <option value="Size 40 EU">Size 39 EU</option>
                        <option value="Size 41 EU">Size 41 EU</option>
                        <option value="Size 42 EU">Size 42 EU</option>
                        <option value="Size 43 EU">Size 43 EU</option>
                    </select>
                    <p className="moreInformationMen" onClick={() => setMostrarModal(true)}>
                        Ver más información del producto
                    </p>

                    {mostrarModal && (
                        <div className="modal-overlay">
                            <div className="modal-hombre">
                                <button className="modal-close" onClick={() => setMostrarModal(false)}>
                                    <span className="close-icon">✖</span>
                                </button>
                                <h2 className='descripcion-modal-hombre'>Descripción:</h2>
                                <p>{producto.descripcion2}</p>
                            </div>
                        </div>
                    )}
                    <div>

                    <div className="btn-hombre" onClick={addToCart}>
                      <button className="btn-aggCarrito"> <i className="ri-shopping-cart-line"></i>Agregar al carrito</button>
                      
                      <div>
                        <button className="ver-carrito-men">
                          <Link to="/carrito">Ver carrito</Link>
                        </button>
                      </div>
                    </div>
                    </div>
                    <hr className='verhombre-hr'/>

                    {/* Integración del componente SliderMen */}
                    <SliderMen />
                </div>
            ) : (
                <p className="producto-no-encontrado">Producto no encontrado</p>
            )}
        </div>
       </>
    );
}
      
      

export default VerProductosHombres;

