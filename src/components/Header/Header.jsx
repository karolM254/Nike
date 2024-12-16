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
              {visibleDropdown === 'men' && <DropdownMenu categories={categories.men} />}
            </li>
          </Link>
          <Link to="/productosmujeres">
            <li
              className={`link ${visibleDropdown === 'women' ? 'active' : ''}`}
              onClick={() => handleMenuClick('women')}
            >
              WOMEN
              {visibleDropdown === 'women' && <DropdownMenu categories={categories.women} />}
            </li>
          </Link>
          <Link to="/productoNino">
            <li
              className={`link ${visibleDropdown === 'kids' ? 'active' : ''}`}
              onClick={() => handleMenuClick('kids')}
            >
              KIDS
              {visibleDropdown === 'kids' && <DropdownMenu categories={categories.kids} />}
            </li>
          </Link>
          <Link to="/futbol">
            <li
              className={`link ${visibleDropdown === 'sports' ? 'active' : ''}`}
              onClick={() => handleMenuClick('sports')}
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
        </div>
      </nav>

      <nav className="mobile-nav">
        <div className="mobile-nav-container">
          
          <Link to="/" className="mobile-logo">NIKE</Link>

          <button 
            className="hamburger-menu" 
            // !!!Este es el estado que me permite mostrar el responsive
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
                <button>
                  <ChevronDown size={26} color="white"/>
                </button>
              </div>
              
              <div>
                <Link
                  to="/productosmujeres"
                  className="mobile-menu-item"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  WOMEN
                </Link>
                <button>
                  <ChevronDown size={26} color="white"/>
                </button>
              </div>

              <div>
                <Link
                  to="/productoNino"
                  className="mobile-menu-item"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  KIDS
                </Link>
                <button>
                  <ChevronDown size={26} color="white"/>
                </button>
              </div>

              <div>
                <Link
                  to="/futbol"
                  className="mobile-menu-item"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  SPORTS
                </Link>
                <button>
                  <ChevronDown size={26} color="white"/>
                </button>
              </div>

              <div>
                <Link
                  to="/marcas"
                  className="mobile-menu-item"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  BRANDS
                </Link>
                <button>
                  <ChevronDown size={26} color="white"/>
                </button>
              </div>

              <div>
                <Link
                  to="/personalizado"
                  className="mobile-menu-item"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  CUSTOMIZE
                </Link>
                <button>
                  <ChevronDown size={26} color="white"/>
                </button>
              </div>

            </div>
          </div>
        )}
      </nav>
    </header>
  );
}


export default Header;
