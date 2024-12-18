import { useState } from "react";
import { Link } from "react-router-dom";
import "../ProductGrid/ProductGrid.css"; // Archivo de estilos

const ProductGrid = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Estado del buscador

  // Lista de productos con slugs únicos
  const productos = [
    { slug: "nike-master-legend-air", nombre: "NIKE MASTER LEGEND AIR", descripcion: "Tennis of soccer", precio: "$399,00", img: "/assets/guayo1.jpg" },
    { slug: "nike-air-more-top", nombre: "NIKE AIR MORE TOP", descripcion: "Tennis of soccer", precio: "$349,99", img: "/assets/guayo2.jpg" },
    { slug: "nike-air-superstar", nombre: "NIKE AIR SUPERSTAR", descripcion: "Tennis of soccer", precio: "$264,95", img: "/assets/guayo3.jpg" },
    { slug: "nike-air-wonder-rain", nombre: "NIKE AIR WONDER RAIN", descripcion: "Tennis of soccer", precio: "$124,95", img: "/assets/guayo4.jpg" },
    { slug: "nike-super-street", nombre: "NIKE SUPER STREET", descripcion: "Tennis of soccer", precio: "$534,95", img: "/assets/guayo5.jpg" },
    { slug: "nike-black-classic", nombre: "NIKE BLACK CLASSIC", descripcion: "Tennis of soccer", precio: "$654,95", img: "/assets/guayo6.jpg" },
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

export default ProductGrid;

