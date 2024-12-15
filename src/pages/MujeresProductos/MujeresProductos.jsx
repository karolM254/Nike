import { useState } from "react";
import { Link } from "react-router-dom";
import "./MujeresProductos.css"; // Estilos específicos del componente

const MujeresProductos = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el buscador

  // Lista de productos
  const productos = [
    {
      id: 1,
      nombre: "AIR JORDAN 1 HIGH METHOD OF MAKE",
      descripcion: "Calzado para mujer",
      precio: "$1.004.950",
      img: "/assets/679005-500-500.webp",
    },
    {
      id: 2,
      nombre: "NIKE VICTORI ONE",
      descripcion: "Chancla para mujer",
      precio: "$199.950",
      img: "/assets/677567-500-500.webp",
    },
    {
      id: 3,
      nombre: "NIKE AIR MAX SC",
      descripcion: "Calzado para mujer",
      precio: "$564.950",
      img: "/assets/678301-500-500.webp",
    },
    {
      id: 4,
      nombre: "W NIKE ZOOM BELLA 6 PRM",
      descripcion: "Calzado para mujer",
      precio: "$524.950",
      img: "/assets/678274-500-500.webp",
    },
    {
      id: 5,
      nombre: "AIR JORDAN 1 LOW SE",
      descripcion: "Calzado para mujer",
      precio: "$834.950",
      img: "/assets/678936-500-500.webp",
    },
    {
      id: 6,
      nombre: "NIKE COURT VISION ALTA",
      descripcion: "Calzado para mujer",
      precio: "$254.950",
      img: "/assets/677786-500-500.webp",
    },
  ];

  // Filtrar productos por el nombre del zapato
  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <main className="contenido-mujeres">
        {/* Buscador */}
        <div className="buscador-mujeres-productos">
          <div className="buscador-mujeres">
            <i className="ri-search-line"></i>
            <input
              type="text"
              placeholder="Buscar"
              className="buscar-producto-mujer"
              value={searchTerm} // Valor del input
              onChange={(e) => setSearchTerm(e.target.value)} // Actualizar estado
            />
          </div>
        </div>

        {/* Grid de contenido */}
        <div className="grid-contenido-mujeres">
          {productosFiltrados.map((producto) => (
            <div className="col" key={producto.id}>
              <Link to={`/producto/${producto.id}`}>
                <img src={producto.img} alt={producto.nombre} />
              </Link>
              <h4>{producto.nombre}</h4>
              <div className="precio-mujeres">
                <h5>{producto.descripcion}</h5>
                <p>{producto.precio}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mas-productos-mujeres"></div>
      </main>
    </div>
  );
};

export default MujeresProductos;
