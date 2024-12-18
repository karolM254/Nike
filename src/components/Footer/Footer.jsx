import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Importa el hook useTranslation para cambiar el idioma.

function Footer() {
  const { t } = useTranslation(); // Utiliza el hook para obtener la función t de traducción.

  return (
    <footer>
      <div className="section__container footer__container">
        <div className="footer__col">
          <h4>{t('footer.shops.name')}</h4>
          <Link to="/hombre">
            <p>{t('footer.shops.name1')}</p>
          </Link>
          <Link to="/productosmujeres">
            <p>{t('footer.shops.name2')}</p>
          </Link>
          <Link to="/marcas">
            <p>{t('footer.shops.name3')}</p>
          </Link>
          <Link to="/galeria">
            <p>{t('footer.shops.name4')}</p>
          </Link>
        </div>
        <div className="footer__col">
          <h4>{t('footer.information.name')}</h4>
          <Link to="/sobrenosotros">
            <p>{t('footer.information.name1')}</p>
          </Link>
          <Link to="/atencion">
            <p>{t('footer.information.name2')}</p>
          </Link>
          <Link to="/fabricantes">
            <p>{t('footer.information.name3')}</p>
          </Link>
          <Link to="/politicas">
            <p>{t('footer.information.name4')}</p>
          </Link>
          <Link to="/eventos">
            <p>{t('footer.information.name5')}</p>
          </Link>
        </div>
        <div className="footer__col">
          <h4>{t('footer.stayConnected.name1')}</h4>
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
          {t('footer.copyright')}
        </div>
        <div className="payment__cards">
          <Link to={t('footer.paymentCards.visa')}>
            <i className="ri-visa-fill"></i>
          </Link>
          <Link to={t('footer.paymentCards.davivienda')}>
            <i className="ri-bank-card-2-fill"></i>
          </Link>
          <Link to={t('footer.paymentCards.mastercard')}>
            <i className="ri-mastercard-line"></i>
          </Link>
          <Link to={t('footer.paymentCards.bancolombia')}>
            <i className="ri-bank-card-2-line"></i>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;