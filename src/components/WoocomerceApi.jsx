import React, { useEffect, useState } from "react";

const WooCommerceAPI = () => {
  const [products, setProducts] = useState([]);
  const API_URL = "https://jsdq.tech/wp-json/wc/v3/";
  const CONSUMER_KEY = "ck_f63f22ee5e32cd9dd1306bc351b470bc74935cbc";
  const CONSUMER_SECRET = "cs_5f311caba7b327e0395c17b6196297d9c813ed31";

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${API_URL}products?consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>WooCommerce Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default WooCommerceAPI;