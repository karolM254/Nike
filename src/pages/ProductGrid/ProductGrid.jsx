import React, { useState, useRef } from "react";
import "../ProductGrid/ProductGrid.css";
import { Link } from "react-router-dom";

const ProductGrid = () => {
  const searchInput = useRef(null); // Usamos una referencia para el input de búsqueda

  // Lista de productos
  const products = [
    { id: 1, name: "NIKE MASTER LEGEND", category: "Guayos Profesionales", price: "$599.000", image: "/assets/guayo1.jpg" },
    { id: 2, name: "NIKE LEGEND GREEN", category: "Guayos Profesionales", price: "$450.000", image: "/assets/guayo2.jpg" },
    { id: 3, name: "AIR NIKE MASTER 1", category: "Guayos Profesionales", price: "$620.000", image: "/assets/guayo3.jpg" },
    { id: 4, name: "AIR SUPERFLY NEED", category: "Guayos Profesionales", price: "$850.000", image: "/assets/guayo4.jpg" },
    { id: 5, name: "AIR SUPER STAR VOL", category: "Guayos Profesionales", price: "$499.000", image: "/assets/guayo5.jpg" },
    { id: 6, name: "CLASSIC NIKE BLACK", category: "Guayos Profesionales", price: "$750.000", image: "/assets/guayo6.jpg" }
  ];
  
  // Estado para productos filtrados
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Función para manejar la búsqueda
  const handleSearch = () => {
    const query = searchInput.current.value.toLowerCase(); // Convertir la búsqueda a minúsculas
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="content">
      <div className="search">
        <input
          ref={searchInput} // Referencia para capturar el valor
          type="search"
          placeholder="Buscar"
          style={{ width: "56%", fontSize: "calc(15px + 10px)" }}
          onChange={handleSearch} // Llamar a la función al cambiar el valor
        />
      </div>
      <div className="lupa">
        <img
          src="/assets/simbolo-de-la-interfaz-de-busqueda.png"
          alt="lupa"
          onClick={handleSearch} // Llamar a la función al hacer clic
        />
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div className="product" key={product.id}>
            <Link to={`/futbol/infoproducto/${product.id}`}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <h2>{product.name}</h2>
              <p className="info">{product.category}</p>
              <p className="price">{product.price}</p>
            </Link>
          </div>
        ))}
      </div>
      

      <div className="sidebar">
        <h3>DEPORTES</h3>
        <ul>
          <li><span>FÚTBOL</span></li>
          <li><Link to="/basquet">BÁSQUETBOL</Link></li>
          <li><Link to="/tennis">TENNIS</Link></li>
          <li><Link to="/atletismo">ATLETISMO</Link></li>
        </ul>
        <div className="linea"></div>
      </div>
    </div>
  );
};

export default ProductGrid;
