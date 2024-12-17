/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
/* eslint-enable no-unused-vars */
import { Link } from 'react-router-dom';
import './ProductosHombres.css';

// Componente principal para mostrar los productos de hombres
function HombresProductos() {
  // Estado para manejar la búsqueda y los productos
  const [searchTerm, setSearchTerm] = useState('');

  // Lista de productos (información estática)
  const productos = [
    { id: 1, nombre: 'Air Jordan 11 Retro "Legend Blue"', descripcion:  "Men's footwear", precio:25560567, imagen: '/assets/fototennis.jpg' },
    { id: 2, nombre: 'W Nike Zoom Bella 6 PRm', descripcion:  "Men's footwear", precio: 845950, imagen: '/assets/678275-500-500.jpg' },
    { id: 3, nombre: 'Nike Full Force Low', descripcion:  "Men's footwear", precio: 560950, imagen: '/assets/677182-500-500.jpg' },
    { id: 4, nombre: 'Nike Cortez', descripcion:  "Men's footwear", precio: 380950, imagen: '/assets/702841-500-500.jpg' },
    { id: 5, nombre: 'Nike C1TY', descripcion:  "Men's footwear", precio: 695950, imagen: '/assets/713556-500-500.jpg' },
    { id: 6, nombre: 'Nike Killshot 2 Leather', descripcion:  "Men's footwear", precio: 922950, imagen: '/assets/678515-500-500.jpg' }
  ];

  // Filtrar productos según el término de búsqueda ingresado por el usuario
  const productosFiltrados = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) // Se realiza la búsqueda ignorando mayúsculas/minúsculas
  );

  return (
    <>  
      {/* Contenedor para el buscador */}
      <div className="buscarMen">
        <div className="buscadorMen">
          {/* Ícono de búsqueda */}
          <i className="ri-search-line"></i>
          {/* Campo de texto para buscar productos */}
          <input 
            type="text" 
            name="search" 
            id="buscarProductosMen" 
            placeholder="Buscar"
            value={searchTerm} // Valor del campo sincronizado con el estado
            onChange={(e) => setSearchTerm(e.target.value)} // Actualización del estado cuando cambia el valor del campo
          />
        </div>    
      </div>

      {/* Contenedor principal de los productos */}
      <div className="conatinerPrdocutosMen">
        {/* Mapeo de los productos filtrados para mostrarlos */}
        {productosFiltrados.map(producto => (
          <div className="imgProductoMen" key={producto.id}>
            {/* Enlace para cada producto que redirige a su detalle */}
            <Link to={`/productosHombre/${producto.id}`}>
              <img src={producto.imagen} alt={producto.nombre} /> {/* Imagen del producto */}
            </Link>
            {/* Información del producto: nombre, descripción y precio */}
            <p className="TittleProcut">{producto.nombre}</p>
            <p className="descriptionProductoMen">{producto.descripcion}</p>
            <p className="priceProductMen">$ {producto.precio}</p>
          </div>
        ))}
      </div>

      {/* Contenedor para una posible sección adicional (aún no implementada) */}
      <div className="mas-productos-hombres"></div>
    </>
  );
}

export default HombresProductos;
