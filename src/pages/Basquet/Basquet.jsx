import React, { useState, useRef } from "react";
import "../ProductGrid/ProductGrid.css";
import { Link } from 'react-router-dom';

const Basquet = () => {
  const searchInput = useRef(null);  // Usamos una referencia para el input de búsqueda

  // Lista de productos (deberías colocarla fuera del hook useState)
  const products = [
    { id: 1, name: "NIKE MASTER CLASS", category: "Calzado de básquetbol", price: "$299.000", image: "/assets/basquet1.png" },
    { id: 2, name: "NIKE LEGEND RAIN", category: "Calzado de básquetbol", price: "$499.000", image: "/assets/basquet2.png" },
    { id: 3, name: "NIKE NIKE MASTER ", category: "Calzado de básquetbol", price: "$999.000", image: "/assets/basquet3.png" },
    { id: 4, name: "NIKE SUPERFLY VER ", category: "Calzado de básquetbol", price: "$750.000", image: "/assets/basquet4.png" },
    { id: 5, name: "NIKE SUPER FLEW 2", category: "Calzado de básquetbol", price: "$1.199.000", image: "/assets/basquet5.png" },
    { id: 6, name: "NIKE JORDAN RETRO", category: "Calzado de básquetbol", price: "$399.000", image: "/assets/basquet6.png" }
  ];

  // Definimos el estado después de la lista de productos
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Función para manejar la búsqueda
  const handleSearch = () => {
    const query = searchInput.current.value.toLowerCase();  // Convertir la búsqueda a minúsculas
    const filtered = products.filter(product => 
      product.name.toLowerCase().includes(query) || 
      product.category.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="content">
      <div className="search">
        <input
          ref={searchInput}  // Referencia para capturar el valor
          type="search"
          placeholder="Buscar"
          style={{ width: '56%', fontSize: 'calc(15px + 10px)' }}
          onChange={handleSearch}  // Llamar a la función al cambiar el valor
        />
      </div>
      <div className="lupa">
        <img 
          src="/assets/simbolo-de-la-interfaz-de-busqueda.png" 
          alt="lupa"
          onClick={handleSearch}  // Llamar a la función al hacer clic
        />
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

      <div className="sidebar">
        <h3>DEPORTES</h3>
        <ul>
        <li> <Link to="/futbol">FÚTBOL</Link> {/* Enlace a la página de Basquet */}</li>
          <li><span>BÁSQUETBOL</span></li>
          <li> <Link to="/tennis">TENNIS</Link> {/* Enlace a la página de Basquet */}</li>
          <li><Link to="/atletismo">ATLETISMO</Link></li>
        </ul>
        <div className="linea"></div>
      </div>
    </div>
  );
};

export default Basquet;