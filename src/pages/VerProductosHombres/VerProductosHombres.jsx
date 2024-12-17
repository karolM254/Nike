/* eslint-disable no-unused-vars */
import React, { useState } from 'react'; // Importa React y useState para manejar el estado
/* eslint-enable no-unused-vars */
import PropTypes from 'prop-types'; // Importa PropTypes para validar las props
import { Link, useNavigate, useParams } from 'react-router-dom'; // Importa funciones de react-router-dom
import Slider from "react-slick"; // Asegúrate de tener react-slick instalado
import "slick-carousel/slick/slick.css"; // Importa el archivo CSS de Slick para el slider
import "slick-carousel/slick/slick-theme.css"; // Importa el archivo CSS del tema de Slick
import './VerProductosHombres.css'; // Importa el archivo CSS específico para este componente
import { useCart } from "../../components/Carrito/CartContext"; // Importa el contexto del carrito

// Componente principal para mostrar los productos para hombres
function VerProductosHombres() {
  const { carrito, setCarrito } = useCart(); // Obtiene el carrito y la función para actualizarlo desde el contexto
  const navigate = useNavigate(); // Función para navegar entre páginas
  const { id } = useParams(); // Obtiene el id del producto desde la URL
  const [mostrarModal, setMostrarModal] = useState(false); // Estado para manejar la visibilidad del modal

  // Lista de productos de hombres (hardcoded)
  const productosHombre = [
    {
      id: '1',
      title: 'Air Jordan 11 Retro "Legend Blue"',
      descripcion: "Men's footwear",
      descripcion2: 'The rubber sole offers exceptional traction, ideal for quick changes of direction. Its padded tongue and collar ensure a comfortable and secure fit during the most intense games, while the round laces ensure a firm and uniform fit. Perfect for players looking to combine performance and style in every play',
      material: 'Main Material: Leather',
      price: '$ 1.294.950',
      img: "/assets/fototennis.jpg",
    },
    {
      id: '2',
      title: 'W Nike Zoom Bella 6 PRm',
      descripcion: "Men's footwear",
      descripcion2: 'The Nike Zoom Bella 6 PRM are tennis shoes designed to offer a perfect balance between style, comfort and functionality, ideal for dynamic training and daily use. With a modern and sophisticated design, these sneakers combine advanced technology with a versatile look so you can stay active without sacrificing your personal style.',
      material: 'Main Material: Leather',
      price: '$ 845.950',
      img: "/assets/678275-500-500.jpg",
    },
    {
      id: '3',
      title: 'Nike Full Force Low',
      descripcion: "Men's footwear",
      descripcion2: 'The Nike Full Force Low is a shoe that fuses urban style and functionality for everyday use. With a versatile and modern design, this model is ideal for those looking for a combination of comfort, durability and a casual look for everyday use. Its sole provides excellent cushioning and traction on different surfaces, while its resistant materials ensure a long useful life',
      material: 'Main Material: Leather',
      price: '$ 560.950',
      img: "/assets/677182-500-500.jpg",
    },
    {
      id: '4',
      title: 'Nike Cortez',
      descripcion: "Men's footwear",
      descripcion2: 'The Nike Cortez is a sports fashion classic that combines style and functionality. With a minimalist and elegant design, this model is ideal for those looking for a casual and versatile look for everyday use. Its sole provides excellent traction and cushioning, while its resistant materials ensure a long useful life. The lace-up fit and classic design make it an essential option to complement any outfit.',
      material: 'Main Material: Leather',
      price: '$ 380.950',
      img: "/assets/702841-500-500.jpg",
    },
    {
      id: '5',
      title: 'Nike C1TY',
      descripcion: "Men's footwear",
      descripcion2: 'The Nike C1TY is a model that reflects the urban spirit with a contemporary and versatile design. Inspired by street fashion, this sneaker offers an ideal combination of style and performance, with breathable materials that allow for all-day comfort. Its lightweight structure and flexible sole facilitate movement, while the minimalist aesthetic makes it ideal for both casual activities and more formal occasions.',
      material: 'Main Material: Leather',
      price: '$ 695.950',
      img: "/assets/713556-500-500.jpg",
    },
    {
      id: '6',
      title: 'Nike Killshot 2 Leather',
      descripcion: "Men's footwear",
      descripcion2: 'The Nike Killshot 2 Leather is a tennis shoe that combines style and functionality with a classic and sophisticated design. Inspired by the sports fashion of the 70s, this model offers an ideal combination of comfort, durability and an elegant look. Its sole provides excellent traction and cushioning, while its leather materials ensure long life.',
      material: 'Main Material: Leather',
      price: '$ 922.950',
      img: "/assets/678515-500-500.jpg",
    }
  ];

  // Busca el producto específico a partir del ID obtenido de la URL
  const producto = productosHombre.find((producto) => producto.id === id);

  // Función para agregar el producto al carrito
  const addToCart = () => {
    if (producto) {
      setCarrito((prevCarrito) => {
        // Verifica si el producto ya está en el carrito
        const productoEnCarrito = prevCarrito.find(item => item.id === producto.id);
        if (!productoEnCarrito) {
          console.log("Producto agregado:", producto); // Imprime el producto agregado
          const updatedCart = [...prevCarrito, producto]; // Agrega el producto al carrito
          console.log("Carrito actualizado:", updatedCart); // Imprime el carrito actualizado
          return updatedCart; // Devuelve el carrito actualizado
        } else {
          console.log("El producto ya está dentro del carrito"); // Imprime un mensaje si el producto ya está en el carrito
          return prevCarrito; // Devuelve el carrito sin cambios
        }
      });
    }
  };
  

  // Componentes para las flechas personalizadas del slider
  const CustomPrevArrow = (props) => {
    const { style, onClick } = props; // Recibe las propiedades de estilo y la función de clic
    return (
      <div
        className="custom-prev-arrow"
        style={{ ...style, display: "block", position: "absolute", left: "-30px", top: "45%", cursor: "pointer", zIndex: 2 }}
        onClick={onClick} // Al hacer clic, ejecuta la función onClick
      >
        <i className="ri-arrow-left-circle-fill" style={{ color: "#1e40af", fontSize: "30px" }}></i> {/* Icono para la flecha izquierda */}
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { style, onClick } = props; // Recibe las propiedades de estilo y la función de clic
    return (
      <div
        className="custom-next-arrow"
        style={{ ...style, display: "block", position: "absolute", right: "-20px", top: "45%", cursor: "pointer", zIndex: 2 }}
        onClick={onClick} // Al hacer clic, ejecuta la función onClick
      >
        <i className="ri-arrow-right-circle-fill" style={{ color: "#1e40af", fontSize: "30px" }}></i> {/* Icono para la flecha derecha */}
      </div>
    );
  };

  // Componente SliderMen que muestra los productos en un carrusel
  const SliderMen = ({ productosHombre, navigate }) => {
    const settings = {
      dots: true, // Muestra puntos de navegación
      infinite: true, // Habilita el desplazamiento infinito
      speed: 500, // Velocidad de transición
      slidesToShow: 3, // Número de elementos visibles en el carrusel
      slidesToScroll: 1, // Número de elementos a desplazar en cada paso
      prevArrow: <CustomPrevArrow />, // Flecha previa personalizada
      nextArrow: <CustomNextArrow />, // Flecha siguiente personalizada
      focusOnSelect: true, // Enfoque al seleccionar un elemento
      responsive: [
        {
          breakpoint: 768, // Ajustes para pantallas más pequeñas
          settings: {
            slidesToShow: 1, // Muestra solo 1 producto en pantallas pequeñas
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div className='events-container-men'> 
        <section className='events-upcoming'>
          <Slider {...settings}> {/* Inicia el slider con los ajustes anteriores */}
            {productosHombre.map((producto) => (
              <div 
                key={producto.id} 
                className="event-card" 
                onClick={() => navigate(`/productosHombre/${producto.id}`)} // Al hacer clic en el producto, navega a su detalle
                style={{ cursor: "pointer" }} // Cambia el cursor para indicar que es interactivo
              >
                <img src={producto.img} alt={producto.title} /> {/* Muestra la imagen del producto */}
                <h3>{producto.title}</h3> {/* Muestra el nombre del producto */}
                <p>Men's footwear</p> {/* Descripción del producto */}
                <p className='priceMen-slider'>{producto.price}</p> {/* Muestra el precio del producto */}
              </div>
            ))}
          </Slider>
        </section>
      </div>
    );
  };

  return (
    <>
      <button className="boton-regresar" onClick={() => navigate(-1)}>
        <i className="ri-arrow-left-line"></i> 
        <span className="text-men">return</span> 
      </button> {/* Botón para regresar a la página anterior */}
      <div className='verProductosHombres'>
        {producto ? ( // Si se encuentra el producto
          <div className="producto-detalle">
            <h1 className='tittle-productos-men'>{producto.title}</h1> {/* Título del producto */}
            <img src={producto.img} alt={producto.title} className="ImagenPrincipal" /> {/* Imagen principal */}
            <p className="descripcionMen" onClick={() => setMostrarModal(true)}>
              {producto.descripcion} {/* Descripción corta del producto */}
            </p>
            <p className="materialHombre">{producto.material}</p> {/* Material del producto */}
            <p className="PriceMen">{producto.price}</p> {/* Precio del producto */}
            
            <select>
              <option>Color</option> {/* Selección de color */}
              <option value="Blue">Blue</option>
              <option value="Red">Red</option>
              <option value="White">White</option>
              <option value="Black">Black</option>
              <option value="Yellow">Yellow</option>
              <option value="Green">Green</option>
              <option value="Orange">Orange</option>
              <option value="Grey">Gray</option>
              <option value="Skyblue">Sky-Blue</option>
              <option value="Brown">Brown</option>
            </select>
            <select>
              <option>Size</option> {/* Selección de tamaño */}
              <option value="6">US Size 6 </option>
              <option value="7">US Size 7</option>
              <option value="8">US Size 8</option>
              <option value="9">US Size 9</option>
              <option value="10">US Size 10</option>
              <option value="11">US Size 11</option>
              <option value="37">Size 37 EU </option>
              <option value="38">Size 38 EU</option>
              <option value="39">Size 39 EU</option>
              <option value="40">Size 39 EU</option>
              <option value="41">Size 41 EU</option>
              <option value="42">Size 42 EU</option>
              <option value="43">Size 43 EU</option>
            </select>
            <p className="moreInformationMen" onClick={() => setMostrarModal(true)} >
              See more product information  
            </p>

            {mostrarModal && ( // Si el estado de mostrarModal es true, muestra el modal
              <div className="modal-overlay">
                <div className="modal-hombre">
                  <button className="modal-close" onClick={() => setMostrarModal(false)}>
                    <span className="close-icon">✖</span> {/* Botón para cerrar el modal */}
                  </button>
                  <h2 className='descripcion-modal-hombre'>Description:</h2>
                  <p className='descripcion-producto-hombree'>{producto.descripcion2}</p> {/* Descripción extendida del producto */}
                </div>
              </div>
            )}

          <div className="btn-hombre" onClick={addToCart}>
            <button className="btn-aggCarrito">
              <i className="ri-shopping-cart-line"></i>Add to cart
            </button>
          </div> {/* Botón para agregar el producto al carrito */}

            <hr className='verhombre-hr' /> {/* Separador entre la información del producto y el slider */}

            {/* Integración del componente SliderMen para mostrar otros productos */}
            <SliderMen productosHombre={productosHombre} navigate={navigate} />
          </div>
        ) : ( // Si no se encuentra el producto, muestra un mensaje de error
          <p className="producto-no-encontrado">Producto no encontrado</p>
        )}
      </div>
    </>
  );
}

export default VerProductosHombres;
