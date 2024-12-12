import React, { useState, useRef } from "react";
import "../ProductGrid/ProductGrid.css";
import { Link } from 'react-router-dom';

const Atletismo = () => {
  const searchInput = useRef(null);  // Usamos una referencia para el input de búsqueda

  // Lista de productos (deberías colocarla fuera del hook useState)
  const products = [
    { id: 1, name: "NIKE PEGASO INDOL ", category: "Calzado para atletismo", price: "$650.000", image: "/assets/atletismo1.jpg" },
    { id: 2, name: "NIKE LEGEND REVOL", category: "Calzado para atletismo", price: "$750.000", image: "/assets/atletismo2.jpg" },
    { id: 3, name: "NIKE MASTERED V.22", category: "Calzado para atletismo", price: "$420.000", image: "/assets/atletismo3.jpg" },
    { id: 4, name: "NIKE AIR ZOOM VER 1 ", category: "Calzado para atletismo", price: "$520.000", image: "/assets/atletismo4.jpg" },
    { id: 5, name: "NIKE BLOOD SPEED 4", category: "Calzado para atletismo", price: "$1.199.000", image: "/assets/atletismo5.jpg" },
    { id: 6, name: "NIKE PREDATOR ORA", category: "Calzado para atletismo", price: "$299.000", image: "/assets/atletismo6.jpg" }
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

      <div className="sidebar">
        <h3>DEPORTES</h3>
        <ul>
          <li><Link to="/futbol">FUTBOL</Link> </li>
          <li><Link to="/basquet">BASQUETBOL</Link> </li>
          <li> <Link to="/tennis">TENNIS</Link> {/* Enlace a la página de Basquet */}</li>
          <li><span>ATLETISMO</span></li>
        </ul>
        <div className="linea"></div>
      </div>
    </div>
  );
};

export default Atletismo;