import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div className="section__container footer__container">
        <div className="footer__col">
          <h4>SHOPS</h4>
          <p>Men</p>
          <p>Women</p>
          <p>Top Brands</p>
          <p>Bags & Accessories</p>
          <p>Lookbook</p>
        </div>
        <div className="footer__col">
          <h4>INFORMATION</h4>
          <p>About Us</p>
          <a href=""><p>Customer Service</p></a>
          <a href=""><p>Manufacturers</p></a>
          <a href=""><p>Privacy Policy</p></a>
          <p>Blog</p>
        </div>
        <div className="footer__col">
          <h4>STAY CONNECTED</h4>
          <div className="footer__socials">
            <span><i className="ri-facebook-fill"></i></span>
            <span><i className="ri-twitter-fill"></i></span>
            <span><i className="ri-google-fill"></i></span>
            <span><i className="ri-instagram-line"></i></span>
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
