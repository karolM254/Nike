import React, { useState, useRef } from "react";
import "../ProductGrid/ProductGrid.css";
import { Link } from "react-router-dom";

const Tennis = () => {
  const searchInput = useRef(null);

  // Lista de productos
  const products = [
    { id: 1, name: "NIKE FUTURE RELAX", category: "Calzado de tennis", price: "$1.199.000", image: "/assets/tennis1.jpg" },
    { id: 2, name: "NIKE LEGEND BLUE", category: "Calzado de tennis", price: "$850.000", image: "/assets/tennis2.jpg" },
    { id: 3, name: "NIKE AIR NIKE VER", category: "Calzado de tennis", price: "$999.000", image: "/assets/tennis3.jpg" },
    { id: 4, name: "AIR SUPER SMITH 1", category: "Calzado de tennis", price: "$399.000", image: "/assets/tennis4.jpg" },
    { id: 5, name: "NIKE AIR WIN RATE", category: "Calzado de tennis", price: "$499.000", image: "/assets/tennis5.jpg" },
    { id: 6, name: "NIKE AIM WHITE VER", category: "Calzado de tennis", price: "$599.000", image: "/assets/tennis6.jpg" }
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
          <li><Link to="/basquet">BÁSQUETBOL</Link></li>
          <li><span>TENNIS</span></li>
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
              <Link to={`/tennis/infoproducto/${product.id}`}>
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

export default Tennis;
