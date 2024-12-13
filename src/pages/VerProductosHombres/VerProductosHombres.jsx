import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Importamos useNavigate
import PropTypes from 'prop-types';
import Slider from "react-slick"; // Asegúrate de tener react-slick instalado
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './VerProductosHombres.css';

function VerProductosHombres() {
    const navigate = useNavigate(); // Creamos la función navigate

    const CustomPrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", position: "absolute", left: "-60px", top: "45%", cursor: "pointer", zIndex: 2 }}
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
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", position: "absolute", right: "-17px", top: "45%", cursor: "pointer", zIndex: 2 }}
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

    const { idMen } = useParams();
    const [mostrarModal, setMostrarModal] = useState(false);

    const productosHombre = [
        {
            idMen: '1',
            nombre: 'Air Jordan 11 Retro "Legend Blue"',
            descripcion: 'Calzado Para hombre',
            descripcion2: 'La suela de goma ofrece una tracción excepcional...',
            material: 'Material Principal: Cuero',
            precio: '$ 1.294.950',
            imagen: "/assets/fototennis.jpg",
        },
        {
          idMen: '2',
          nombre: 'W Nike Zoom Bella 6 PRm',
          descripcion: 'Calzado Para hombre',
          descripcion2: 'Los Nike Zoom Bella 6 PRM son tenis diseñados...',
          material: 'Material Principal: Cuero',
          precio: '$ 845.950',
          imagen: "/assets/678275-500-500.jpg",
        },
        // Otros productos...
    ];

    const producto = productosHombre.find((producto) => producto.idMen === idMen);

    return (
        <div>
        <button className="boton-regresar" onClick={() => navigate(-1)}>
        <i className="ri-arrow-left-line"></i> Volver
        </button>

            {producto ? (
                <div className="producto-detalle">
                    <h1>{producto.nombre}</h1>
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
                            <div className="modal">
                                <button className="modal-close" onClick={() => setMostrarModal(false)}>
                                    <span className="close-icon">✖</span>
                                </button>
                                <h2>Descripción:</h2>
                                <p>{producto.descripcion2}</p>
                            </div>
                        </div>
                    )}

                    <span className="logo-carro-2">
                        <i className="ri-shopping-cart-line"></i>
                    </span>
                    <button className="btn-aggCarrito">Agregar al carrito</button>
                    <hr />

                    {/* Integración del componente SliderMen */}
                    <SliderMen />
                </div>
            ) : (
                <p className="producto-no-encontrado">Producto no encontrado</p>
            )}
        </div>
    );
}

export default VerProductosHombres;
