import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="section__container footer__container">
        <div className="footer__col">
          <h4>SHOPS</h4>
          <Link to="/hombre">
            <p>Men</p>
          </Link>
          <Link to="/productosmujeres">
            <p>Women</p>
          </Link>
          <Link to="">
            <p>Top Brands</p>
          </Link>
          <Link to="">
            <p>Bags & Accessories</p>
          </Link>
          <Link to="">
            <p>Lookbook</p>
          </Link>
        </div>
        <div className="footer__col">
          <h4>INFORMATION</h4>
          <Link to="">
            <p>About Us</p>
          </Link>
          <Link to="/personalizado">
            <p>Customer Service</p>
          </Link>
          <Link to="">
            <p>Manufacturers</p>
          </Link>
          <Link to="/politicas">
            <p>Privacy Policy</p>
          </Link>
          <Link to="/eventos">
            <p>Blog</p>
          </Link>
        </div>
        <div className="footer__col">
          <h4>STAY CONNECTED</h4>
          <div className="footer__socials">
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
          </div>
        </div>
      </div>
      <div className="section__container footer__bar">
        <div className="copyright">
          Copyright © 2024 Web Design Mastery. All rights reserved.
        </div>
        <div className="payment__cards">
          <span><i className="ri-visa-fill"></i></span>
          <span><i className="ri-bank-card-2-fill"></i></span>
          <span><i className="ri-mastercard-line"></i></span>
          <span><i className="ri-bank-card-2-line"></i></span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
