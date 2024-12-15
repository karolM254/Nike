import React, { useState, useRef, useEffect } from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';

// Componente reutilizable para crear el submenú de categorías.
function DropdownMenu({ categories }) {
  return (
    // Contenedor principal del submenú con una clase activa.
    <div className="contenido-women active">
      {categories.map((category, index) => (
        // Itera sobre las categorías y genera bloques para cada una.
        <div key={index} className={`filtros-${category.key}`}>
          {/* Título de cada categoría */}
          <h4 className={`tittle-${category.key}`}>{category.title}</h4>
          {/* Lista de elementos dentro de la categoría */}
          <ul className={`list-${category.key}`}>
            {category.items.map((item, idx) => (
              <React.Fragment key={idx}>
                {/* Cada ítem de la lista se renderiza aquí */}
                <li className={`${category.key}`}>{item}</li>
                {/* Condicional para insertar una línea <hr> entre tallas US y EU */}
                {item.includes('US') && categories[index].items[idx + 1]?.includes('EU') && (
                  <hr className='contenido-women-hr' />
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

// Componente principal del header.
function Header() {
  // Estado que guarda el submenú actualmente visible.
  const [visibleDropdown, setVisibleDropdown] = useState(null);
  // Hook para obtener la ruta actual de la aplicación.
  const location = useLocation();
  // Hook para crear una referencia al elemento <header>.
  const headerRef = useRef(null);

  // Función para alternar la visibilidad del submenú al hacer clic.
  const handleMenuClick = (menu) => {
    setVisibleDropdown((prev) => (prev === menu ? null : menu));
  };

  // Función para cerrar el submenú si se hace clic fuera del header.
  const handleClickOutside = (event) => {
    if (headerRef.current && !headerRef.current.contains(event.target)) {
      setVisibleDropdown(null); // Oculta el submenú.
    }
  };

  // Hook que agrega y elimina un event listener para detectar clics fuera del header.
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Función para verificar si una ruta específica está activa (coincide con la URL actual).
  const isActive = (path) => location.pathname === path;

  // Datos de las categorías, organizados por tipo (mujeres, hombres, niños, deportes).
  const categories = {
    women: [
      // Categorías para la sección de mujeres.
      { key: 'size-women', title: 'FOOT SIZE', items: ['US size 9', 'US Size 10', 'US Size 11', 'EU Size 39', 'EU Size 40', 'EU Size 41', 'EU Size 42', 'EU Size 43'] },
      { key: 'color-women', title: 'COLOR', items: ['White', 'Black', 'Pink', 'Red', 'Green'] },
      { key: 'material-women', title: 'MATERIAL', items: ['Leather', 'Synthetic', 'Breathable mesh'] },
      { key: 'price-women', title: 'PRICE', items: ['$50-100', '$100-150', '$150-200', 'More than $200'] },
      { key: 'new-women', title: 'NEW', items: ['New Collections', 'Offers and Discounts', 'Limited editions'] },
    ],
    kids: [
      // Categorías para la sección de niños.
      { key: 'size-kids', title: 'FOOT SIZE', items: ['US Size 3', 'US Size 4', 'US Size 5', 'Size 30 EU', 'Size 31 EU', 'Size 32 EU'] },
      { key: 'color-kids', title: 'COLOR', items: ['Blue', 'Yellow', 'Pink', 'White', 'Black'] },
      { key: 'material-kids', title: 'MATERIAL', items: ['Synthetic', 'Breathable mesh', 'Rubber'] },
      { key: 'price-kids', title: 'PRICE', items: ['$30-50', '$50-70', '$70-100', 'More than $100'] },
      { key: 'new-kids', title: 'NEW', items: ['Seasonal Collections', 'Discounted', 'Exclusive Editions'] },
    ],
    men: [
      // Categorías para la sección de hombres.
      { key: 'size-men', title: 'FOOT SIZE', items: ['US Size 8', 'US Size 9', 'US Size 10', 'Size 41 EU', 'Size 42 EU', 'Size 43 EU'] },
      { key: 'color-men', title: 'COLOR', items: ['Black', 'White', 'Gray', 'Navy', 'Brown'] },
      { key: 'material-men', title: 'MATERIAL', items: ['Leather', 'Synthetic', 'Canvas'] },
      { key: 'price-men', title: 'PRICE', items: ['$70-100', '$100-150', '$150-200', 'More than $200'] },
      { key: 'new-men', title: 'NEW', items: ['Latest Arrivals', 'Special Offers', 'Limited Editions'] },
    ],
    sports: [
      // Categorías para la sección de deportes.
      { key: 'size-kids', title: 'FOOT SIZE', items: ['US Size 3', 'US Size 4', 'US Size 5', 'Size 30 EU', 'Size 31 EU', 'Size 32 EU'] },
      { key: 'color-sports', title: 'COLOR', items: ['Blue', 'Yellow', 'Pink', 'White', 'Black'] },
      { key: 'material-sports', title: 'MATERIAL', items: ['Leather', 'Synthetic', 'Breathable'] },
      { key: 'price-sports', title: 'PRICE', items: ['$50-100', '$100-150', '$150-200', 'More than $200'] },
      { key: 'new-sports', title: 'NEW', items: ['Performance Gear', 'Sale Items', 'Seasonal Specials'] },
    ],
  };

  return (
    // Componente principal <header>.
    <header ref={headerRef}>
      <nav>
        {/* Lista de enlaces principales de navegación. */}
        <ul className="nav__links">
          {/* Logo de la página */}
          <Link to="/">
            <li className={`link logo ${isActive('/') ? 'active' : ''}`}>NIKE</li>
          </Link>
          {/* Sección Hombres */}
          <Link to="/hombre">
            <li
              className={`link ${visibleDropdown === 'men' ? 'active' : ''}`}
              onClick={() => handleMenuClick('men')}
            >
              MEN
              {visibleDropdown === 'men' && <DropdownMenu categories={categories.men} />}
            </li>
          </Link>
          {/* Sección Mujeres */}
          <Link to="/productosmujeres">
            <li
              className={`link ${visibleDropdown === 'women' ? 'active' : ''}`}
              onClick={() => handleMenuClick('women')}
            >
              WOMEN
              {visibleDropdown === 'women' && <DropdownMenu categories={categories.women} />}
            </li>
          </Link>
          {/* Sección Niños */}
          <Link to="/productoNino">
            <li
              className={`link ${visibleDropdown === 'kids' ? 'active' : ''}`}
              onClick={() => handleMenuClick('kids')}
            >
              KIDS
              {visibleDropdown === 'kids' && <DropdownMenu categories={categories.kids} />}
            </li>
          </Link>
          {/* Sección Deportes */}
          <Link to="/futbol">
            <li
              className={`link ${visibleDropdown === 'sports' ? 'active' : ''}`}
              onClick={() => handleMenuClick('sports')}
            >
              SPORTS
              {visibleDropdown === 'sports' && <DropdownMenu categories={categories.sports} />}
            </li>
          </Link>
          {/* Sección Marcas */}
          <Link to="/marcas">
            <li className={`link ${isActive('/marcas') ? 'active' : ''}`}>BRANDS</li>
          </Link>
          {/* Sección Personalización */}
          <Link to="/personalizado">
            <li className={`link ${isActive('/personalizado') ? 'active' : ''}`}>CUSTOMIZE</li>
          </Link>
        </ul>
        {/* Íconos de redes sociales y carrito de compras */}
        <div className="social__icons">
          <Link to="https://www.facebook.com/nike/">
            <span><i className="ri-facebook-fill"></i></span>
          </Link>
          <Link to="https://x.com/Nike">
            <span><i className="ri-twitter-fill"></i></span>
          </Link>
          <Link to="https://www.nike.com.co/">
            <span><i className="ri-google-fill"></i></span>
          </Link>
          <Link to="https://www.instagram.com/nike/">
            <span><i className="ri-instagram-line"></i></span>
          </Link>
          {/* Carrito de compras */}
          <Link to="/carrito" className={`icon-link ${isActive('/carrito') ? 'active' : ''}`}>
            <i className="ri-shopping-cart-line"></i>
          </Link>
          <span><i className="ri-global-line"></i></span>
        </div>
      </nav>
    </header>
  );
}


export default Header;
