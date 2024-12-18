import React, { useState, useRef, useEffect } from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ShoppingCart, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // Importa el hook useTranslation para cambiar el idioma.

function Header() {
  const [visibleDropdown, setVisibleDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef(null);
  const { t, i18n } = useTranslation(); // Usamos el hook useTranslation

  // Función para cambiar el idioma
  const toggleLanguage = (lang) => {
    i18n.changeLanguage(lang); // Cambia el idioma usando i18next
  };

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
            <li className={`link logo ${isActive('/') ? 'active' : ''}`}>{t('logo')}</li>
          </Link>
          <Link to="/hombre">
            <li
              className={`link ${visibleDropdown === 'men' ? 'active' : ''}`}
              onClick={() => handleMenuClick('men')}
            >
              {t('men')}
            </li>
          </Link>
          <Link to="/productosmujeres">
            <li
              className={`link ${visibleDropdown === 'women' ? 'active' : ''}`}
              onClick={() => handleMenuClick('women')}
            >
              {t('women')}
            </li>
          </Link>
          <Link to="/productoNino">
            <li
              className={`link ${visibleDropdown === 'kids' ? 'active' : ''}`}
              onClick={() => handleMenuClick('kids')}
            >
              {t('kids')}
            </li>
          </Link>
          <Link to="/futbol">
            <li
              className={`link ${visibleDropdown === 'sports' ? 'active' : ''}`}
              onClick={() => handleMenuClick('sports')}
            >
              {t('sports')}
            </li>
          </Link>
          <Link to="/marcas">
            <li className={`link ${isActive('/marcas') ? 'active' : ''}`}>{t('brands')}</li>
          </Link>
        </ul>

        {/* Iconos de redes sociales y carrito de compras */}
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

          {/* Botones para cambiar el idioma */}
          <button onClick={() => toggleLanguage('en')}>EN</button>
          <button onClick={() => toggleLanguage('es')}>ES</button>
        </div>
      </nav>

      {/* Mobile menu */}
      <nav className="mobile-nav">
        <div className="mobile-nav-container">
          <Link to="/" className="mobile-logo">{t('logo')}</Link>

          <button 
            className="hamburger-menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu size={26} color="white" />
          </button>

          {/* Internacionalización (Globe icono) */}
          <Link to="/" className="mobile-cart">
            <Globe size={24} color="white" />
          </Link>

          {/* Carrito (ShoppingCart icono) */}
          <Link to="/carrito" className="mobile-cart">
            <ShoppingCart size={24} color="white" />
          </Link>
        </div>

        {isMobileMenuOpen && (
          <div className="mobile-menu-overlay">
            <div className="mobile-menu-content">
              <Link to="/hombre" className="mobile-menu-item" onClick={() => setIsMobileMenuOpen(false)}>{t('men')}</Link>
              <Link to="/productosmujeres" className="mobile-menu-item" onClick={() => setIsMobileMenuOpen(false)}>{t('women')}</Link>
              <Link to="/productoNino" className="mobile-menu-item" onClick={() => setIsMobileMenuOpen(false)}>{t('kids')}</Link>
              <Link to="/futbol" className="mobile-menu-item" onClick={() => setIsMobileMenuOpen(false)}>{t('sports')}</Link>
              <Link to="/marcas" className="mobile-menu-item" onClick={() => setIsMobileMenuOpen(false)}>{t('brands')}</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;