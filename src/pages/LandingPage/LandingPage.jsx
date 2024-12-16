import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <>
      <header>
        <div className="section_container header__container">
          <div className="header__content">
            <h1>NIKE<br />SHOES</h1>
            <p>SIGN UP AND GET 50% OFF</p>
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
              <h4>FREE SHIPPING</h4>
              <p>
                Online shopping offers convenience, a vast selection of products,
                and the ability to shop from anywhere, anytime.
              </p>
              <a href="#" className="enlace">
                Click Here
              </a>
            </div>
            <div className="service__card">
              <span>
                <i className="ri-truck-line" />
              </span>
              <h4>ON TIME DELIVERY</h4>
              <p>
                E-commerce companies handle the logistics of delivering products
                to customers &#38; doorsteps.
              </p>
              <a href="#" className="enlace">
                Click Here
              </a>
            </div>
            <div className="service__card">
              <span>
                <i className="ri-time-line" />
              </span>
              <h4>REVIEWS & RATINGS</h4>
              <p>
                E-commerce platforms often have a review and rating system where
                customers can share their feedback.
              </p>
              <a href="#" className="enlace">
                Click Here
              </a>
            </div>
            <div className="service__card">
              <span>
                <i className="ri-customer-service-2-line" />
              </span>
              <h4>CUSTOMER SUPPORT</h4>
              <p>
                E-commerce companies offer customer support services to assist
                customers with their queries, concerns, and issues.
              </p>
              <a href="#" className="enlace">
                Click Here
              </a>
            </div>
          </section>

          <section className="banner">
            <div className="banner__content">
              <p className="subtitle">OFFER OF THE MONTH</p>
              <h4 className="title">PHANTOM VISION ELITE DYNAMIC</h4>
              <p className="description">
                The Nike Phantom Vision Elite Dynamic shoes combine comfort,
                performance, and style. Designed for football (soccer) players,
                they feature a dynamic fit collar for agility and a precise touch.
                With a lightweight design and excellent traction, these shoes
                offer top-notch performance on the field.
              </p>
              <div className="price">
                <span>$500</span> <del>$1000</del>
              </div>
              <div className="countdown">
                <div className="square">
                  <p>09</p>
                  <span>HOURS</span>
                </div>
                <div className="square">
                  <p>56</p>
                  <span>MINUTES</span>
                </div>
                <div className="square">
                  <p>11</p>
                  <span>SECONDS</span>
                </div>
              </div>
              <button>SHOP NOW</button>
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
              <h4>MEN&#39;S RUNNING SHOES</h4>
              <p>SIGN UP NOW AND GET 50% OFF</p>
            </div>
            <div className="collection__image">
              <img src="assets/collection-5.png" alt="collection" />
            </div>
            <div className="collection__banner">
              <div className="collection__banner__content">
                RUN,<br />EAT, SLEEP<br />AND<br />REPEAT
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