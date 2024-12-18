import { useState } from "react";
import { Link } from "react-router-dom";
import "../ProductGrid/ProductGrid.css"; // Archivo de estilos

const Tennis = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Estado del buscador

  // Lista de productos con slugs únicos
  const productos = [

      { slug: "nike-super-sport-dominion", nombre: "NIKE SUPER SPORT DOMINION", descripcion: "Tennis shoes", precio: "$500.00", img: "/assets/tennis1.jpg" },
      { slug: "nike-super-sport-fly", nombre: "NIKE SUPER SPORT FLY", descripcion: "Tennis shoes", precio: "$199.95", img: "/assets/tennis2.jpg" },
      { slug: "nike-super-nime-plus", nombre: "NIKE SUPER NIME PLUS", descripcion: "Tennis shoes", precio: "$564.95", img: "/assets/tennis3.jpg" },
      { slug: "nike-superfly-vul", nombre: "NIKE SUPERFLY VUL", descripcion: "Tennis shoes", precio: "$524.95", img: "/assets/tennis4.jpg" },
      { slug: "nike-nirh-blus", nombre: "NIKE NIRH BLUS", descripcion: "Tennis shoes", precio: "$834.95", img: "/assets/tennis5.jpg" },
      { slug: "nike-super-plil", nombre: "NIKE SUPER PLIL", descripcion: "Tennis shoes", precio: "$254.95", img: "/assets/tennis6.jpg" }
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

export default Tennis;
