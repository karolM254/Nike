import React from "react";
import "../Header/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <ul className="menu">
          <li className="dropdown">
          <Link
            to="/">
            <a href="#">NIKE</a>
          </Link>
          </li>
          <li className="dropdown">
            <a href="#">MEN</a>
            <div className="dropdown-content">
              <div className="dropdown-grid">
                <div>
                  <h4>FOOT SIZE</h4>
                  <ul>
                    <li>US Size 9</li>
                    <li>US Size 10</li>
                    <li>US Size 11</li>
                    <hr />
                    <li>EU Size 39</li>
                    <li>EU Size 40</li>
                    <li>EU Size 41</li>
                    <li>EU Size 42</li>
                    <li>EU Size 43</li>
                  </ul>
                </div>
                <div>
                  <h4>COLOR</h4>
                  <ul>
                    <li>White</li>
                    <li>Black</li>
                    <li>Blue</li>
                    <li>Red</li>
                    <li>Green</li>
                  </ul>
                </div>
                <div>
                  <h4>MATERIAL</h4>
                  <ul>
                    <li>Leather</li>
                    <li>Synthetic</li>
                    <li>Breathable mesh</li>
                  </ul>
                </div>
                <div>
                  <h4>PRICE</h4>
                  <ul>
                    <li>$50-$100</li>
                    <li>$100-$150</li>
                    <li>$150-$200</li>
                    <li>More than $200</li>
                  </ul>
                </div>
                <div>
                  <h4>NEW</h4>
                  <ul>
                    <li>New Collection</li>
                    <li>Offers and Discounts</li>
                    <li>Limited Editions</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="dropdown">
          <Link
            to="/productosmujeres">
            <a href="">WOMEN</a>
          </Link>
            <div className="dropdown-content">
              <div className="dropdown-grid">
                <div>
                  <h4>FOOT SIZE</h4>
                  <ul>
                    <li>US Size 5</li>
                    <li>US Size 6</li>
                    <li>US Size 7</li>
                    <hr />
                    <li>Size 36 EU</li>
                    <li>Size 37 EU</li>
                    <li>Size 38 EU</li>
                    <li>Size 39 EU</li>
                    <li>Size 40 EU</li>
                  </ul>
                </div>
                <div>
                  <h4>COLOR</h4>
                  <ul>
                    <li>White</li>
                    <li>Black</li>
                    <li>Blue</li>
                    <li>Red</li>
                    <li>Green</li>
                  </ul>
                </div>
                <div>
                  <h4>MATERIAL</h4>
                  <ul>
                    <li>Leather</li>
                    <li>Synthetic</li>
                    <li>Breathable mesh</li>
                  </ul>
                </div>
                <div>
                  <h4>PRICE</h4>
                  <ul>
                    <li>$50-$100</li>
                    <li>$100-$150</li>
                    <li>$150-$200</li>
                    <li>More than $200</li>
                  </ul>
                </div>
                <div>
                  <h4>NEW</h4>
                  <ul>
                    <li>New Collection</li>
                    <li>Offers and Discounts</li>
                    <li>Limited Editions</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="dropdown">
          <Link
            to="/productoNino">
            <a href="#">KIDS</a>
          </Link>
            <div className="dropdown-content">
              <div className="dropdown-grid">
                <div>
                  <h4>FOOT SIZE</h4>
                  <ul>
                    <li>US Size 4</li>
                    <li>US Size 5</li>
                    <li>US Size 7</li>
                    <hr />
                    <li>EU Size 20</li>
                    <li>EU Size 22</li>
                    <li>EU Size 24</li>
                    <li>EU Size 26</li>
                    <li>EU Size 33</li>
                  </ul>
                </div>
                <div>
                  <h4>COLOR</h4>
                  <ul>
                    <li>White</li>
                    <li>Black</li>
                    <li>Blue</li>
                    <li>Red</li>
                    <li>Green</li>
                  </ul>
                </div>
                <div>
                  <h4>MATERIAL</h4>
                  <ul>
                    <li>Leather</li>
                    <li>Synthetic</li>
                    <li>Breathable mesh</li>
                  </ul>
                </div>
                <div>
                  <h4>PRICE</h4>
                  <ul>
                    <li>$50-$100</li>
                    <li>$100-$150</li>
                    <li>$150-$200</li>
                    <li>More than $200</li>
                  </ul>
                </div>
                <div>
                  <h4>NEW</h4>
                  <ul>
                    <li>New Collection</li>
                    <li>Offers and Discounts</li>
                    <li>Limited Editions</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="dropdown">
          <Link
            to="/futbol">
            <a href="">SPORTS</a>
          </Link>
            <div className="dropdown-content">
              <div className="dropdown-grid">
                <div>
                  <h4>FOOT SIZE</h4>
                  <ul>
                    <li>US Size 5</li>
                    <li>US Size 6</li>
                    <li>US Size 7</li>
                    <hr />
                    <li>Size 36 EU</li>
                    <li>Size 37 EU</li>
                    <li>Size 38 EU</li>
                    <li>Size 39 EU</li>
                    <li>Size 40 EU</li>
                  </ul>
                </div>
                <div>
                  <h4>COLOR</h4>
                  <ul>
                    <li>White</li>
                    <li>Black</li>
                    <li>Blue</li>
                    <li>Red</li>
                    <li>Green</li>
                  </ul>
                </div>
                <div>
                  <h4>MATERIAL</h4>
                  <ul>
                    <li>Leather</li>
                    <li>Synthetic</li>
                    <li>Breathable mesh</li>
                  </ul>
                </div>
                <div>
                  <h4>PRICE</h4>
                  <ul>
                    <li>$50-$100</li>
                    <li>$100-$150</li>
                    <li>$150-$200</li>
                    <li>More than $200</li>
                  </ul>
                </div>
                <div>
                  <h4>NEW</h4>
                  <ul>
                    <li>New Collection</li>
                    <li>Offers and Discounts</li>
                    <li>Limited Editions</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="dropdown">
          <Link
            to="/marcas">
            <a href="#">BRANDS</a>
          </Link>
            <div className="dropdown-content">
              <div className="dropdown-grid">
                <div>
                  <h4>FOOT SIZE</h4>
                  <ul>
                    <li>US Size 5</li>
                    <li>US Size 6</li>
                    <li>US Size 7</li>
                    <hr />
                    <li>Size 36 EU</li>
                    <li>Size 37 EU</li>
                    <li>Size 38 EU</li>
                    <li>Size 39 EU</li>
                    <li>Size 40 EU</li>
                  </ul>
                </div>
                <div>
                  <h4>COLOR</h4>
                  <ul>
                    <li>White</li>
                    <li>Black</li>
                    <li>Blue</li>
                    <li>Red</li>
                    <li>Green</li>
                  </ul>
                </div>
                <div>
                  <h4>MATERIAL</h4>
                  <ul>
                    <li>Leather</li>
                    <li>Synthetic</li>
                    <li>Breathable mesh</li>
                  </ul>
                </div>
                <div>
                  <h4>PRICE</h4>
                  <ul>
                    <li>$50-$100</li>
                    <li>$100-$150</li>
                    <li>$150-$200</li>
                    <li>More than $200</li>
                  </ul>
                </div>
                <div>
                  <h4>NEW</h4>
                  <ul>
                    <li>New Collection</li>
                    <li>Offers and Discounts</li>
                    <li>Limited Editions</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="dropdown">
          <Link
            to="/personalizado">
            <a href="#">CUSTOMIZE</a>
          </Link>
          </li>
        </ul>
      </nav>
      <nav>
  <ul className="icons">
    <li>
      <a href="https://www.facebook.com/nike" target="_blank" rel="noopener noreferrer">
        <img src="/assets/facebook.png" alt="Facebook" />
      </a>
    </li>
    <li>
      <a href="https://twitter.com/nike" target="_blank" rel="noopener noreferrer">
        <img src="/assets/twitter.png" alt="Twitter" />
      </a>
    </li>
    <li>
      <a href="https://www.google.com/search?q=nike" target="_blank" rel="noopener noreferrer">
        <img src="/assets/google.png" alt="Google" />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/nike" target="_blank" rel="noopener noreferrer">
        <img src="/assets/logotipo-de-instagram.png" alt="Instagram" />
      </a>
    </li>
  </ul>
      <ul className="icons2">
        <li>
          <img src="/assets/carrito-de-compras.png" alt="Carrito de compras" />
        </li>
        <li>
          <img src="/assets/sitio-web.png" alt="Sitio web" />
        </li>
      </ul>
    </nav>
    </header>
  );
};

export default Header;

