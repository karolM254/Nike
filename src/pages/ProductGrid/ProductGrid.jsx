import React, { useState, useRef } from "react";
import "../ProductGrid/ProductGrid.css";
import { Link } from "react-router-dom";

const ProductGrid = () => {
  const searchInput = useRef(null);

  // Lista de productos
  const products = [
    { id: 1, name: "NIKE MASTER LEGEND", category: "Guayos Profesionales", price: "$599.000", image: "/assets/guayo1.jpg" },
    { id: 2, name: "NIKE LEGEND GREEN", category: "Guayos Profesionales", price: "$450.000", image: "/assets/guayo2.jpg" },
    { id: 3, name: "AIR NIKE MASTER 1", category: "Guayos Profesionales", price: "$620.000", image: "/assets/guayo3.jpg" },
    { id: 4, name: "AIR SUPERFLY NEED", category: "Guayos Profesionales", price: "$850.000", image: "/assets/guayo4.jpg" },
    { id: 5, name: "AIR SUPER STAR VOL", category: "Guayos Profesionales", price: "$499.000", image: "/assets/guayo5.jpg" },
    { id: 6, name: "CLASSIC NIKE BLACK", category: "Guayos Profesionales", price: "$750.000", image: "/assets/guayo6.jpg" }
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
        <h3>SPORTS</h3>
        <ul>
          <li><span>SOCCER</span></li>
          <li><Link to="/basquet">BASKETBALL</Link></li>
          <li><Link to="/tennis">TENNIS</Link></li>
          <li><Link to="/atletismo">ATHLETICS</Link></li>
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
      </main>
    </div>
  );
};

export default ProductGrid;

