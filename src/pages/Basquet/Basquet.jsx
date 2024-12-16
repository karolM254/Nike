import React, { useState, useRef } from "react"; // Importación de React y hooks para manejar estado y referencias.
import "../ProductGrid/ProductGrid.css"; // Importación del mismo archivo CSS usado en otras secciones.
import { Link } from "react-router-dom"; // Importación de Link para navegación entre rutas.

const Basquet = () => {
  const searchInput = useRef(null); // Referencia para el campo de búsqueda.

  // Lista de productos
  const products = [
    { id: 1, name: "NIKE MASTER CLASS", category: "Calzado básquetbol", price: "$299.000", image: "/assets/basquet1.png" },
    { id: 2, name: "NIKE LEGEND RAIN", category: "Calzado básquetbol", price: "$499.000", image: "/assets/basquet2.png" },
    { id: 3, name: "NIKE NIKE MASTER", category: "Calzado básquetbol", price: "$999.000", image: "/assets/basquet3.png" },
    { id: 4, name: "NIKE SUPERFLY VER", category: "Calzado básquetbol", price: "$750.000", image: "/assets/basquet4.png" },
    { id: 5, name: "NIKE SUPER FLEW 2", category: "Calzado básquetbol", price: "$1.199.000", image: "/assets/basquet5.png" },
    { id: 6, name: "NIKE JORDAN RETRO", category: "Calzado básquetbol", price: "$399.000", image: "/assets/basquet6.png" }
  ];

  const [filteredProducts, setFilteredProducts] = useState(products); // Estado para manejar productos filtrados.

  // Función que maneja la búsqueda en tiempo real
  const handleSearch = () => {
    const query = searchInput.current.value.toLowerCase(); // Obtiene el texto ingresado en el campo de búsqueda.
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query) || // Filtra por coincidencias en el nombre del producto.
      product.category.toLowerCase().includes(query) // Filtra por coincidencias en la categoría del producto.
    );
    setFilteredProducts(filtered); // Actualiza el estado con los productos filtrados.
  };

  return (
    <div className="layout"> {/* Contenedor principal con estructura general */}
      <aside className="sidebar"> {/* Barra lateral con navegación */}
        <h3>SPORTS</h3>
        <ul>
          <li><Link to="/futbol">SOCCER</Link></li> {/* Enlace a la sección de fútbol */}
          <li><span>BASKETBALL</span></li> {/* Sección actual resaltada sin enlace */}
          <li><Link to="/tennis">TENNIS</Link></li> {/* Enlace a la sección de tenis */}
          <li><Link to="/atletismo">ATHLETICS</Link></li> {/* Enlace a la sección de atletismo */}
        </ul>
        <div className="linea"></div> {/* Línea divisoria */}
      </aside>
      <main className="main-content"> {/* Contenedor principal de contenido */}
        <div className="search"> {/* Barra de búsqueda */}
          <input
            ref={searchInput} // Campo de búsqueda con referencia.
            type="search"
            placeholder="Buscar" // Texto de marcador en el campo.
            onChange={handleSearch} // Llama a la función handleSearch al cambiar el texto.
          />
          <div className="lupa"> {/* Icono de lupa para búsqueda */}
            <img
              src="/assets/simbolo-de-la-interfaz-de-busqueda.png"
              alt="lupa"
              onClick={handleSearch} // También permite buscar al hacer clic en la lupa.
            />
          </div>
        </div>
        <div className="product-grid"> {/* Contenedor de cuadrícula para mostrar productos */}
          {filteredProducts.map((product) => ( // Itera sobre los productos filtrados para renderizarlos.
            <div className="product" key={product.id}> {/* Cada producto tiene una clave única */}
              <Link to={`/basquet/infoproducto/${product.id}`}> {/* Enlace a la página de detalles del producto */}
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

export default Basquet; // Exporta el componente para que pueda usarse en otras partes de la aplicación.
