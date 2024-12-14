import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Customize.css";

const Customize = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); // Estado para la imagen seleccionada
  const [borderColor] = useState("#1e40af"); // Estado fijo para el color del borde

  const productos = [
    {
      id: 1,
      img: "/assets/679005-500-500.webp",
      title: "AIR JORDAN 1 HIGH METHOD OF MAKE",
      description: "Calzado para mujer.",
      price: "$1.004.950",
      extraDescription:
        "Este modelo, inspirado en la elegancia y la funcionalidad, va más allá para que destaques con confianza. Los detalles en gamuza y el diseño envolvente se combinan para ofrecer un look moderno y versátil. Jugamos con acabados suaves y proporciones atrevidas, resaltando cada detalle para lograr un diseño único que fusiona moda y funcionalidad, ideal para mujeres que buscan comodidad sin renunciar al estilo.",
    },
    {
      id: 2,
      img: "/assets/678936-500-500.webp",
      title: "AIR JORDAN 1 LOW SE",
      description: "Calzado para mujer",
      price: "$834.950",
      extraDescription:
        "Diseño elegante con una silueta versátil y moderna. Perfecto para quienes buscan estilo y confort en cada paso.",
    },
  ];

  const openModal = (producto) => {
    setSelectedProduct(producto);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const handleImageClick = (imageId) => {
    setSelectedImage(imageId);
  };

  return (
    <div className="personaliza">
      <button className="back-button" onClick={() => window.history.back()}>
        <i className="ri-arrow-left-line"></i> Volver
      </button>
      <div className="titulo">
        <h1>PERSONALIZA AHORA TU CALZADO</h1>
      </div>
      <div className="personaliza-form">
        <div className="formulario-contenedor">
          <div className="formulario">
            <div className="container">
              <div className="form-group-contenedor">
                <div className="form-group">
                  <label>Selecciona el tipo de calzado</label>
                  <select>
                    <option>Calzado para mujer</option>
                    <option>Calzado para hombre</option>
                    <option>Calzado unisex</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Material principal</label>
                  <select>
                    <option>Seleccionar...</option>
                    <option>Cuero</option>
                    <option>Gamuza</option>
                    <option>Sintético</option>
                  </select>
                </div>
              </div>

              <div className="form-group-contenedor">
                <div className="form-group">
                  <label>Color</label>
                  <select>
                    <option>Seleccionar...</option>
                    <option>Negro</option>
                    <option>Blanco</option>
                    <option>Rosa</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Talla</label>
                  <select>
                    <option>Seleccionar...</option>
                    <option>35</option>
                    <option>36</option>
                    <option>37</option>
                  </select>
                </div>
              </div>
            </div>

            <p className="precio">{selectedProduct ? selectedProduct.price : "$ 1.004.950"}</p>
            <a href="#" className="form-link" onClick={() => openModal(productos[0])}>
              Ver información del producto
            </a>
            <button className="btn-carrito">
              <img className="carrito" src="public/assets/carrito-de-compras.png" alt="Carrito" /> Agregar al carrito
            </button>
          </div>
        </div>

        <div className="productos-relacionados">
          <h3>
            SELECCIONA LOS MEJORES<br></br>
            CALZADOS PARA <br></br>
            PERSONALIZAR
          </h3>
          {productos.map((producto) => (
            <div key={producto.id} className="producto-item">
              <img
                src={producto.img}
                alt={producto.title}
                onClick={() => handleImageClick(producto.id)}
                style={{ border: selectedImage === producto.id ? `5px solid ${borderColor}` : 'none' }}
              />
              <h4>{producto.title}</h4>
              <p>{producto.description}</p>
              <a href="#" onClick={() => openModal(producto)}>
              
              </a>
            </div>
          ))}
        </div>
      </div>

      {showModal && selectedProduct && (
        <div className="aleja">
          <div className="trejos">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p><strong>Descripción:</strong></p>
            <br />
            <p>{selectedProduct.extraDescription}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Customize;
