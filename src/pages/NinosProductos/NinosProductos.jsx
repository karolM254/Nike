import { useState } from "react";
import { Link } from "react-router-dom";
import "./NinosProductos.css";

const NinosProductos = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el buscador

  // Lista de productos
  const productos = [
    {
      id: "1",
      nombre: "NIKE CORTEZ EASYON",
      descripcion: "Children's footwear",
      precio: "$62,47",
      img: "/assets/zapato1.jpg",
    },
    {
      id: 2,
      nombre: "NIKE COURT BOROUGH",
      descripcion: "Baby shoes",
      precio: "$55,49",
      img: "/assets/zapato2.jpg",
    },
    {
      id: 3,
      nombre: "AIR JORDAN 3 RETRO",
      descripcion: "Big boy shoes",
      precio: "$216,31",
      img: "/assets/zapato3.jpg",
    },
    {
      id: 4,
      nombre: "NIKE FORCE 1 LOW SE EASYON",
      descripcion: "Children's footwear",
      precio: "$115,77",
      img: "/assets/zapato4.jpg",
    },
    {
      id: 5,
      nombre: "AIR JORDAN 1 LOW BG",
      descripcion: "Children's footwear",
      precio: "$151,46",
      img: "/assets/zapato5.jpg",
    },
    {
      id: 6,
      nombre: "AIR JORDAN 1 LOW SE",
      descripcion: "Big boy shoes",
      precio: "$169,96",
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
        <div className="buscador-Ninos-productoss">
          <div className="buscador-Ninoss">
            <i className="ri-search-line"></i>
            <input
              type="text"
              placeholder="Search"
              className="buscar-productoo"
              value={searchTerm} // Valor del input
              onChange={(e) => setSearchTerm(e.target.value)} // Actualizar estado
            />
          </div>
        </div>

        {/* Grid de contenido */}
        <div className="grid-contenido-Ninoss">
          {productosFiltrados.map((producto) => (
            <div className="col" key={producto.id}>
              <Link to={`/producto_nino/${producto.id}`}>
                <img src={producto.img} alt={producto.nombre} />
              </Link>
              <h4>{producto.nombre}</h4>
              <div className="precio-Ninoss">
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
