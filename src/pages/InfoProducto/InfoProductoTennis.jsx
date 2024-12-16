import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../../components/Carrito/CartContext"; // Importa el contexto del carrito
import "../InfoProducto/InfoProducto.css";

const InfoProductoTennis = () => {
  const { id } = useParams();
  const { carrito, setCarrito } = useCart(); // Accede al carrito y a la función para actualizarlo
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para el slider

  const products = [

    { id: 1, name: "NIKE FUTURE RELAX", category: "Calzado de tennis", price: "$1.999.000", material: "Sintético", image: "/assets/tennis1.jpg", description: "Diseño futurista para máximo confort en cada paso." },
    { id: 2, name: "NIKE LEGEND BLUE", category: "Calzado de tennis", price: "$850.000", material: "Sintético", image: "/assets/tennis2.jpg", description: "Estilo legendario con soporte avanzado." },
    { id: 3, name: "NIKE AIR VER VOL", category: "Calzado de tennis", price: "$999.000", material: "Sintético", image: "/assets/tennis3.jpg", description: "Diseño ligero para mayor movilidad." },
    { id: 4, name: "AIR SUPER SMITH 1", category: "Calzado de tennis", price: "$399.000", material: "Sintético", image: "/assets/tennis4.jpg", description: "Elegancia y rendimiento para profesionales." },
    { id: 5, name: "NIKE AIR RATE WIN", category: "Calzado de tennis", price: "$499.000", material: "Sintético", image: "/assets/tennis5.jpg", description: "Comodidad y estilo en cada movimiento." },
    { id: 6, name: "NIKE AIM WHITE VER", category: "Calzado de tennis", price: "$599.000", material: "Sintético", image: "/assets/tennis6.jpg", description: "Diseño clásico con innovación moderna." },
    ];

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  // Control del slider
  const relatedProducts = products.filter((p) => p.id !== product.id);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? relatedProducts.length - 3 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === relatedProducts.length - 3 ? 0 : prevIndex + 1
    );
  };

  // Función para agregar el producto al carrito
  const agregarAlCarrito = () => {
    const productoEnCarrito = carrito.find((item) => item.id === product.id);

    if (productoEnCarrito) {
      alert("Este producto ya está en el carrito.");
    } else {
      setCarrito([...carrito, { ...product, cantidad: 1 }]);
      alert("Producto agregado al carrito.");
    }
  };

  return (
    <div className="product-page">
      <button className="back-button" onClick={() => window.history.back()}>
        <i className="ri-arrow-left-line"></i> Volver
      </button>

      <div className="product-detail">
        <div className="product-detail__image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-detail__info">
          <h1>{product.name}</h1>
          <h3>{product.category}</h3>
          <p>Material principal: {product.material || "No especificado"}</p>
          <h2>{product.price}</h2>
          <div className="product-detail__options">
            <select>
              <option>Color</option>
              <option>White</option>
              <option>Red</option>
            </select>
            <select>
              <option>Talla</option>
              <option>13</option>
              <option>14</option>
              <option>15</option>
              <option>16</option>
            </select>
          </div>
          <div className="button-container">
            <button className="product-detail__button" onClick={agregarAlCarrito}>
              <img src="/assets/carrito-de-compras.png" alt="Agregar al carrito" />
              Agregar al carrito
            </button>
            <Link to="/carrito" className="ver_carrito">
              <p>Ver carrito</p>
            </Link>
          </div>
          <Link to="#" className="product-detail__link" onClick={() => setIsModalOpen(true)}>
            Ver información del producto
          </Link>
        </div>
      </div>

      <hr className="divider" />

      {/* Slider de productos relacionados */}
      <div className="related-products-slider">
        <button className="slider-button prev" onClick={handlePrev}>
          <i className="ri-arrow-left-fill"></i>
        </button>

        <div className="slider-container">
          {relatedProducts.slice(currentIndex, currentIndex + 3).map((product) => (
            <div className="related-products__item" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <h4>{product.category}</h4>
              <p>{product.price}</p>
            </div>
          ))}
        </div>

        <button className="slider-button next" onClick={handleNext}>
          <i className="ri-arrow-right-fill"></i>
        </button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setIsModalOpen(false)}>
              &times;
            </span>
            <p><strong>Descripción:</strong></p>
            <p>Estas zapatillas Nike para tenis combinan comodidad y estilo en un diseño pensado especialmente para rendir al máximo en la cancha. Fabricadas con material textil suave y sintético, ofrecen un ajuste cómodo que se adapta perfectamente a los pies, proporcionando soporte y estabilidad.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoProductoTennis;