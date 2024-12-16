import React, { useState } from "react";
import {  Link, useNavigate, useParams } from "react-router-dom";
import Slider from "react-slick";
import "./MujeresProducto.css";
import "slick-carousel/slick/slick.css";
import { useCart } from "../../components/Carrito/CartContext";
import "slick-carousel/slick/slick-theme.css";


const MujeresProducto = () => {
  const { carrito, setCarrito } = useCart();
  // Estado para el arreglo de productos en el carrito

  const addToCart = () => {
    setCarrito((prevCarrito) => {
      const productoEnCarrito = prevCarrito.find(item => item.id === producto.id);
      if (!productoEnCarrito) {
        console.log("Producto agregado:", producto);
        return [...prevCarrito, producto];
      } else {
        console.log("El producto ya está dentro del carrito");
        return prevCarrito;
      }
    });
  };

  const navigate = useNavigate(); // Hook para navegar

  // Componentes para las flechas personalizadas
  const CustomPrevArrow = (props) => {
    const { style, onClick } = props;
    return (
      <div
        style={{ ...style, display: "block", position: "absolute", left: "8px", top: "45%", cursor: "pointer", zIndex: 2 }}
        onClick={onClick}
      >
        <i className="ri-arrow-left-circle-fill" style={{ color: "#1e40af", fontSize: "30px" }}></i>
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { style, onClick } = props;
    return (
      <div
        style={{ ...style, display: "block", position: "absolute", right: "8px", top: "45%", cursor: "pointer", zIndex: 2 }}
        onClick={onClick}
      >
        <i className="ri-arrow-right-circle-fill" style={{ color: "#1e40af", fontSize: "30px" }}></i>
      </div>
    );
  };


  const SliderWomen = () => {
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
          breakpoint: 768, // Para pantallas pequeñas
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }

    return (
      <section className='events-upcoming'>
        <Slider {...settings}>
          {productos.map((producto) => (
            <div
              key={producto.id}
              className="event-card"
              onClick={() => setProductoSeleccionado(producto)}
              style={{ cursor: "pointer" }}
              >
              <img src={producto.img} alt={producto.title} />
                  <h4>{producto.title}</h4>
                  <div className="precio-mujeres">
                    <h5>{producto.description}</h5>
                    <p>{producto.price}</p>
                  </div>
            </div>
          ))}
        </Slider>
      </section>
    );
   
  }

  // Obtener el id del producto desde la URL
  const { id } = useParams();
  // Estado para controlar la visibilidad del modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  // Lista de productos 
  const productos = [
    {
      id: 1,
      img: "/assets/679005-500-500.webp",
      title: "AIR JORDAN 1 HIGH METHOD OF MAKE",
      description: "Calzado para mujer",
      price: "$1,004,950",
      material: "Cuero y gamuza",
      moreDescription: "Este modelo, inspirado en la elegancia y la funcionalidad, va más allá para que destaques con confianza. Los detalles en gamuza y el diseño envolvente se combinan para ofrecer un look moderno y versátil. Jugamos con acabados suaves y proporciones atrevidas, resaltando cada detalle para lograr un diseño único que fusiona moda y funcionalidad, ideal para mujeres que buscan comodidad sin renunciar al estilo.",
    },
    {
      id: 2,
      img: "/assets/677567-500-500.webp",
      title: "NIKE VICTORI ONE",
      description: "Chancla para mujer",
      price: "$199,950",
      material: "Plástico y goma",
      moreDescription: "Este modelo, inspirado en la elegancia y la funcionalidad, va más allá para que destaques con confianza. Los detalles en gamuza y el diseño envolvente se combinan para ofrecer un look moderno y versátil. Jugamos con acabados suaves y proporciones atrevidas, resaltando cada detalle para lograr un diseño único que fusiona moda y funcionalidad, ideal para mujeres que buscan comodidad sin renunciar al estilo.",
    },
    {
      id: 3,
      img: "/assets/678301-500-500.webp",
      title: "NIKE AIR MAX SC",
      description: "Calzado para mujer",
      price: "$564,950",
      material: "Tela y goma",
      moreDescription: "Este modelo, inspirado en la elegancia y la funcionalidad, va más allá para que destaques con confianza. Los detalles en gamuza y el diseño envolvente se combinan para ofrecer un look moderno y versátil. Jugamos con acabados suaves y proporciones atrevidas, resaltando cada detalle para lograr un diseño único que fusiona moda y funcionalidad, ideal para mujeres que buscan comodidad sin renunciar al estilo.",
    },
    {
      id: 4,
      img: "/assets/678274-500-500.webp",
      title: "W NIKE ZOOM BELLA 6 PRM",
      description: "Calzado para mujer",
      price: "$524,950",
      material: "Sintético y goma",
      moreDescription: "Este modelo, inspirado en la elegancia y la funcionalidad, va más allá para que destaques con confianza. Los detalles en gamuza y el diseño envolvente se combinan para ofrecer un look moderno y versátil. Jugamos con acabados suaves y proporciones atrevidas, resaltando cada detalle para lograr un diseño único que fusiona moda y funcionalidad, ideal para mujeres que buscan comodidad sin renunciar al estilo.",
    },
    {
      id: 5,
      img: "/assets/678936-500-500.webp",
      title: "AIR JORDAN 1 LOW SE",
      description: "Calzado para mujer",
      price: "$834,950",
      material: "Cuero y tela",
      moreDescription: "Este modelo, inspirado en la elegancia y la funcionalidad, va más allá para que destaques con confianza. Los detalles en gamuza y el diseño envolvente se combinan para ofrecer un look moderno y versátil. Jugamos con acabados suaves y proporciones atrevidas, resaltando cada detalle para lograr un diseño único que fusiona moda y funcionalidad, ideal para mujeres que buscan comodidad sin renunciar al estilo.",
    },
    {
      id: 6,
      img: "/assets/677786-500-500.webp",
      title: "NIKE COURT VISION ALTA",
      description: "Calzado para mujer",
      price: "$254,950",
      material: "Cuero y sintético",
      moreDescription: "Este modelo, inspirado en la elegancia y la funcionalidad, va más allá para que destaques con confianza. Los detalles en gamuza y el diseño envolvente se combinan para ofrecer un look moderno y versátil. Jugamos con acabados suaves y proporciones atrevidas, resaltando cada detalle para lograr un diseño único que fusiona moda y funcionalidad, ideal para mujeres que buscan comodidad sin renunciar al estilo.",
    },
  ];


  // Buscar el producto con el id correspondiente
  const producto = productos.find((producto) => producto.id.toString() === id);

  if (!producto) {
    return <p>Producto no encontrado.</p>;
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [productoSeleccionado, setProductoSeleccionado] = useState(productos[0]);

  
  return (
    <div>
      <main className="contenido-mujeres">
        {/* Botón para regresar */}
        <button className="boton-regresar" onClick={() => navigate(-1)}>
          <i className="ri-arrow-left-line"></i> Volver
        </button>
        {/* Producto destacado */}
        <div className="ver-producto-mujer">
          <img src={productoSeleccionado.img} alt={productoSeleccionado.title} />
          <div className="info-producto-mujer">
            <h3>{productoSeleccionado.title}</h3>
            <h4 className="info-producto-mujer-parrafo2">{productoSeleccionado.description}</h4>
            <h4 className="material-producto-mujer">
              Material principal: {productoSeleccionado.material}
            </h4>
            <p>{productoSeleccionado.price}</p>
            <div className="color-talla">
              <select name="color" id="color" className="select-mujeres">
                <option value="opcionColor">Color</option>
                <option value="rosa">Rosa</option>
                <option value="negro">Negro</option>
                <option value="azul">Azul</option>
                <option value="morado">Morado</option>
              </select>
              <select name="talla" id="talla" className="select-mujeres">
                <option value="opcionTalla">Talla</option>
                <option value="35">35</option>
                <option value="36">36</option>
                <option value="37">37</option>
                <option value="38">38</option>
              </select>
            </div>
            <h4 className="ver-mas-mujeres" onClick={openModal}>
              Ver información del producto
            </h4>
            <div className="boton-mujeres" onClick={addToCart}>
              <button className="carrito-mujeres">
                <i className="ri-shopping-cart-line"></i> Agregar al carrito
              </button>
            </div>
            
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-mujer">
              <button className="close-modal" onClick={closeModal}>
                &times; {/* Representación de la "x" */}
              </button>
              <h3>Descripción:</h3>
              <p>{productoSeleccionado.moreDescription}</p>
            </div>
          </div>
        )}

        <hr className="division-productos-mujeres" />

        
      </main>
      {/* Integración del componente SliderWomen */}
      <SliderWomen />
    </div>
  );

  
};

export default MujeresProducto;