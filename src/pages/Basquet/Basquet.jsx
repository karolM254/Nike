import { useState } from "react";
import { Link } from "react-router-dom";
import "../ProductGrid/ProductGrid.css"; // Archivo de estilos

const Basquet = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Estado del buscador

  // Lista de productos con slugs únicos
  const productos = [
    { slug: "nike-pr-inc", nombre: "NIKE PR INC", descripcion: "Tennis of basketball", precio: "$190,00", img: "/assets/basquet1.png" },
    { slug: "nike-master-cart", nombre: "NIKE MASTER CART", descripcion: "Tennis of basketball", precio: "$199.95", img: "/assets/basquet2.png" },
    { slug: "nike-air-more", nombre: "NIKE AIR MORE", descripcion: "Tennis of basketball", precio: "$564.95", img: "/assets/basquet3.png" },
    { slug: "nike-air-superstar", nombre: "NIKE AIR SUPERSTAR", descripcion: "Tennis of basketball", precio: "$524.95", img: "/assets/basquet4.png" },
    { slug: "nike-young-world", nombre: "NIKE YOUNG WORLD", descripcion: "Tennis of basketball", precio: "$834.95", img: "/assets/basquet5.png" },
    { slug: "nike-marron-one", nombre: "NIKE MARRON ONE", descripcion: "Tennis of basketball", precio: "$254.95", img: "/assets/basquet6.png" },
    ];
    

  // Filtrar productos según el término de búsqueda
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
              placeholder="Search"
              className="buscar-producto-mujer"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Grid de productos */}
        <div className="grid-contenido-mujeres">
          {productosFiltrados.map((producto) => (
            <div className="col" key={producto.slug}>
              <Link to={`infoproducto/${producto.slug}`}>
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
