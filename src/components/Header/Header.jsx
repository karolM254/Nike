/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
/* eslint-enable no-unused-vars */
import './Header.css';

function Header() {
  // Referencias para el enlace y el contenido del menú desplegable
  const womenLinkRef = useRef(null);
  const dropdownWomenRef = useRef(null);

  // Estado para controlar si el dropdown está activo
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Mostrar el dropdown al pasar el mouse por encima
  const handleMouseEnter = () => {
    setIsDropdownVisible(true); // Mostrar el menú
  };

  // Ocultar el dropdown al salir con el mouse
  const handleMouseLeave = () => {
    setIsDropdownVisible(false); // Ocultar el menú
  };

  return (
    <header>
      <nav>
        <ul className="nav__links">
          <li className="link logo">NIKE</li>
          <li className="link" ref={womenLinkRef}
              onMouseEnter={handleMouseEnter} 
              onMouseLeave={handleMouseLeave}>
            WOMEN
            {/* Contenido del menú desplegable */}
            <div 
              className={`contenido-women ${isDropdownVisible ? 'active' : ''}`} 
              ref={dropdownWomenRef}
            >
              <div className="filtros-size-women">
                <h4 className="tittle-size-women">FOOT SIZE</h4>
                <ul className="list-size-women">
                  <li className="sizes-foot-women">US Size 5</li>
                  <li className="sizes-foot-women">US Size 6</li>
                  <li className="sizes-foot-women">US Size 7</li>
                  <li className="sizes-foot-women">Size 36 EU</li>
                  <li className="sizes-foot-women">Size 37 EU</li>
                  <li className="sizes-foot-women">Size 38 EU</li>
                  <li className="sizes-foot-women">Size 39 EU</li>
                  <li className="sizes-foot-women">Size 40 EU</li>
                </ul>
              </div>
              <div className="filtros-color-women">
                <h4 className="tittle-color-women">COLOR</h4>
                <ul className="list-color-women">
                  <li className="color-women">White</li>
                  <li className="color-women">Black</li>
                  <li className="color-women">Pink</li>
                  <li className="color-women">Red</li>
                  <li className="color-women">Green</li>
                </ul>
              </div>
              <div className="filtros-material-women">
                <h4 className="tittle-material-women">MATERIAL</h4>
                <ul className="list-material-women">
                  <li className="material-women">Leather</li>
                  <li className="material-women">Synthetic</li>
                  <li className="material-women">Breathable mesh</li>
                </ul>
              </div>
              <div className="filtros-price-women">
                <h4 className="tittle-price-women">PRICE</h4>
                <ul className="list-price-women">
                  <li className="price-women">$50-100</li>
                  <li className="price-women">$100-150</li>
                  <li className="price-women">$150-200</li>
                  <li className="price-women">More than $200</li>
                </ul>
              </div>
              <div className="filtros-new-women">
                <h4 className="tittle-new-women">NEW</h4>
                <ul className="list-new-women">
                  <li className="new-women">New Collections</li>
                  <li className="new-women">Offers and Discounts</li>
                  <li className="new-women">Limited editions</li>
                </ul>
              </div>
            </div>
          </li>
          <li className="link">MEN</li>
          <li className="link">KIDS</li>
          <li className="link">SPORTS</li>
          <li className="link">BRANDS</li>
          <li className="link">CUSTOMIZE</li>
        </ul>
        <div className="social__icons">
          <span><i className="ri-facebook-fill"></i></span>
          <span><i className="ri-twitter-fill"></i></span>
          <span><i className="ri-google-fill"></i></span>
          <span><i className="ri-instagram-line"></i></span>
          <span><i className="ri-shopping-cart-line"></i></span>
          <span><i className="ri-global-line"></i></span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
