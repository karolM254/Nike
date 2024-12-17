import { useState } from "react";
import { Link } from "react-router-dom";
import "../ProductGrid/ProductGrid.css"; // Archivo de estilos

const Basquet = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Estado del buscador

  // Lista de productos
  const productos = [
    {
      id: 1,
      nombre: "NIKE PR INC", 
      descripcion: "Tennis of basketball",
      precio: "$500.000",
      img: "/assets/basquet1.png",
    },
    {
      id: 2,
      nombre: "NIKE MASTER CART",
      descripcion: "Tennis of basketball",
      precio: "$199.950",
      img: "/assets/basquet2.png",
    },
    {
      id: 3,
      nombre: "NIKE AIR MORE",
      descripcion: "Tennis of basketball",
      precio: "$564.950",
      img: "/assets/basquet3.png",
    },
    {
      id: 4,
      nombre: "NIKE AIR SUPERSTAR",
      descripcion: "Tennis of basketball",
      precio: "$524.950",
      img: "/assets/basquet4.png",
    },
    {
      id: 5,
      nombre: "NIKE YOUNG WORLD",
      descripcion: "Tennis of basketball",
      precio: "$834.950",
      img: "/assets/basquet5.png",
    },
    {
      id: 6,
      nombre: "NIKE MARRON ONE",
      descripcion: "Tennis of basketball",
      precio: "$254.950",
      img: "/assets/basquet6.png",
    },
    ];

  // Filtrar productos
  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h3>SPORTS</h3>
        <ul>
          <li><Link to="/futbol" >SOCCER</Link></li>
          <li><Link to="/basquet" className="active">BASKETBALL</Link></li>
          <li><Link to="/tennis">TENNIS</Link></li>
          <li><Link to="/atletismo">ATHLETICS</Link></li>
        </ul>
      </aside>

      {/* Contenido principal */}
      <main className="contenido-mujeres">
        {/* Buscador */}
        <div className="buscador-mujeres-productos">
          <div className="buscador-mujeres">
            <i className="ri-search-line"></i>
            <input
              type="text"
              placeholder="Buscar"
              className="buscar-producto-mujer"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Grid de productos */}
        <div className="grid-contenido-mujeres">
          {productosFiltrados.map((producto) => (
            <div className="col" key={producto.id}>
              <Link to={`infoproducto/${producto.id}`}>
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
      </main>
    </div>
  );
};

export default Basquet;
