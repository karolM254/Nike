import React from 'react';
import './LandingPage.css';
import { useTranslation } from 'react-i18next'; // Importa el hook useTranslation para cambiar el idioma.

function LandingPage() {
  const { t } = useTranslation(); // Utiliza el hook para obtener la función t de traducción.

  return (
    <>
      <header>
        <div className="section_container header__container">
          <div className="header__content">
            <h1>{t('header.title')}</h1> {/* Traducción de 'NIKE SHOES' */}
            <p>{t('header.subtitle')}</p> {/* Traducción de 'SIGN UP AND GET 50% OFF' */}
          </div>
        </div>
      </header>
      <main className="main__container">
        <div className="main__content">
          <section className="service__container">
            <div className="service__card">
              <span>
                <i className="ri-flight-takeoff-fill" />
              </span>
              <h4>{t('services.freeShipping')}</h4> {/* Traducción de 'FREE SHIPPING' */}
              <p>{t('services.freeShippingDesc')}</p> {/* Traducción de la descripción */}
              <a href="#" className="enlace">
                {t('common.clickHere')} {/* Traducción de 'Click Here' */}
              </a>
            </div>
            <div className="service__card">
              <span>
                <i className="ri-truck-line" />
              </span>
              <h4>{t('services.onTimeDelivery')}</h4> {/* Traducción de 'ON TIME DELIVERY' */}
              <p>{t('services.onTimeDeliveryDesc')}</p> {/* Traducción de la descripción */}
              <a href="#" className="enlace">
                {t('common.clickHere')} {/* Traducción de 'Click Here' */}
              </a>
            </div>
            <div className="service__card">
              <span>
                <i className="ri-time-line" />
              </span>
              <h4>{t('services.reviewsRatings')}</h4> {/* Traducción de 'REVIEWS & RATINGS' */}
              <p>{t('services.reviewsRatingsDesc')}</p> {/* Traducción de la descripción */}
              <a href="#" className="enlace">
                {t('common.clickHere')} {/* Traducción de 'Click Here' */}
              </a>
            </div>
            <div className="service__card">
              <span>
                <i className="ri-customer-service-2-line" />
              </span>
              <h4>{t('services.customerSupport')}</h4> {/* Traducción de 'CUSTOMER SUPPORT' */}
              <p>{t('services.customerSupportDesc')}</p> {/* Traducción de la descripción */}
              <a href="#" className="enlace">
                {t('common.clickHere')} {/* Traducción de 'Click Here' */}
              </a>
            </div>
          </section>

          <section className="banner">
            <div className="banner__content">
              <p className="subtitle">{t('banner.offerOfTheMonth')}</p> {/* Traducción de 'OFFER OF THE MONTH' */}
              <h4 className="title">{t('banner.productName')}</h4> {/* Traducción del nombre del producto */}
              <p className="description">{t('banner.productDescription')}</p> {/* Traducción de la descripción */}
              <div className="price">
                <span>{t('banner.currentPrice')}</span> <del>{t('banner.originalPrice')}</del>
              </div>
              <div className="countdown">
                <div className="square">
                  <p>09</p>
                  <span>{t('banner.hours')}</span> {/* Traducción de 'HOURS' */}
                </div>
                <div className="square">
                  <p>56</p>
                  <span>{t('banner.minutes')}</span> {/* Traducción de 'MINUTES' */}
                </div>
                <div className="square">
                  <p>11</p>
                  <span>{t('banner.seconds')}</span> {/* Traducción de 'SECONDS' */}
                </div>
              </div>
              <button>{t('banner.shopNow')}</button> {/* Traducción de 'SHOP NOW' */}
            </div>
            <div className="banner__image"></div>
          </section>
          <section className="collection__container">
            <div className="collection__image">
              <img src="assets/collection-1.png" alt="collection" />
              <h4>STEFAN JANOSKI MAX</h4>
              <p>$100.00 <del>$200</del></p>
            </div>
            <div className="collection__image">
              <img src="assets/collection-2.png" alt="collection" />
              <h4>VANDAL HIGH SUPREME</h4>
              <p>$100.00 <del>$200</del></p>
            </div>
            <div className="collection__image">
              <img src="assets/collection-3.png" alt="collection" />
              <h4>NEW ZOOM</h4>
              <p>$100.00 <del>$200</del></p>
            </div>
            <div className="collection__image">
              <img src="assets/collection-4.png" alt="collection" />
              <h4>FIT SHOES</h4>
              <p>$100.00 <del>$200</del> </p>
            </div>
            <div className="collection__card">
              <h4>{t('text-banner-2.content1')}</h4>
              <p>{t('text-banner-2.content2')}</p>
            </div>
            <div className="collection__image">
              <img src="assets/collection-5.png" alt="collection" />
            </div>
            <div className="collection__banner">
              <div className="collection__banner__content">
                {t('text-banner.content1')}<br></br>
                {t('text-banner.content2')}
              </div>
            </div>
            <div className="collection__image">
              <img src="assets/collection-6.png" alt="collection" />
              <h4>SPORTS SHOES</h4>
              <p>$100.00 <del>$200</del></p>
            </div>
            <div className="collection__image">
              <img src="assets/collection-7.png" alt="collection" />
              <h4>MEN SHOES</h4>
              <p>$100.00 <del>$200</del></p>
            </div>
            <div className="collection__image">
              <img src="assets/collection-8.png" alt="collection" />
              <h4>NIKE AIR SHOES</h4>
              <p>$100.00 <del>$200</del></p>
            </div>
            <div className="collection__image">
              <img src="assets/collection-9.png" alt="collection" />
              <h4>GIRL SHOES</h4>
              <p>$100.00 <del>$200</del></p>
            </div>
          </section>

          <section className="gallery">
            <div className="gallery__image">
              <img src="assets/gallery-1.jpg" alt="gallery" />
            </div>
            <div className="gallery__image">
              <img src="assets/gallery-2.jpg" alt="gallery" />
            </div>
            <div className="gallery__image">
              <img src="assets/gallery-3.jpg" alt="gallery" />
            </div>
            <div className="gallery__image">
              <img src="assets/gallery-4.jpg" alt="gallery" />
            </div>
            <div className="gallery__image">
              <img src="assets/gallery-5.jpg" alt="gallery" />
            </div>
            <div className="gallery__image">
              <img src="assets/gallery-6.jpg" alt="gallery" />
            </div>
            <div className="gallery__image">
              <img src="assets/gallery-7.jpg" alt="gallery" />
            </div>
            <div className="gallery__image">
              <img src="assets/gallery-8.jpg" alt="gallery" />
            </div>
            <div className="gallery__image">
              <img src="assets/gallery-9.jpg" alt="gallery" />
            </div>
          </section>

          <section className="brands__container">
            <div className="brand__image">
              <img src="assets/brand-1.png" alt="brand" />
            </div>
            <div className="brand__image">
              <img src="assets/brand-2.png" alt="brand" />
            </div>
            <div className="brand__image">
              <img src="assets/brand-3.png" alt="brand" />
            </div>
            <div className="brand__image">
              <img src="assets/brand-1.png" alt="brand" />
            </div>
            <div className="brand__image">
              <img src="assets/brand-2.png" alt="brand" />
            </div>
            <div className="brand__image">
              <img src="assets/brand-3.png" alt="brand" />
            </div>
            <div className="brand__image">
              <img src="assets/brand-4.png" alt="brand" />
            </div>
            <div className="brand__image">
              <img src="assets/brand-5.png" alt="brand" />
            </div>
            <div className="brand__image">
              <img src="assets/brand-6.png" alt="brand" />
            </div>
            <div className="brand__image">
              <img src="assets/brand-4.png" alt="brand" />
            </div>
            <div className="brand__image">
              <img src="assets/brand-5.png" alt="brand" />
            </div>
            <div className="brand__image">
              <img src="assets/brand-6.png" alt="brand" />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default LandingPage;