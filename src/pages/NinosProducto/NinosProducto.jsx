import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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
    description: "Children's footwear",
    price: "$269,950",
    material: "Leather and suede",
    moreDescription:
      "Perfect for the little ones! These Nike baby shoes are ideal for giving them comfort and style from their first steps. Made from soft, lightweight materials, they provide the necessary support for growing feet, while their modern design ensures your little one looks amazing. The non-slip sole offers stability, making them perfect for babies to explore with confidence.",
  },
  {
    id: 2,
    img: "/assets/zapato2.jpg",
    title: "NIKE COURT BOROUGH",
    description: "Baby shoes",
    price: "$239,950",
    material: "Plastic and rubber",
    moreDescription:
      "Perfect for the little ones! These Nike baby shoes are ideal for giving them comfort and style from their first steps. Made from soft, lightweight materials, they provide the necessary support for growing feet, while their modern design ensures your little one looks amazing. The non-slip sole offers stability, making them perfect for babies to explore with confidence.",
  },
  {
    id: 3,
    img: "/assets/zapato3.jpg",
    title: "AIR JORDAN 3 RETRO",
    description: "Big boy shoes",
    price: "$564.950",
    material: "Fabric and rubber",
    moreDescription:
      "Comfort and style for the biggest ones! Nike kids' shoes are the perfect combination of comfort, durability and style. Designed with the energy and movement of little ones in mind, these shoes offer a comfortable and secure fit, ideal for everyday use. Nike cushioning technology ensures that every step is soft, providing support all day long, whether at school, playing or sporting activities.",
  },
  {
    id: 4,
    img: "/assets/zapato4.jpg",
    title: "NIKE FORCE 1 LOW SE EASYON",
    description: "Children's Footwear",
    price: "$524.950",
    material: "Synthetic and rubber",
    moreDescription:
      "Comfort and style for the biggest ones! Nike kids' shoes are the perfect combination of comfort, durability and style. Designed with the energy and movement of little ones in mind, these shoes offer a comfortable and secure fit, ideal for everyday use. Nike cushioning technology ensures that every step is soft, providing support all day long, whether at school, playing or sporting activities.",
  },
  {
    id: 5,
    img: "/assets/zapato5.jpg",
    title: "AIR JORDAN 1 LOW BG",
    description: "Children's Footwear",
    price: "$834.950",
    material: "Leather and fabric",
    moreDescription:
      "Comfort and style for the biggest ones! Nike kids' shoes are the perfect combination of comfort, durability and style. Designed with the energy and movement of little ones in mind, these shoes offer a comfortable and secure fit, ideal for everyday wear. Nike cushioning technology ensures that every step is soft, providing support all day long, whether at school, playing or sporting activities.",
  },
  {
    id: 6,
    img: "/assets/zapato6.jpg",
    title: "AIR JORDAN 1 LOW SE",
    description: "Big boy shoes",
    price: "$254.950",
    material: "Leather and synthetic",
    moreDescription:
      "Comfort and style for the biggest ones! Nike kids' shoes are the perfect combination of comfort, durability and style. Designed with the energy and movement of little ones in mind, these shoes offer a comfortable and secure fit, ideal for everyday use. Nike cushioning technology ensures that every step is soft, providing support all day long, whether at school, playing or sporting activities.",
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
      <i
        className="ri-arrow-left-circle-fill"
        style={{ color: "#1e40af", fontSize: "30px" }}
      ></i>
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
      <i
        className="ri-arrow-right-circle-fill"
        style={{ color: "#1e40af", fontSize: "30px" }}
      ></i>
    </div>
  );
};

const NinosProducto = () => {
  const { carrito, setCarrito } = useCart();

  const addToCart = () => {
    setCarrito((prevCarrito) => {
      const productoEnCarrito = prevCarrito.find(
        (item) => item.id === producto.id
      );
      if (!productoEnCarrito) {
        console.log("Product added:", producto);
        return [...prevCarrito, producto];
      } else {
        console.log("The product is already in the cart.");
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
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();
  const producto = productosNino.find((producto) => producto.id.toString() === id);

  if (!producto) {
    return <p>Producto no encontrado.</p>;
  }

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const navigate = useNavigate();

  return (
    <div>
      <main className="contenido-Ninos">
        <button className="btn-volver" onClick={() => navigate(-1)}>
          <i className="ri-arrow-left-line"></i> Return
        </button>
        <div className="ver-producto-Ninos">
          <img src={producto.img} alt={producto.title} />
          <div className="info-producto-Ninos">
            <h3>{producto.title}</h3>
            <h4>{producto.description}</h4>
            <h4 className="material-producto-Ninos">
              Main material: {producto.material}
            </h4>
            <p>{producto.price}</p>
            <div className="colorr-tallaa">
              <select name="color" id="color" className="select-ninoss">
                <option value="opcionColor">Color</option>
                <option value="rosa">Pink</option>
                <option value="negro">Black</option>
                <option value="azul">Blue</option>
                <option value="morado">Purple</option>
              </select>
              <select name="talla" id="talla" className="select-ninoss">
                <option value="opcionTalla">Size</option>
                <option value="35">35</option>
                <option value="36">36</option>
                <option value="37">37</option>
                <option value="38">38</option>
              </select>
            </div>
            <h4 className="ver-mas-ninos" onClick={openModal}>
              View product information
            </h4>
            <div className="boton-ninos" onClick={addToCart}>
              <button className="carrito-ninos">
                <i className="ri-shopping-cart-line"></i> Add to cart
              </button>
            </div>
          </div>
        </div>

        {isModalOpen && (
          <div className="modal-overlayy">
            <div className="modall">
              <button className="close-modall" onClick={closeModal}>
                &times;
              </button>
              <h3>Description:</h3>
              <p>{producto.moreDescription}</p>
            </div>
          </div>
        )}

        <hr className="division-productos-Ninos" />

        <div className="events-container-ninoss">
          <section className="events-upcomingg">
            <Slider {...settings}>
              {productosNino.map((producto) => (
                <div
                  key={producto.id}
                  className="event-cardd"
                  onClick={() => navigate(`/producto_nino/${producto.id}`)}
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
        </div>
      </main>
    </div>
  );
};

export default NinosProducto;
