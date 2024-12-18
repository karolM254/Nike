import { useState } from "react";
import { Link } from "react-router-dom";
import "../ProductGrid/ProductGrid.css"; // Archivo de estilos

const Atletismo = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Estado del buscador

  // Lista de productos con slugs únicos
  const productos = [
    {
      slug: "nike-predator-pr",
      nombre: "NIKE PREDATOR PR",
      descripcion: "Athletic shoes",
      precio: "$199,95",
      img: "/assets/atletismo1.jpg",
    },
    {
      slug: "nike-sirt-tool",
      nombre: "NIKE SIRT TOOL",
      descripcion: "Athletic shoes",
      precio: "$780,00",
      img: "/assets/atletismo2.jpg",
    },
    {
      slug: "nike-gaplert-still",
      nombre: "NIKE GAPLERT STILL",
      descripcion: "Athletic shoes",
      precio: "$259,99",
      img: "/assets/atletismo3.jpg",
    },
    {
      slug: "nike-rainbow",
      nombre: "NIKE RAINBOW",
      descripcion: "Athletic shoes",
      precio: "$499,99",
      img: "/assets/atletismo4.jpg",
    },
    {
      slug: "nike-moll-tin",
      nombre: "NIKE MOLL TIN",
      descripcion: "Athletic shoes",
      precio: "$200,00",
      img: "/assets/atletismo5.jpg",
    },
    {
      slug: "nike-super-street",
      nombre: "NIKE SUPER STREET",
      descripcion: "Athletic shoes",
      precio: "$254,95",
      img: "/assets/atletismo6.jpg",
    },
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
          <li><Link to="/basquet" >BASKETBALL</Link></li>
          <li><Link to="/tennis">TENNIS</Link></li>
          <li><Link to="/atletismo" className="active">ATHLETICS</Link></li>
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

export default Atletismo;
