import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../InfoProducto/InfoProducto.css";

const InfoProducto = () => {
  const { id } = useParams(); // Obtener el ID del producto desde la URL
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para el slider

  const products = [
    { id: 1, name: "NIKE MASTER LEGEND", category: "Guayos para fútbol", price: "$599.950", material: "Sintético", image: "/assets/guayo1.jpg", description: "Comodidad y estilo con materiales sintéticos de alta calidad." },
    { id: 2, name: "CLASSIC NIKE AIR", category: "Guayos para fútbol", price: "$450.000", material: "Sintético", image: "/assets/guayo2.jpg", description: "Un diseño clásico con máxima durabilidad." },
    { id: 3, name: "AIR FLY LIMIT NONE", category: "Guayos para fútbol", price: "$620.000", material: "Sintético", image: "/assets/guayo3.jpg", description: "Diseñado para quienes buscan ligereza y velocidad." },
    { id: 4, name: "AIR SUPERFLY NEED", category: "Guayos de Futbol", price: "$850.000", material: "Sintético", image: "/assets/guayo4.jpg", description: "Elegancia y alto rendimiento en la cancha." },
    { id: 5, name: "AIR SUPER STAR VOL", category: "Guayos de Futsal", price: "$499.000", material: "Sintético", image: "/assets/guayo5.jpg", description: "Perfecto para jugadores de futsal que buscan control total." },
    { id: 6, name: "CLASSIC NIKE BLACK", category: "Guayos de Futbol", price: "$750.000", material: "Sintético", image: "/assets/guayo6.jpg", description: "Diseño clásico en color negro para un toque profesional." }
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
            <button className="product-detail__button">
              <img src="/assets/carrito-de-compras.png" alt="Agregar al carrito" />
              Agregar al carrito
            </button>
            <Link to="carrito" className="ver_carrito">
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
        <i class="ri-arrow-left-fill"></i>
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
        <i class="ri-arrow-right-fill"></i>
        </button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Evitar cerrar al hacer clic dentro del modal
          >
            <span className="close" onClick={() => setIsModalOpen(false)}>
              &times;
            </span>
            <p><strong>Descripción:</strong></p>
            <p>Estos guayos Nike para fútbol combinan comodidad y estilo en un diseño pensado especialmente para resaltar elegancia y clase. Fabricado con material textil suave y sintético, proporciona un ajuste cómodo que se adapta perfectamente a los pies. Suela flexible y antideslizante para mayor seguridad.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoProducto;
