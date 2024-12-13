import React, { useState } from "react"; // Asegúrate de importar useState
import { useParams, Link } from "react-router-dom";
import "../InfoProducto/InfoProducto.css";

const InfoProductoBasquet = () => {
  const { id } = useParams(); // Obtener el ID del producto desde la URL
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal

  // Lista de productos simulada
  const products = [
    { id: 1, name: "NIKE MASTER CLASS", category: "Calzado de básquetbol", price: "$299.000", material: "Sintético", image: "/assets/basquet1.png", description: "Diseño innovador con tecnología para saltos más altos." },
    { id: 2, name: "NIKE LEGEND RAIN", category: "Calzado de básquetbol", price: "$499.000", material: "Sintético", image: "/assets/basquet2.png", description: "Perfecto para entrenamientos y partidos intensos." },
    { id: 3, name: "NIKE MULTI MASTER", category: "Calzado de básquetbol", price: "$999.000", material: "Sintético", image: "/assets/basquet3.png", description: "Ligero y cómodo para largas sesiones de juego." },
    { id: 4, name: "NIKE SUPERFLY VER", category: "Calzado de básquetbol", price: "$750.000", material: "Sintético", image: "/assets/basquet4.png", description: "Diseño elegante para jugadores profesionales." },
    { id: 5, name: "AIR SUPER STAR VOL", category: "Calzado de básquetbol", price: "$1.199.000", material: "Sintético", image: "/assets/basquet5.png", description: "Tracción excepcional para movimientos rápidos." },
    { id: 6, name: "NIKE JORDAN RETRO", category: "Calzado de básquetbol", price: "$399.000", material: "Sintético", image: "/assets/basquet6.png", description: "Clásico reinventado con mayor durabilidad y estilo." },
  ];

  // Encontrar el producto actual según el ID
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div className="product-page">
      {/* Botón para regresar */}
      <button className="back-button" onClick={() => window.history.back()}>
        <i className="ri-arrow-left-line"></i> Volver
      </button>

      {/* Detalle del producto */}
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
            </select>
            <select>
              <option>Talla</option>
            </select>
          </div>
          <Link
            to="#"
            className="product-detail__link"
            onClick={() => setIsModalOpen(true)} // Abrir modal
          >
            Ver información del producto
          </Link>
          <button className="product-detail__button">
            <img src="/assets/carrito-de-compras.png" alt="Agregar al carrito" />
            Agregar al carrito
          </button>
        </div>
      </div>

      {/* Línea divisoria */}
      <hr className="divider" />

      {/* Productos relacionados */}
      <div className="related-products">
        {products
          .filter((p) => p.id !== product.id) // Excluir el producto actual
          .slice(0, 3) // Mostrar un máximo de tres productos
          .map((relatedProduct) => (
            <div key={relatedProduct.id} className="related-products__item">
              <img src={relatedProduct.image} alt={relatedProduct.name} />
              <h3>{relatedProduct.name}</h3>
              <h4>{relatedProduct.category}</h4>
              <p>{relatedProduct.price}</p>
            </div>
          ))}
      </div>

      {/* Modal */}
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
            <p>Estas zapatillas Nike para básquetbol combinan comodidad y estilo en un diseño pensado especialmente para destacar en la cancha. Fabricadas con material textil suave y sintético, ofrecen un ajuste cómodo que se adapta perfectamente a los pies, proporcionando soporte y estabilidad.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoProductoBasquet;





