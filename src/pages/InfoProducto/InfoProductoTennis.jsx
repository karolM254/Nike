import React, { useState } from "react"; // Asegúrate de importar useState
import { useParams, Link } from "react-router-dom";
import "../InfoProducto/InfoProducto.css";

const InfoProductoTennis = () => {
  const { id } = useParams(); // Obtener el ID del producto desde la URL
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal

  // Lista de productos simulada
  const products = [
    { id: 1, name: "NIKE FUTURE RELAX", category: "Calzado de tennis", price: "$1.999.000", material: "Sintético", image: "/assets/tennis1.jpg", description: "Diseño futurista para máximo confort en cada paso." },
    { id: 2, name: "NIKE LEGEND BLUE", category: "Calzado de tennis", price: "$850.000", material: "Sintético", image: "/assets/tennis2.jpg", description: "Estilo legendario con soporte avanzado." },
    { id: 3, name: "NIKE AIR VER VOL", category: "Calzado de tennis", price: "$999.000", material: "Sintético", image: "/assets/tennis3.jpg", description: "Diseño ligero para mayor movilidad." },
    { id: 4, name: "AIR SUPER SMITH 1", category: "Calzado de tennis", price: "$399.000", material: "Sintético", image: "/assets/tennis4.jpg", description: "Elegancia y rendimiento para profesionales." },
    { id: 5, name: "NIKE AIR RATE WIN", category: "Calzado de tennis", price: "$499.000", material: "Sintético", image: "/assets/tennis5.jpg", description: "Comodidad y estilo en cada movimiento." },
    { id: 6, name: "NIKE AIM WHITE VER", category: "Calzado de tennis", price: "$599.000", material: "Sintético", image: "/assets/tennis6.jpg", description: "Diseño clásico con innovación moderna." },
  ];

  // Encontrar el producto actual según el ID
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div className="product-page">
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
            <p>Estas zapatillas Nike para tenis combinan comodidad y estilo en un diseño pensado especialmente para rendir al máximo en la cancha. Fabricadas con material textil suave y sintético, ofrecen un ajuste cómodo que se adapta perfectamente a los pies, proporcionando soporte y estabilidad. </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoProductoTennis;
