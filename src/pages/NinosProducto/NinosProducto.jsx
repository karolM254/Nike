import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./NinosProducto.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useCart } from "../../components/Carrito/CartContext";

// Lista de productos 
const productosNino = [
  {
    id: 1,
    img: "/assets/zapato1.jpg",
    title: "NIKE CORTEZ EASYON",
    description: "Calzado para niño",
    price: "$269,950",
    material: "Cuero y gamuza",
    moreDescription: "¡Perfectos para los más pequeños! Estos zapatos Nike para bebé son ideales para darles comodidad y estilo desde sus primeros pasos. Hechos con materiales suaves y livianos, proporcionan el soporte necesario para los pies en crecimiento, mientras que su diseño moderno asegura que tu pequeño luzca increíble. La suela antideslizante ofrece estabilidad, lo que hace que sean perfectos para que los bebés exploren con confianza.",
  },
  {
    id: 2,
    img: "/assets/zapato2.jpg",
    title: "NIKE COURT BOROUGH",
    description: "Calzado para bebé",
    price: "$239,950",
    material: "Plástico y goma",
    moreDescription: "¡Perfectos para los más pequeños! Estos zapatos Nike para bebé son ideales para darles comodidad y estilo desde sus primeros pasos. Hechos con materiales suaves y livianos, proporcionan el soporte necesario para los pies en crecimiento, mientras que su diseño moderno asegura que tu pequeño luzca increíble. La suela antideslizante ofrece estabilidad, lo que hace que sean perfectos para que los bebés exploren con confianza.",
  },
  {
    id: 3,
    img: "/assets/zapato3.jpg",
    title: "NIKE AIR MAX SC",
    description: "Calzado para Ninos",
    price: "$564.950",
    material: "Tela y goma",
    moreDescription: "¡Comodidad y estilo para los más grandes! Los zapatos Nike para niños son la combinación perfecta de comodidad, durabilidad y estilo. Diseñados pensando en la energía y el movimiento de los más pequeños, estos zapatos ofrecen un ajuste cómodo y seguro, ideal para el día a día. La tecnología de amortiguación de Nike asegura que cada paso sea suave, brindando soporte durante todo el día, ya sea en la escuela, jugando o en actividades deportivas.",
  },
  {
    id: 4,
    img: "/assets/zapato4.jpg",
    title: "W NIKE ZOOM BELLA 6 PRM",
    description: "Calzado para Ninos",
    price: "$524.950",
    material: "Sintético y goma",
    moreDescription: "¡Comodidad y estilo para los más grandes! Los zapatos Nike para niños son la combinación perfecta de comodidad, durabilidad y estilo. Diseñados pensando en la energía y el movimiento de los más pequeños, estos zapatos ofrecen un ajuste cómodo y seguro, ideal para el día a día. La tecnología de amortiguación de Nike asegura que cada paso sea suave, brindando soporte durante todo el día, ya sea en la escuela, jugando o en actividades deportivas.",
  },
  {
    id: 5,
    img: "/assets/zapato5.jpg",
    title: "AIR JORDAN 1 LOW SE",
    description: "Calzado para Ninos",
    price: "$834.950",
    material: "Cuero y tela",
    moreDescription: "¡Comodidad y estilo para los más grandes! Los zapatos Nike para niños son la combinación perfecta de comodidad, durabilidad y estilo. Diseñados pensando en la energía y el movimiento de los más pequeños, estos zapatos ofrecen un ajuste cómodo y seguro, ideal para el día a día. La tecnología de amortiguación de Nike asegura que cada paso sea suave, brindando soporte durante todo el día, ya sea en la escuela, jugando o en actividades deportivas.",
  },
  {
    id: 6,
    img: "/assets/zapato6.jpg",
    title: "NIKE COURT VISION ALTA",
    description: "Calzado para Ninos",
    price: "$254.950",
    material: "Cuero y sintético",
    moreDescription: "¡Comodidad y estilo para los más grandes! Los zapatos Nike para niños son la combinación perfecta de comodidad, durabilidad y estilo. Diseñados pensando en la energía y el movimiento de los más pequeños, estos zapatos ofrecen un ajuste cómodo y seguro, ideal para el día a día. La tecnología de amortiguación de Nike asegura que cada paso sea suave, brindando soporte durante todo el día, ya sea en la escuela, jugando o en actividades deportivas.",
  },
];

// Componentes para las flechas personalizadas
const CustomPrevArrow = (props) => {
  const { style, onClick } = props;
  return (
    <div
      style={{
        ...style,
        display: "block",
        position: "absolute",
        left: "8px",
        top: "45%",
        cursor: "pointer",
        zIndex: 2,
      }}
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
      style={{
        ...style,
        display: "block",
        position: "absolute",
        right: "8px",
        top: "45%",
        cursor: "pointer",
        zIndex: 2,
      }}
      onClick={onClick}
    >
      <i className="ri-arrow-right-circle-fill" style={{ color: "#1e40af", fontSize: "30px" }}></i>
    </div>
  );
};

const NinosProducto = () => {
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
  };

  // Estado para controlar la visibilidad del modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Obtener el id del producto desde la URL
  const { id } = useParams();

  // Buscar el producto con el id correspondiente
  const producto = productosNino .find((producto) => producto.id.toString() === id);

  if (!producto) {
    return <p>Producto no encontrado.</p>;
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [productoSeleccionado, setProductoSeleccionado] = useState(productosNino[0]);

  return (
    <div>
      <main className="contenido-Ninos">
        {/* Producto destacado */}
        <div className="ver-producto-Ninos">
          <img src={producto.img} alt={producto.title} />
          <div className="info-producto-Ninos">
            <h3>{producto.title}</h3>
            <h4>{producto.description}</h4>
            <h4 className="material-producto-Ninos">
              Material principal: {producto.material}
            </h4>
            <p>{producto.price}</p>
            <div className="color-talla">
              <select name="color" id="color">
                <option value="opcionColor">Color</option>
                <option value="rosa">Rosa</option>
                <option value="negro">Negro</option>
                <option value="azul">Azul</option>
                <option value="morado">Morado</option>
              </select>
              <select name="talla" id="talla">
                <option value="opcionTalla">Talla</option>
                <option value="35">35</option>
                <option value="36">36</option>
                <option value="37">37</option>
                <option value="38">38</option>
              </select>
            </div>
            <h4 className="ver-mas-Ninos" onClick={openModal}>
              Ver información del producto
            </h4>
            <div className="boton-Ninos" onClick={addToCart}>
              <button className="carrito-Ninos">
                <i className="ri-shopping-cart-line"></i> Agregar al carrito
              </button>
              <div>
                <button className="ver-carrito">
                  <Link to="/carrito">Ver carrito</Link>
                </button>
            </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="modal-overlayy">
            <div className="modall">
              <button className="close-modall" onClick={closeModal}>
                &times;
              </button>
              <h3>Descripción:</h3>
              <p>{producto.moreDescription}</p>
            </div>
          </div>
        )}

        <hr className="division-productos-Ninos" />

        {/* Slider */}
        <section class="events-upcomingg">
          <Slider {...settings}>
            {productosNino.map((producto) => (
              <div key={producto.id}
              className="event-cardd"
              onClick={() => setProductoSeleccionado(producto)}
              style={{ cursor: "pointer" }}
              >
                <img src={producto.img} alt={producto.title} />
                <h4>{producto.title}</h4>
                <div className="precio-Ninoss">
                  <h5>{producto.description}</h5>
                  <p>{producto.price}</p>
                </div>
              </div>
            ))}
          </Slider>
        </section>
      </main>
    </div>
  );
};

export default NinosProducto;

