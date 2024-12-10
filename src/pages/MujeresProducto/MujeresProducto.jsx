import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./MujeresProducto.css";

// Lista de productos 
const productos = [
  {
    id: 1,
    img: "/assets/679005-500-500.webp",
    title: "AIR JORDAN 1 HIGH METHOD OF MAKE",
    description: "Calzado para mujer",
    price: "$1.004.950",
    material: "Cuero y gamuza",
    moreDescription: "Este modelo, inspirado en la elegancia y la funcionalidad, va más allá para que destaques con confianza. Los detalles en gamuza y el diseño envolvente se combinan para ofrecer un look moderno y versátil. Jugamos con acabados suaves y proporciones atrevidas, resaltando cada detalle para lograr un diseño único que fusiona moda y funcionalidad, ideal para mujeres que buscan comodidad sin renunciar al estilo.",
  },
  {
    id: 2,
    img: "/assets/677567-500-500.webp",
    title: "NIKE VICTORI ONE",
    description: "Chancla para mujer",
    price: "$199.950",
    material: "Plástico y goma",
    moreDescription: "Este modelo, inspirado en la elegancia y la funcionalidad, va más allá para que destaques con confianza. Los detalles en gamuza y el diseño envolvente se combinan para ofrecer un look moderno y versátil. Jugamos con acabados suaves y proporciones atrevidas, resaltando cada detalle para lograr un diseño único que fusiona moda y funcionalidad, ideal para mujeres que buscan comodidad sin renunciar al estilo.",
  },
  {
    id: 3,
    img: "/assets/678301-500-500.webp",
    title: "NIKE AIR MAX SC",
    description: "Calzado para mujer",
    price: "$564.950",
    material: "Tela y goma",
    moreDescription: "Este modelo, inspirado en la elegancia y la funcionalidad, va más allá para que destaques con confianza. Los detalles en gamuza y el diseño envolvente se combinan para ofrecer un look moderno y versátil. Jugamos con acabados suaves y proporciones atrevidas, resaltando cada detalle para lograr un diseño único que fusiona moda y funcionalidad, ideal para mujeres que buscan comodidad sin renunciar al estilo.",
  },
  {
    id: 4,
    img: "/assets/678274-500-500.webp",
    title: "W NIKE ZOOM BELLA 6 PRM",
    description: "Calzado para mujer",
    price: "$524.950",
    material: "Sintético y goma",
    moreDescription: "Este modelo, inspirado en la elegancia y la funcionalidad, va más allá para que destaques con confianza. Los detalles en gamuza y el diseño envolvente se combinan para ofrecer un look moderno y versátil. Jugamos con acabados suaves y proporciones atrevidas, resaltando cada detalle para lograr un diseño único que fusiona moda y funcionalidad, ideal para mujeres que buscan comodidad sin renunciar al estilo.",
  },
  {
    id: 5,
    img: "/assets/678936-500-500.webp",
    title: "AIR JORDAN 1 LOW SE",
    description: "Calzado para mujer",
    price: "$834.950",
    material: "Cuero y tela",
    moreDescription: "Este modelo, inspirado en la elegancia y la funcionalidad, va más allá para que destaques con confianza. Los detalles en gamuza y el diseño envolvente se combinan para ofrecer un look moderno y versátil. Jugamos con acabados suaves y proporciones atrevidas, resaltando cada detalle para lograr un diseño único que fusiona moda y funcionalidad, ideal para mujeres que buscan comodidad sin renunciar al estilo.",
  },
  {
    id: 6,
    img: "/assets/677786-500-500.webp",
    title: "NIKE COURT VISION ALTA",
    description: "Calzado para mujer",
    price: "$254.950",
    material: "Cuero y sintético",
    moreDescription: "Este modelo, inspirado en la elegancia y la funcionalidad, va más allá para que destaques con confianza. Los detalles en gamuza y el diseño envolvente se combinan para ofrecer un look moderno y versátil. Jugamos con acabados suaves y proporciones atrevidas, resaltando cada detalle para lograr un diseño único que fusiona moda y funcionalidad, ideal para mujeres que buscan comodidad sin renunciar al estilo.",
  },
];

const MujeresProducto = () => {
  // Estado para controlar la visibilidad del modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Obtener el id del producto desde la URL
  const { id } = useParams();

  // Buscar el producto con el id correspondiente
  const producto = productos.find((producto) => producto.id.toString() === id);

  if (!producto) {
    return <p>Producto no encontrado.</p>;
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <main className="contenido-mujeres">
        {/* Producto destacado */}
        <div className="ver-producto-mujer">
          <img src={producto.img} alt={producto.title} />
          <div className="info-producto-mujer">
            <h3>{producto.title}</h3>
            <h4>{producto.description}</h4>
            <h4 className="material-producto-mujer">
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
            <h4 className="ver-mas-mujeres" onClick={openModal}>
              Ver información del producto
            </h4>
            <div className="boton-mujeres">
              <button className="carrito-mujeres">
                <i className="ri-shopping-cart-line"></i> Agregar al carrito
              </button>
            </div>
          </div>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <button className="close-modal" onClick={closeModal}>
                &times; {/* Representación de la "x" */}
              </button>
              <h3>Descripción:</h3>
              <p>{producto.moreDescription}</p>
            </div>
          </div>
        )}

        <hr className="division-productos-mujeres" />

        {/* Grid de productos relacionados */}
        <div className="grid-contenido-mujeres">
          {productos.map((producto) => (
            <div className="col" key={producto.id}>
              <img src={producto.img} alt={producto.title} />
              <h4>{producto.title}</h4>
              <div className="precio-mujeres">
                <h5>{producto.description}</h5>
                <p>{producto.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MujeresProducto;
