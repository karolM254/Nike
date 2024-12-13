import React, { useState } from "react";
import { useCart } from "../../components/Carrito/CartContext";
import "./Carrito.css";

function Carrito() {
  const { carrito, setCarrito } = useCart();

  const [cantidades, setCantidades] = useState(
    carrito.reduce((acc, producto) => {
      acc[producto.id] = 1;
      return acc;
    }, {})
  );

  const incrementarCantidad = (id) => {
    setCantidades((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  const disminuirCantidad = (id) => {
    setCantidades((prev) => ({
      ...prev,
      [id]: Math.max(prev[id] - 1, 1),
    }));
  };

  const calcularSubtotal = (id, price) => {
    const precioNumerico = parseFloat(price.replace(/[^0-9.-]+/g, ""));
    return (cantidades[id] * precioNumerico).toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
    });
  };

  const calcularTotal = () => {
    return carrito
      .reduce((total, producto) => {
        const precioNumerico = parseFloat(producto.price.replace(/[^0-9.-]+/g, ""));
        return total + cantidades[producto.id] * precioNumerico;
      }, 0)
      .toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
      });
  };

  const eliminarProducto = (id) => {
    setCarrito(carrito.filter((producto) => producto.id !== id));
    const nuevasCantidades = { ...cantidades };
    delete nuevasCantidades[id];
    setCantidades(nuevasCantidades);
  };

  return (
    <div className="carrito-compras">
      <div className="entrega-carrito">
        <h3 className="entregar-titulo">Entrega</h3>
        <div className="contenedor-total-entrega">
          <h4 className="total-entrega">Total:</h4>
          <h4 className="total-valor">{calcularTotal()}</h4>
        </div>
        <div className="contenedor-subtotal-entrega">
          <h4 className="subtotal-entrega">Subtotal:</h4>
          <h4 className="subtotal-valor">{calcularTotal()}</h4>
        </div>
        <button className="realizar-compra" disabled={carrito.length === 0}>
          Realizar compra
        </button>
      </div>

      <div className="grid-carrito">
        <div className="header-grid">
          <h2>Producto</h2>
          <h2>Precio</h2>
          <h2>Cantidad</h2>
          <h2>Subtotal</h2>
        </div>

        {carrito.map((producto) => (
          <div className="fila-producto" key={producto.id}>
            <div className="producto-detalle">
              <img src={producto.img} alt={producto.title} className="producto-img" />
              <h3>{producto.title}</h3>
            </div>

            <p className="precio-producto">{producto.price}</p>

            <div className="cantidad-controles">
              <button
                className="disminuir-cantidad"
                onClick={() => disminuirCantidad(producto.id)}
              >
                -
              </button>
              <span className="cantidad-producto">{cantidades[producto.id]}</span>
              <button
                className="aumentar-cantidad"
                onClick={() => incrementarCantidad(producto.id)}
              >
                +
              </button>
            </div>

            <div className="subtotal-eliminar">
              <span className="subtotal-producto">
                {calcularSubtotal(producto.id, producto.price)}
              </span>
              <button
                className="eliminar-producto"
                onClick={() => eliminarProducto(producto.id)}
              >
                <i class="ri-delete-bin-line"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carrito;
