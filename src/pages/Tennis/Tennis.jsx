import React, { useState, useRef } from "react";
import "../ProductGrid/ProductGrid.css";
import { Link } from 'react-router-dom';

const Tennis = () => {
  const searchInput = useRef(null);  // Usamos una referencia para el input de búsqueda

  // Lista de productos (deberías colocarla fuera del hook useState)
  const products = [
    { id: 1, name: "NIKE FUTURE RELAX", category: "Calzado de tennis", price: "$1.199.000", image: "/assets/tennis1.jpg" },
    { id: 2, name: "NIKE LEGEND BLUE", category: "Calzado de tennis", price: "$850.000", image: "/assets/tennis2.jpg" },
    { id: 3, name: "NIKE AIR NIKE VER", category: "Calzado de tennis", price: "$999.000", image: "/assets/tennis3.jpg" },
    { id: 4, name: "AIR SUPER SMITH 1", category: "Calzado de tennis", price: "$399.000", image: "/assets/tennis4.jpg" },
    { id: 5, name: "NIKE AIR WIN RATE", category: "Calzado de tennis", price: "$499.000", image: "/assets/tennis5.jpg" },
    { id: 6, name: "NIKE AIM WHITE VER", category: "Calzado de tennis", price: "$599.000", image: "/assets/tennis6.jpg" }
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

      <div className="sidebar">
        <h3>DEPORTES</h3>
        <ul>
          <li> <Link to="/futbol">FÚTBOL</Link></li>
          <li><Link to="/basquet">BASQUETBOL</Link></li>
          <li><span>TENNIS</span></li>
          <li><Link to="/atletismo">ATLETISMO</Link></li>
        </ul>
        <div className="linea"></div>
      </div>
    </div>
  );
};

export default Tennis;