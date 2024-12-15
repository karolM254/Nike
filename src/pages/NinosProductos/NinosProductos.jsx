import { useState } from "react";
import { Link } from "react-router-dom";
import "./NinosProductos.css";

const NinosProductos = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el buscador

  // Lista de productos
  const productos = [
    {
      id: 1,
      nombre: "NIKE CORTEZ EASYON",
      descripcion: "Calzado para niño",
      precio: "$269,950",
      img: "/assets/zapato1.jpg",
    },
    {
      id: 2,
      nombre: "NIKE COURT BOROUGH",
      descripcion: "Calzado para bebé",
      precio: "$239,950",
      img: "/assets/zapato2.jpg",
    },
    {
      id: 3,
      nombre: "AIR JORDAN 3 RETRO",
      descripcion: "Calzado para niño grande",
      precio: "$934,950",
      img: "/assets/zapato3.jpg",
    },
    {
      id: 4,
      nombre: "NIKE FORCE 1 LOW SE EASYON",
      descripcion: "Calzado para niño",
      precio: "$504,950",
      img: "/assets/zapato4.jpg",
    },
    {
      id: 5,
      nombre: "AIR JORDAN 1 LOW BG",
      descripcion: "Calzado para niño",
      precio: "$654,950",
      img: "/assets/zapato5.jpg",
    },
    {
      id: 6,
      nombre: "AIR JORDAN 1 LOW SE",
      descripcion: "Calzado para niño grande",
      precio: "$734,950",
      img: "/assets/zapato6.jpg",
    },
  ];

  // Filtrar productos basados epor el nombre del zapato
  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <main className="contenido-Ninos">
        {/* Buscador */}
        <div className="buscador-Ninos-productos">
          <div className="buscador-Ninos">
            <i className="ri-search-line"></i>
            <input
              type="text"
              placeholder="Buscar"
              className="buscar-producto"
              value={searchTerm} // Valor del input
              onChange={(e) => setSearchTerm(e.target.value)} // Actualizar estado
            />
          </div>
        </div>

        {/* Grid de contenido */}
        <div className="grid-contenido-Ninos">
          {productosFiltrados.map((producto) => (
            <div className="col" key={producto.id}>
              <Link to={`/producto_nino/${producto.id}`}>
                <img src={producto.img} alt={producto.nombre} />
              </Link>
              <h4>{producto.nombre}</h4>
              <div className="precio-Ninos">
                <h5>{producto.descripcion}</h5>
                <p>{producto.precio}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default NinosProductos;
