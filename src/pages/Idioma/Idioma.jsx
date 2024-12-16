// Importa las dependencias necesarias de React y react-router-dom.
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./Idioma.css"; // Importa el archivo de estilos CSS para este componente.

// Define un componente funcional llamado Idioma.
function Idioma() {
    return (
        // Devuelve la estructura del componente.
        // En este caso, una cabecera con un contenedor de banner y contenido introductorio.
        <header>
            <div className="banner_container intro__container">
                <div className="intro__content">
                    {/* Título principal de la página */}
                    <h1>NIKE<br />SHOES</h1>
                    {/* Subtítulo o mensaje promocional */}
                    <p>SIGN UP AND GET 50% OFF</p>
                </div>
            </div>
        </header>
    );
}

// Exporta el componente Idioma para que pueda ser usado en otros archivos.
export default Idioma;
