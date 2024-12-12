/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Header.css';

// Componente reutilizable para el submenú
function DropdownMenu({ categories }) {
  return (
    <div className="contenido-women active">
      {categories.map((category, index) => (
        <div key={index} className={`filtros-${category.key}`}>
          <h4 className={`tittle-${category.key}`}>{category.title}</h4>
          <ul className={`list-${category.key}`}>
            {category.items.map((item, idx) => (
              <li key={idx} className={`${category.key}`}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Header() {
  const [visibleDropdown, setVisibleDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setVisibleDropdown(menu); // Mostrar el menú correspondiente
  };

  const handleMouseLeave = () => {
    setVisibleDropdown(null); // Ocultar todos los menús
  };

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
      { key: 'type-sports', title: 'TYPE', items: ['Running', 'Basketball', 'Football', 'Tennis', 'Training'] },
      { key: 'brands-sports', title: 'BRANDS', items: ['Nike', 'Adidas', 'Puma', 'Under Armour', 'Reebok'] },
      { key: 'material-sports', title: 'MATERIAL', items: ['Breathable mesh', 'Rubber', 'Synthetic'] },
      { key: 'price-sports', title: 'PRICE', items: ['$50-100', '$100-150', '$150-200', 'More than $200'] },
      { key: 'new-sports', title: 'NEW', items: ['Performance Gear', 'Sale Items', 'Seasonal Specials'] },
    ],
  };

  return (
    <header>
      <nav>
        <ul className="nav__links">
          <li className="link logo">NIKE</li>
          <li
            className="link"
            onMouseEnter={() => handleMouseEnter('women')}
            onMouseLeave={handleMouseLeave}
          >
            MEN
            {visibleDropdown === 'women' && <DropdownMenu categories={categories.women} />}
          </li>
          <li
            className="link"
            onMouseEnter={() => handleMouseEnter('kids')}
            onMouseLeave={handleMouseLeave}
          >
            WOMEN
            {visibleDropdown === 'kids' && <DropdownMenu categories={categories.kids} />}
          </li>
          <li
            className="link"
            onMouseEnter={() => handleMouseEnter('men')}
            onMouseLeave={handleMouseLeave}
          >
            KIDS
            {visibleDropdown === 'men' && <DropdownMenu categories={categories.men} />}
          </li>
          <li
            className="link"
            onMouseEnter={() => handleMouseEnter('sports')}
            onMouseLeave={handleMouseLeave}
          >
            SPORTS
            {visibleDropdown === 'sports' && <DropdownMenu categories={categories.sports} />}
          </li>
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
