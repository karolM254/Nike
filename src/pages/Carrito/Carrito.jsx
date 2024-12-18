import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../components/Carrito/CartContext";
import { Link } from "react-router-dom";
import "../Carrito/Carrito.css";

function Carrito() {
  const navigate = useNavigate();
  const { carrito, setCarrito } = useCart();

  const [cantidades, setCantidades] = useState(() => {
    const storedCantidades = localStorage.getItem("cantidades");
    return storedCantidades
      ? JSON.parse(storedCantidades)
      : carrito.reduce((acc, producto) => {
          acc[producto.id] = 1;
          return acc;
        }, {});
  });

  useEffect(() => {
    localStorage.setItem("cantidades", JSON.stringify(cantidades));
  }, [cantidades]);

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
    const total = carrito
      .reduce((total, producto) => {
        const precioNumerico = parseFloat(
          producto.price.replace(/[^0-9.-]+/g, "")
        );
        return total + cantidades[producto.id] * precioNumerico;
      }, 0)
      .toLocaleString("es-CO", {
        style: "currency",
        currency: "COP",
      });

    localStorage.setItem("totalPedido", total);
    return total;
  };

  const eliminarProducto = (id) => {
    setCarrito(carrito.filter((producto) => producto.id !== id));
    const nuevasCantidades = { ...cantidades };
    delete nuevasCantidades[id];
    setCantidades(nuevasCantidades);
  };

  return (
    <div className="carrito-compras">
      <EntregaCarrito calcularTotal={calcularTotal} carrito={carrito} />
      <GridCarrito
        carrito={carrito}
        cantidades={cantidades}
        incrementarCantidad={incrementarCantidad}
        disminuirCantidad={disminuirCantidad}
        calcularSubtotal={calcularSubtotal}
        eliminarProducto={eliminarProducto}
      />
    </div>
  );
}

// Componente para la sección de entrega y total
function EntregaCarrito({ calcularTotal, carrito }) {
  const navigate = useNavigate();

  return (
    <div className="entrega-carrito">
      <button className="boton-regresar" onClick={() => navigate(-1)}>
        <i className="ri-arrow-left-line"></i> Volver
      </button>

      <h3 className="entregar-titulo">Entrega</h3>
      <div className="contenedor-total-entrega">
        <h4 className="total-entrega">Total:</h4>
        <h4 className="total-valor">{calcularTotal()}</h4>
      </div>
      <div className="contenedor-subtotal-entrega">
        <h4 className="subtotal-entrega">Subtotal:</h4>
        <h4 className="subtotal-valor">{calcularTotal()}</h4>
      </div>

      {/* Botón de realizar compra corregido */}
      <Link
        to="/Compras1"
        className={`realizar-compra ${carrito.length === 0 ? "disabled" : ""}`}
        style={{
          pointerEvents: carrito.length === 0 ? "none" : "auto",
          backgroundColor: carrito.length === 0 ? "#ccc" : "#2563eb",
          color: "white",
          textAlign: "center",
          padding: "10px",
          borderRadius: "5px",
          display: "block",
          textDecoration: "none",
        }}
      >
        Realizar Compra
      </Link>
    </div>
  );
}

function GridCarrito({
  carrito,
  cantidades,
  incrementarCantidad,
  disminuirCantidad,
  calcularSubtotal,
  eliminarProducto,
}) {
  return (
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
            <img
              src={producto.img}
              alt={producto.title}
              className="producto-img"
            />
            <h3>{producto.title}</h3>
            <p>Color: {producto.selectedColor}</p>
            <p>Size: {producto.selectedSize}</p>
          </div>

          <p className="precio-producto">{producto.price}</p>

          <CantidadProducto
            producto={producto}
            cantidades={cantidades}
            incrementarCantidad={incrementarCantidad}
            disminuirCantidad={disminuirCantidad}
          />

          <SubtotalEliminar
            producto={producto}
            calcularSubtotal={calcularSubtotal}
            eliminarProducto={eliminarProducto}
          />
        </div>
      ))}
    </div>
  );
}

function CantidadProducto({
  producto,
  cantidades,
  incrementarCantidad,
  disminuirCantidad,
}) {
  return (
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
  );
}

function SubtotalEliminar({ producto, calcularSubtotal, eliminarProducto }) {
  return (
    <div className="subtotal-eliminar">
      <span className="subtotal-producto">
        {calcularSubtotal(producto.id, producto.price)}
      </span>
      <button
        className="eliminar-producto"
        onClick={() => eliminarProducto(producto.id)}
      >
        <i className="ri-delete-bin-line"></i>
      </button>
    </div>
  );
}

export default Carrito;
