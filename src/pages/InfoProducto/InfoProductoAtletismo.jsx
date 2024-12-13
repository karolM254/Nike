import React, { useState } from "react"; // Asegúrate de importar useState
import { useParams, Link } from "react-router-dom";
import "../InfoProducto/InfoProducto.css";

const InfoProductoAtletismo = () => {
  const { id } = useParams(); // Obtener el ID del producto desde la URL
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal

  // Lista de productos simulada
  const products = [
    { id: 1, name: "NIKE PEGASSO INDOL", category: "Calzado para atletismo", price: "$650.000", material: "Sintético", image: "/assets/atletismo1.jpg", description: "Diseño innovador para carreras de velocidad." },
    { id: 2, name: "NIKE LEYEND REVOL", category: "Calzado para atletismo", price: "$750.000", material: "Sintético", image: "/assets/atletismo2.jpg", description: "Un diseño clásico para largas distancias." },
    { id: 3, name: "NIKE MASTERED V.22", category: "Calzado para atletismo", price: "$420.000", material: "Sintético", image: "/assets/atletismo3.jpg", description: "Ligero y cómodo para entrenamientos diarios." },
    { id: 4, name: "NIKE AIR ZOOM VER", category: "Calzado para atletismo", price: "$520.000", material: "Sintético", image: "/assets/atletismo4.jpg", description: "Perfecto para carreras y maratones." },
    { id: 5, name: "NIKE BLOOD SPEED 4", category: "Calzado para atletismo", price: "$1.199.000", material: "Sintético", image: "/assets/atletismo5.jpg", description: "Control y tracción en cada paso." },
    { id: 6, name: "NIKE PREDATOR ORA", category: "Calzado para atletismo", price: "$299.000", material: "Sintético", image: "/assets/atletismo6.jpg", description: "Estilo moderno para atletas." }
  ];

  // Encontrar el producto actual según el ID
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div className="product-page">
      {/* Botón para retroceder */}
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
            <p>Estas zapatillas Nike para atletismo combinan comodidad y rendimiento en un diseño pensado especialmente para maximizar la velocidad y la agilidad. Fabricadas con material textil suave y sintético, ofrecen un ajuste ligero y cómodo que se adapta perfectamente a los pies.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoProductoAtletismo;
