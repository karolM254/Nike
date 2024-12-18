import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Slider from "react-slick";
import "../InfoProducto/InfoProducto.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useCart } from "../../components/Carrito/CartContext";

const InfoProducto = () => {
  const { carrito, setCarrito } = useCart();
  const navigate = useNavigate();
  const { slug } = useParams();

  // Lista de productos
  const productos = [
    {
      slug: "nike-master-legend-air",
      title: "NIKE MASTER LEGEND AIR",
      description: "Tennis of soccer",
      price: "$399,00",
      img: "/assets/guayo1.jpg",
      material: "Synthetic",
      moreDescription:
        "The upper, made with Flyknit technology, adapts perfectly to the foot, providing a glove-like fit and superior support during quick movements. In addition, its Dynamic Fit Collar design provides a smooth transition between the ankle and leg, improving stability and comfort.",
    },
    {
      slug: "nike-air-more-top",
      title: "NIKE AIR MORE TOP",
      description: "Tennis of soccer",
      price: "$349,99",
      img: "/assets/guayo2.jpg",
      material: "Leather",
      moreDescription:
        "The upper, made with Flyknit technology, adapts perfectly to the foot, providing a glove-like fit and superior support during quick movements. In addition, its Dynamic Fit Collar design provides a smooth transition between the ankle and leg, improving stability and comfort.",
    },
    {
      slug: "nike-air-superstar",
      title: "NIKE AIR SUPERSTAR",
      description: "Tennis of soccer",
      price: "$264,95",
      img: "/assets/guayo3.jpg",
      material: "Mesh",
      moreDescription:
        "The upper, made with Flyknit technology, adapts perfectly to the foot, providing a glove-like fit and superior support during quick movements. In addition, its Dynamic Fit Collar design provides a smooth transition between the ankle and leg, improving stability and comfort.",
    },
    {
      slug: "nike-air-wonder-rain",
      title: "NIKE AIR WONDER RAIN",
      description: "Tennis of soccer",
      price: "$124,95",
      img: "/assets/guayo4.jpg",
      material: "Synthetic",
      moreDescription:
        "The upper, made with Flyknit technology, adapts perfectly to the foot, providing a glove-like fit and superior support during quick movements. In addition, its Dynamic Fit Collar design provides a smooth transition between the ankle and leg, improving stability and comfort.",
    },
    {
      slug: "nike-super-street",
      title: "NIKE SUPER STREET",
      description: "Tennis of soccer",
      price: "$534,95",
      img: "/assets/guayo5.jpg",
      material: "Textile",
      moreDescription:
        "The upper, made with Flyknit technology, adapts perfectly to the foot, providing a glove-like fit and superior support during quick movements. In addition, its Dynamic Fit Collar design provides a smooth transition between the ankle and leg, improving stability and comfort.",
    },
    {
      slug: "nike-black-classic",
      title: "NIKE BLACK CLASSIC",
      description: "Tennis of soccer",
      price: "$654,95",
      img: "/assets/guayo6.jpg",
      material: "Synthetic Leather",
      moreDescription:
        "The upper, made with Flyknit technology, adapts perfectly to the foot, providing a glove-like fit and superior support during quick movements. In addition, its Dynamic Fit Collar design provides a smooth transition between the ankle and leg, improving stability and comfort.",
    },
  ];

  // Estado para el producto seleccionado
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  // Estados para color y talla seleccionados
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    if (slug) {
      const producto = productos.find((prod) => prod.slug === slug);
      setProductoSeleccionado(producto);
    } else {
      setProductoSeleccionado(productos[0]);
    }
  }, [slug]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const addToCart = () => {
    if (productoSeleccionado) {
      if (!selectedColor || !selectedSize) {
        alert("Please select a color and size before adding to cart.");
        return;
      }

      setCarrito((prevCarrito) => {
        const productoEnCarrito = prevCarrito.find(
          (item) =>
            item.slug === productoSeleccionado.slug &&
            item.selectedColor === selectedColor &&
            item.selectedSize === selectedSize
        );

        if (!productoEnCarrito) {
          const updatedCart = [
            ...prevCarrito,
            { ...productoSeleccionado, selectedColor, selectedSize },
          ];
          console.log("Producto agregado:", updatedCart);
          return updatedCart;
        } else {
          alert("This product with the selected color and size is already in the cart.");
          return prevCarrito;
        }
      });
    }
  };

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
          style={{ color: "#1e40af", fontSize: "30px", marginLeft: "-10px"}}
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
          style={{ color: "#1e40af", fontSize: "30px", marginRight: "-10px"}}
        ></i>
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
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
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
      <section className="events-upcoming">
        <Slider {...settings}>
          {productos.map((producto) => (
            <div
              key={producto.slug}
              className="event-card"
              onClick={() => setProductoSeleccionado(producto)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={producto.img}
                alt={producto.title}
                className="slider-image"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              />
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
  };

  return (
    <div>
      <main className="contenido-mujeres">
        <button className="boton-regresar" onClick={() => navigate(-1)}>
          <i className="ri-arrow-left-line"></i> Return
        </button>

        {productoSeleccionado && (
          <div className="ver-producto-mujer">
            <img
              src={productoSeleccionado.img}
              alt={productoSeleccionado.title}
            />
            <div className="info-producto-mujer">
              <h3>{productoSeleccionado.title}</h3>
              <h4 className="info-producto-mujer-parrafo2">
                {productoSeleccionado.description}
              </h4>
              <h4 className="material-producto-mujer">
                Main Material: {productoSeleccionado.material}
              </h4>
              <p>{productoSeleccionado.price}</p>
              <div className="color-talla">
                <select
                  name="color"
                  id="color"
                  className="select-mujeres"
                  onChange={(e) => setSelectedColor(e.target.value)}
                >
                  <option value="color">Color</option>
                  <option value="rosa">Pink</option>
                  <option value="negro">Black</option>
                  <option value="azul">Blue</option>
                  <option value="verde">Green</option>
                  <option value="amarillo">Yellow</option>
                </select>
                <select
                  name="size"
                  id="size"
                  className="select-mujeres"
                  onChange={(e) => setSelectedSize(e.target.value)}
                >
                  <option value="talla">Size</option>
                  <option value="35">35</option>
                  <option value="36">36</option>
                  <option value="37">37</option>
                  <option value="38">38</option>
                  <option value="39">39</option>
                  <option value="40">40</option>
                  <option value="41">41</option>
                  <option value="42">42</option>
                </select>
              </div>
              <h4 className="ver-mas-mujeres" onClick={openModal}>
              See More Product Information
              </h4>
              <div className="acciones">
                <button className="boton-mujer" onClick={addToCart}>
                  <i className="ri-shopping-cart-line"></i> Add to cart
                </button>
              </div>
            </div>
          </div>
        )}

{isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-mujer">
              <button className="close-modal" onClick={closeModal}>
                &times;
              </button>
              <h3>Description:</h3>
              <p>{productoSeleccionado.moreDescription}</p>
            </div>
          </div>
        )}

        <hr className="division-productos-mujeres" />
      </main>

      <SliderWomen />
    </div>
  );
};

export default InfoProducto;


