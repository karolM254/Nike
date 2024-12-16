import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../../components/Carrito/CartContext"; // Importa el contexto del carrito
import "../InfoProducto/InfoProducto.css";

const InfoProductoBasquet = () => {
  const { id } = useParams();
  const { carrito, setCarrito } = useCart(); // Accede al carrito y a la función para actualizarlo
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para el slider

  const products = [
    { id: 1, name: "NIKE MASTER CLASS", category: "Calzado de básquetbol", price: "$299.000", material: "Sintético", image: "/assets/basquet1.png", description: "Diseño innovador con tecnología para saltos más altos." },
    { id: 2, name: "NIKE LEGEND RAIN", category: "Calzado de básquetbol", price: "$499.000", material: "Sintético", image: "/assets/basquet2.png", description: "Perfecto para entrenamientos y partidos intensos." },
    { id: 3, name: "NIKE MULTI MASTER", category: "Calzado de básquetbol", price: "$999.000", material: "Sintético", image: "/assets/basquet3.png", description: "Ligero y cómodo para largas sesiones de juego." },
    { id: 4, name: "NIKE SUPERFLY VER", category: "Calzado de básquetbol", price: "$750.000", material: "Sintético", image: "/assets/basquet4.png", description: "Diseño elegante para jugadores profesionales." },
    { id: 5, name: "AIR SUPER STAR VOL", category: "Calzado de básquetbol", price: "$1.199.000", material: "Sintético", image: "/assets/basquet5.png", description: "Tracción excepcional para movimientos rápidos." },
    { id: 6, name: "NIKE JORDAN RETRO", category: "Calzado de básquetbol", price: "$399.000", material: "Sintético", image: "/assets/basquet6.png", description: "Clásico reinventado con mayor durabilidad y estilo." },
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
            <p>Estas zapatillas Nike para básquetbol combinan comodidad y estilo en un diseño pensado especialmente para destacar en la cancha. Fabricadas con material textil suave y sintético, ofrecen un ajuste cómodo que se adapta perfectamente a los pies, proporcionando soporte y estabilidad.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoProductoBasquet;

