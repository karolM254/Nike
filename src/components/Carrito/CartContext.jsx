import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  return (
    <CartContext.Provider value={{ carrito, setCarrito }}>
      {children}
    </CartContext.Provider>
  );
};
