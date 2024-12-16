import React, { useState, useRef } from "react";
import "../ProductGrid/ProductGrid.css";
import { Link } from "react-router-dom";

const Atletismo = () => {
  const searchInput = useRef(null);

  // Lista de productos
  const products = [
    { id: 1, name: "NIKE PEGASO INDOL", category: "Calzado atletismo", price: "$650.000", image: "/assets/atletismo1.jpg" },
    { id: 2, name: "NIKE LEGEND REVOL", category: "Calzado atletismo", price: "$750.000", image: "/assets/atletismo2.jpg" },
    { id: 3, name: "NIKE MASTERED V.22", category: "Calzado atletismo", price: "$420.000", image: "/assets/atletismo3.jpg" },
    { id: 4, name: "NIKE AIR ZOOM VER 1", category: "Calzado atletismo", price: "$520.000", image: "/assets/atletismo4.jpg" },
    { id: 5, name: "NIKE BLOOD SPEED 4", category: "Calzado atletismo", price: "$1.199.000", image: "/assets/atletismo5.jpg" },
    { id: 6, name: "NIKE PREDATOR ORA", category: "Calzado atletismo", price: "$299.000", image: "/assets/atletismo6.jpg" }
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
          <li><Link to="/futbol">SOCCER</Link></li>
          <li><Link to="/basquet">BASKETBALL</Link></li>
          <li><Link to="/tennis">TENNIS</Link></li>
          <li><span>ATHLETICS</span></li>
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
              <Link to={`/atletismo/infoproducto/${product.id}`}>
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

export default Atletismo;
