import React, { useState, useRef } from "react";
import "../ProductGrid/ProductGrid.css"; // Usamos el mismo archivo CSS
import { Link } from "react-router-dom";

const Basquet = () => {
  const searchInput = useRef(null);

  // Lista de productos
  const products = [
    { id: 1, name: "NIKE MASTER CLASS", category: "Calzado de básquetbol", price: "$299.000", image: "/assets/basquet1.png" },
    { id: 2, name: "NIKE LEGEND RAIN", category: "Calzado de básquetbol", price: "$499.000", image: "/assets/basquet2.png" },
    { id: 3, name: "NIKE NIKE MASTER", category: "Calzado de básquetbol", price: "$999.000", image: "/assets/basquet3.png" },
    { id: 4, name: "NIKE SUPERFLY VER", category: "Calzado de básquetbol", price: "$750.000", image: "/assets/basquet4.png" },
    { id: 5, name: "NIKE SUPER FLEW 2", category: "Calzado de básquetbol", price: "$1.199.000", image: "/assets/basquet5.png" },
    { id: 6, name: "NIKE JORDAN RETRO", category: "Calzado de básquetbol", price: "$399.000", image: "/assets/basquet6.png" }
  ];

  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = () => {
    const query = searchInput.current.value.toLowerCase();
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="layout">
      <aside className="sidebar">
        <h3>DEPORTES</h3>
        <ul>
          <li><Link to="/futbol">FÚTBOL</Link></li>
          <li><span>BÁSQUETBOL</span></li>
          <li><Link to="/tennis">TENNIS</Link></li>
          <li><Link to="/atletismo">ATLETISMO</Link></li>
        </ul>
        <div className="linea"></div>
      </aside>
      <main className="main-content">
        <div className="search">
          <input
            ref={searchInput}
            type="search"
            placeholder="Buscar"
            onChange={handleSearch}
          />
          <div className="lupa">
            <img
              src="/assets/simbolo-de-la-interfaz-de-busqueda.png"
              alt="lupa"
              onClick={handleSearch}
            />
          </div>
        </div>
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div className="product" key={product.id}>
              <Link to={`/basquet/infoproducto/${product.id}`}>
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
      </main>
    </div>
  );
};

export default Basquet;
