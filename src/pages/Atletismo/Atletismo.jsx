import React, { useState, useRef } from "react"; // Importación de React, useState y useRef para manejar estados y referencias.
import "../ProductGrid/ProductGrid.css"; // Importación de los estilos CSS.
import { Link } from "react-router-dom"; // Importación del componente Link para la navegación entre rutas.

const Atletismo = () => {
  const searchInput = useRef(null); // Referencia para el campo de búsqueda.

  // Lista de productos
  const products = [
    { id: 1, name: "NIKE PEGASO INDOL", category: "Calzado atletismo", price: "$650.000", image: "/assets/atletismo1.jpg" },
    { id: 2, name: "NIKE LEGEND REVOL", category: "Calzado atletismo", price: "$750.000", image: "/assets/atletismo2.jpg" },
    { id: 3, name: "NIKE MASTERED V.22", category: "Calzado atletismo", price: "$420.000", image: "/assets/atletismo3.jpg" },
    { id: 4, name: "NIKE AIR ZOOM VER 1", category: "Calzado atletismo", price: "$520.000", image: "/assets/atletismo4.jpg" },
    { id: 5, name: "NIKE BLOOD SPEED 4", category: "Calzado atletismo", price: "$1.199.000", image: "/assets/atletismo5.jpg" },
    { id: 6, name: "NIKE PREDATOR ORA", category: "Calzado atletismo", price: "$299.000", image: "/assets/atletismo6.jpg" }
  ];

  const [filteredProducts, setFilteredProducts] = useState(products); // Estado para manejar los productos filtrados.

  // Maneja la búsqueda en tiempo real filtrando los productos según el texto ingresado.
  const handleSearch = () => {
    const query = searchInput.current.value.toLowerCase(); // Obtiene y convierte el texto ingresado a minúsculas.
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query) || 
      product.category.toLowerCase().includes(query) // Filtra productos por nombre o categoría.
    );
    setFilteredProducts(filtered); // Actualiza el estado con los productos filtrados.
  };

  return (
    <div className="layout"> {/* Contenedor principal con estructura de diseño general */}
      <aside className="sidebar"> {/* Barra lateral con enlaces de navegación */}
        <h3>SPORTS</h3>
        <ul>
          <li><Link to="/futbol">SOCCER</Link></li> {/* Enlace a la sección de fútbol */}
          <li><Link to="/basquet">BASKETBALL</Link></li> {/* Enlace a la sección de baloncesto */}
          <li><Link to="/tennis">TENNIS</Link></li> {/* Enlace a la sección de tenis */}
          <li><span>ATHLETICS</span></li> {/* Sección actual resaltada sin enlace */}
        </ul>
        <div className="linea"></div> {/* Línea divisoria en la barra lateral */}
      </aside>
      <main className="main-content"> {/* Contenedor principal del contenido */}
        <div className="search"> {/* Barra de búsqueda */}
          <input
            ref={searchInput} // Campo de entrada con referencia para capturar texto.
            type="search"
            placeholder="Buscar" // Texto de marcador en el campo.
            onChange={handleSearch} // Llama a la función de búsqueda al cambiar el texto.
          />
          <div className="lupa"> {/* Icono de lupa */}
            <img
              src="/assets/simbolo-de-la-interfaz-de-busqueda.png"
              alt="lupa"
              onClick={handleSearch} // También permite buscar al hacer clic en la lupa.
            />
          </div>
        </div>
        <div className="product-grid"> {/* Contenedor de productos en forma de cuadrícula */}
          {filteredProducts.map((product) => ( // Itera sobre los productos filtrados para mostrarlos.
            <div className="product" key={product.id}> {/* Cada producto con clave única */}
              <Link to={`/atletismo/infoproducto/${product.id}`}> {/* Enlace a la página de detalles del producto */}
                <div className="product-image"> {/* Imagen del producto */}
                  <img src={product.image} alt={product.name} />
                </div>
                <h2>{product.name}</h2> {/* Nombre del producto */}
                <p className="info">{product.category}</p> {/* Categoría del producto */}
                <p className="price">{product.price}</p> {/* Precio del producto */}
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Atletismo; // Exporta el componente para su uso en otras partes de la aplicación.
