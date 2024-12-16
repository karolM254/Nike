import React, { useState, useRef } from "react"; // Importamos React, useState para manejar estados y useRef para manipular referencias a elementos DOM.
import "../ProductGrid/ProductGrid.css"; // Importamos el archivo CSS para aplicar estilos.
import { Link } from "react-router-dom"; // Importamos Link para la navegación entre rutas.

const ProductGrid = () => {
  const searchInput = useRef(null); // Creamos una referencia al input de búsqueda para acceder a su valor directamente.

  // Lista de productos con información ficticia: cada producto tiene un ID, nombre, categoría, precio e imagen.
  const products = [
    { id: 1, name: "NIKE MASTER LEGEND", category: "Guayos of soccer", price: "$599.000", image: "/assets/guayo1.jpg" },
    { id: 2, name: "NIKE LEGEND GREEN", category: "Guayos of soccer", price: "$450.000", image: "/assets/guayo2.jpg" },
    { id: 3, name: "AIR NIKE MASTER 1", category: "Guayos of soccer", price: "$620.000", image: "/assets/guayo3.jpg" },
    { id: 4, name: "AIR SUPERFLY NEED", category: "Guayos of soccer", price: "$850.000", image: "/assets/guayo4.jpg" },
    { id: 5, name: "AIR SUPER STAR VOL", category: "Guayos of soccer", price: "$499.000", image: "/assets/guayo5.jpg" },
    { id: 6, name: "CLASSIC NIKE BLACK", category: "Guayos of soccer", price: "$750.000", image: "/assets/guayo6.jpg" }
  ];

  // Estado para almacenar la lista de productos filtrados; inicialmente contiene todos los productos.
  const [filteredProducts, setFilteredProducts] = useState(products);

  // Función para filtrar productos en base a lo ingresado en el campo de búsqueda.
  const handleSearch = () => {
    const query = searchInput.current.value.toLowerCase(); // Obtenemos el valor del input en minúsculas.
    const filtered = products.filter((product) =>
      // Verificamos si el nombre o la categoría del producto contienen el texto ingresado.
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered); // Actualizamos el estado con los productos filtrados.
  };

  return (
    <div className="layout">
      {/* Barra lateral con las categorías */}
      <aside className="sidebar">
        <h3>SPORTS</h3> {/* Título de la barra lateral */}
        <ul>
          {/* Categorías de deportes; algunas son enlaces, mientras que "SOCCER" es un texto estático. */}
          <li><span>SOCCER</span></li>
          <li><Link to="/basquet">BASKETBALL</Link></li>
          <li><Link to="/tennis">TENNIS</Link></li>
          <li><Link to="/atletismo">ATHLETICS</Link></li>
        </ul>
        <div className="linea"></div> {/* Línea decorativa debajo de las categorías */}
      </aside>

      {/* Contenido principal de la página */}
      <main className="main-content">
        {/* Barra de búsqueda */}
        <div className="search">
          <input
            ref={searchInput} // Asignamos la referencia al input de búsqueda.
            type="search"
            placeholder="Buscar" // Texto de ejemplo en el input.
            onChange={handleSearch} // Llamamos a handleSearch cada vez que el usuario escribe.
          />
          <div className="lupa">
            {/* Icono de lupa, también ejecuta handleSearch al hacer clic. */}
            <img
              src="/assets/simbolo-de-la-interfaz-de-busqueda.png"
              alt="lupa"
              onClick={handleSearch}
            />
          </div>
        </div>

        {/* Grid de productos */}
        <div className="product-grid">
          {filteredProducts.map((product) => (
            // Recorremos la lista de productos filtrados y renderizamos cada uno como un bloque.
            <div className="product" key={product.id}>
              <Link to={`/futbol/infoproducto/${product.id}`}> {/* Enlace al detalle del producto */}
                <div className="product-image">
                  <img src={product.image} alt={product.name} /> {/* Imagen del producto */}
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

export default ProductGrid; // Exportamos el componente para usarlo en otras partes de la aplicación.


