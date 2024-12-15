/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';

// Componente reutilizable para el submenú
function DropdownMenu({ categories }) {
  return (
    <div className="contenido-women active">
      {categories.map((category, index) => (
        <div key={index} className={`filtros-${category.key}`}>
          <h4 className={`tittle-${category.key}`}>{category.title}</h4>
          <ul className={`list-${category.key}`}>
            {category.items.map((item, idx) => (
              <React.Fragment key={idx}>
                <li className={`${category.key}`}>{item}</li>
                {/* Insertar un <hr> después de las tallas US */}
                {item.includes('US') && categories[index].items[idx + 1]?.includes('EU') && <hr className='contenido-women-hr'/>}
              </React.Fragment>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Header() {
  const [visibleDropdown, setVisibleDropdown] = useState(null);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false); // Control del menú de idiomas
  const [selectedLanguage, setSelectedLanguage] = useState('es'); // Idioma por defecto
  const location = useLocation(); // Obtener la ruta actual

  const handleMouseEnter = (menu) => {
    setVisibleDropdown(menu); // Mostrar el menú correspondiente
  };

  const handleMouseLeave = () => {
    setVisibleDropdown(null); // Ocultar todos los menús
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const changeLanguage = (language) => {
    setSelectedLanguage(language);
    setIsLanguageMenuOpen(false);
  };

  // Función para determinar si un enlace está activo
  const isActive = (path) => location.pathname === path;

  const categories = {
    women: [
      { key: 'size-women', title: 'FOOT SIZE', items: ['US size 9', 'US Size 10', 'US Size 11', 'EU Size 39', 'EU Size 40', 'EU Size 41', 'EU Size 42', 'EU Size 43'] },
      { key: 'color-women', title: 'COLOR', items: ['White', 'Black', 'Pink', 'Red', 'Green'] },
      { key: 'material-women', title: 'MATERIAL', items: ['Leather', 'Synthetic', 'Breathable mesh'] },
      { key: 'price-women', title: 'PRICE', items: ['$50-100', '$100-150', '$150-200', 'More than $200'] },
      { key: 'new-women', title: 'NEW', items: ['New Collections', 'Offers and Discounts', 'Limited editions'] },
    ],
    kids: [
      { key: 'size-kids', title: 'FOOT SIZE', items: ['US Size 3', 'US Size 4', 'US Size 5', 'Size 30 EU', 'Size 31 EU', 'Size 32 EU'] },
      { key: 'color-kids', title: 'COLOR', items: ['Blue', 'Yellow', 'Pink', 'White', 'Black'] },
      { key: 'material-kids', title: 'MATERIAL', items: ['Synthetic', 'Breathable mesh', 'Rubber'] },
      { key: 'price-kids', title: 'PRICE', items: ['$30-50', '$50-70', '$70-100', 'More than $100'] },
      { key: 'new-kids', title: 'NEW', items: ['Seasonal Collections', 'Discounted', 'Exclusive Editions'] },
    ],
    men: [
      { key: 'size-men', title: 'FOOT SIZE', items: ['US Size 8', 'US Size 9', 'US Size 10', 'Size 41 EU', 'Size 42 EU', 'Size 43 EU'] },
      { key: 'color-men', title: 'COLOR', items: ['Black', 'White', 'Gray', 'Navy', 'Brown'] },
      { key: 'material-men', title: 'MATERIAL', items: ['Leather', 'Synthetic', 'Canvas'] },
      { key: 'price-men', title: 'PRICE', items: ['$70-100', '$100-150', '$150-200', 'More than $200'] },
      { key: 'new-men', title: 'NEW', items: ['Latest Arrivals', 'Special Offers', 'Limited Editions'] },
    ],
    sports: [
      { key: 'size-kids', title: 'FOOT SIZE', items: ['US Size 3', 'US Size 4', 'US Size 5', 'Size 30 EU', 'Size 31 EU', 'Size 32 EU'] },
      { key: 'color-sports', title: 'COLOR', items: ['Blue', 'Yellow', 'Pink', 'White', 'Black'] },
      { key: 'material-sports', title: 'MATERIAL', items: ['Leather', 'Synthetic', 'Breathable'] },
      { key: 'price-sports', title: 'PRICE', items: ['$50-100', '$100-150', '$150-200', 'More than $200'] },
      { key: 'new-sports', title: 'NEW', items: ['Performance Gear', 'Sale Items', 'Seasonal Specials'] },
    ],
  };

  return (
    <header>
      <nav>
        <ul className="nav__links">
          <Link to="/">
            <li className={`link logo ${isActive('/') ? 'active' : ''}`}>NIKE</li>
          </Link>
          <Link to="/hombre">
            <li
              className={`link ${isActive('/hombre') ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter('men')}
              onMouseLeave={handleMouseLeave}
            >
              MEN
              {visibleDropdown === 'men' && <DropdownMenu categories={categories.men} />}
            </li>
          </Link>
          <Link to="/productosmujeres">
            <li
              className={`link ${isActive('/productosmujeres') ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter('women')}
              onMouseLeave={handleMouseLeave}
            >
              WOMEN
              {visibleDropdown === 'women' && <DropdownMenu categories={categories.women} />}
            </li>
          </Link>
          <Link to="/productoNino">
            <li
              className={`link ${isActive('/productoNino') ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter('kids')}
              onMouseLeave={handleMouseLeave}
            >
              KIDS
              {visibleDropdown === 'kids' && <DropdownMenu categories={categories.kids} />}
            </li>
          </Link>
          <Link to="/futbol">
            <li
              className={`link ${isActive('/futbol') ? 'active' : ''}`}
              onMouseEnter={() => handleMouseEnter('sports')}
              onMouseLeave={handleMouseLeave}
            >
              SPORTS
              {visibleDropdown === 'sports' && <DropdownMenu categories={categories.sports} />}
            </li>
          </Link>
          <Link to="/marcas">
            <li className={`link ${isActive('/marcas') ? 'active' : ''}`}>BRANDS</li>
          </Link>
          <Link to="/personalizado">
            <li className={`link ${isActive('/personalizado') ? 'active' : ''}`}>CUSTOMIZE</li>
          </Link>
        </ul>
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
          <Link to="/carrito">
          <span className={`link ${isActive('/carrito') ? 'active' : ''}`}><i className="ri-shopping-cart-line"></i></span>
          </Link>
          <span className="language-selector">
            <i className="ri-global-line" onClick={toggleLanguageMenu}></i>
            {/* Implementación del menú para el cambio de idioma */}
            {isLanguageMenuOpen && ( 
              <div className="language-menu">
                <div
                  className={`language-option ${
                    selectedLanguage === 'en' ? 'selected' : ''
                  }`}
                  onClick={() => changeLanguage('en')} //Cambia el idioma a Inglés
                >
                  Inglés {selectedLanguage === 'en' && <span><i class="ri-check-line"></i></span>}
                </div>
                <hr />
                <div
                  className={`language-option ${
                    selectedLanguage === 'es' ? 'selected' : ''
                  }`}
                  onClick={() => changeLanguage('es')} //Cmabia el idioma a Español
                >
                  Español {selectedLanguage === 'es' && <span><i class="ri-check-line"></i></span>}
                </div>
              </div>
            )}
          </span>

        </div>
      </nav>
    </header>
  );
}

export default Header;
