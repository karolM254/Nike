import React from "react";
import "./StarFilter.css";

function StarFilter() {
  return (
    <div className="filtro-estrellas">
      <div className="cuadro-estrella">Todas</div>
      <div className="cuadro-estrella">5 ★</div>
      <div className="cuadro-estrella">4 ★</div>
      <div className="cuadro-estrella">3 ★</div>
      <div className="cuadro-estrella">2 ★</div>
      <div className="cuadro-estrella">1 ★</div>
    </div>
  );
}

export default StarFilter;
