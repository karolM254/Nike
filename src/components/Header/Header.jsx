import React, { useState, useRef, useEffect } from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ChevronDown, ShoppingCart } from 'lucide-react';

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
  const [visibleDropdown, setVisibleDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef(null);

  const handleMenuClick = (menu) => {
    setVisibleDropdown((prev) => (prev === menu ? null : menu));
  };

  const handleClickOutside = (event) => {
    if (headerRef.current && !headerRef.current.contains(event.target)) {
      setVisibleDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  useEffect(() => {
    setVisibleDropdown(null);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <header ref={headerRef} className="responsive-header">
      <nav className="desktop-nav">
        <ul className="nav__links">
          <Link to="/">
            <li className={`link logo ${isActive('/') ? 'active' : ''}`}>NIKE</li>
          </Link>
          <Link to="/hombre">
            <li
              className={`link ${visibleDropdown === 'men' ? 'active' : ''}`}
              onClick={() => handleMenuClick('men')}
            >
              MEN
              
            </li>
          </Link>
          <Link to="/productosmujeres">
            <li
              className={`link ${visibleDropdown === 'women' ? 'active' : ''}`}
              onClick={() => handleMenuClick('women')}
            >
              WOMEN
            </li>
          </Link>
          <Link to="/productoNino">
            <li
              className={`link ${visibleDropdown === 'kids' ? 'active' : ''}`}
              onClick={() => handleMenuClick('kids')}
            >
              KIDS
            </li>
          </Link>
          <Link to="/futbol">
            <li
              className={`link ${visibleDropdown === 'sports' ? 'active' : ''}`}
              onClick={() => handleMenuClick('sports')}
            >
              SPORTS
            </li>
          </Link>
          <Link to="/marcas">
            <li className={`link ${isActive('/marcas') ? 'active' : ''}`}>BRANDS</li>
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
          <Link to="/carrito" className={`link ${isActive('/carrito') ? 'active' : ''}`}>
            <i className="ri-shopping-cart-line"></i>
          </Link>
          <span><i className="ri-global-line"></i></span>
        </div>
      </nav>

      <nav className="mobile-nav">
        <div className="mobile-nav-container">
          
          <Link to="/" className="mobile-logo">NIKE</Link>

          <button 
            className="hamburger-menu" 
            // !!!Este es el boton de estado que me permite mostrar el responsive
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          >
            <Menu size={26} color="white" />
          </button>
          
          {/* Carrito */}
          <Link to="/carrito" className="mobile-cart">
            <ShoppingCart size={24} color="white" />
          </Link>
        </div> 

        {isMobileMenuOpen && (
          <div className="mobile-menu-overlay">
            <div className="mobile-menu-content">
              <div>
                <Link  
                  to="/hombre" 
                  className="mobile-menu-item"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  MEN
                </Link>
              </div>
              
              <div>
                <Link
                  to="/productosmujeres"
                  className="mobile-menu-item"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  WOMEN
                </Link>
              </div>

              <div>
                <Link
                  to="/productoNino"
                  className="mobile-menu-item"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  KIDS
                </Link>
              </div>

              <div>
                <Link
                  to="/futbol"
                  className="mobile-menu-item"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  SPORTS
                </Link>
              </div>

              <div>
                <Link
                  to="/marcas"
                  className="mobile-menu-item"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  BRANDS
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}


export default Header;
