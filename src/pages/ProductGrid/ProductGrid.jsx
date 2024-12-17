import { useState } from "react";
import { Link } from "react-router-dom";
import "../ProductGrid/ProductGrid.css"; // Archivo de estilos

const ProductGrid = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Estado del buscador

  // Lista de productos
  const productos = [
    { id: 1, nombre: "NIKE MASTER LEGEND AIR", descripcion: "Tennis of soccer", precio: "$500.000", img: "/assets/guayo1.jpg" },
    { id: 2, nombre: "NIKE AIR MORE TOP", descripcion: "Tennis of soccer", precio: "$199.950", img: "/assets/guayo2.jpg" },
    { id: 3, nombre: "NIKE AIR SUPERSTAR", descripcion: "Tennis of soccer", precio: "$564.950", img: "/assets/guayo3.jpg" },
    { id: 4, nombre: "NIKE AIR WONDER RAIN", descripcion: "Tennis of soccer", precio: "$524.950", img: "/assets/guayo4.jpg" },
    { id: 5, nombre: "NIKE SUPER STREET", descripcion: "Tennis of soccer", precio: "$834.950", img: "/assets/guayo5.jpg" },
    { id: 6, nombre: "NIKE BLACK CLASSIC", descripcion: "Tennis of soccer", precio: "$254.950", img: "/assets/guayo6.jpg" },
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
          <li><Link to="/futbol" className="active">SOCCER</Link></li>
          <li><Link to="/basquet">BASKETBALL</Link></li>
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

export default ProductGrid;
