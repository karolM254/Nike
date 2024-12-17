import { useState } from "react";
import { Link } from "react-router-dom";
import "../ProductGrid/ProductGrid.css"; // Archivo de estilos

const Tennis = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Estado del buscador

  // Lista de productos
  const productos = [
    { id: 1, nombre: "NIKE SUPER SPORT DOMINION", descripcion: "Tennis shoes", precio: "$500.000", img: "/assets/tennis1.jpg" },
    { id: 2, nombre: "NIKE SUPER SPORT FLY", descripcion: "Tennis shoes", precio: "$199.950", img: "/assets/tennis2.jpg" },
    { id: 3, nombre: "NIKE SUPER NIME PLUS", descripcion: "Tennis shoes", precio: "$564.950", img: "/assets/tennis3.jpg" },
    { id: 4, nombre: "NIKE SUPERFLY VUL", descripcion: "Tennis shoes", precio: "$524.950", img: "/assets/tennis4.jpg" },
    { id: 5, nombre: "NIKE NIRH BLUS", descripcion: "Tennis shoes", precio: "$834.950", img: "/assets/tennis5.jpg" },
    { id: 6, nombre: "NIKE SUPER PLIL", descripcion: "Tennis shoes", precio: "$254.950", img: "/assets/tennis6.jpg" },
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
          <li><Link to="/basquet">BASKETBALL</Link></li>
          <li><Link to="/tennis" className="active">TENNIS</Link></li>
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

export default Tennis;
