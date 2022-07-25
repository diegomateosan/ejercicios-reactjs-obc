import React, { useState, useEffect } from "react";
import "../styles/cuadrado.css";

const Cuadrado = () => {
  const red = 0;
  const green = 0;
  const blue = 0;
  const estiloFondo = [red, green, blue];

  const [colorFondo, setColorFondo] = useState(estiloFondo);

  function obtenerNumeroAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function valorAleatorioRGB() {
    const tempColor = [...colorFondo];
    tempColor[0] = obtenerNumeroAleatorio(0, 255);
    tempColor[1] = obtenerNumeroAleatorio(0, 255);
    tempColor[2] = obtenerNumeroAleatorio(0, 255);
    setColorFondo(tempColor);
  }

  function detenerCambio() {
    setColorFondo(estiloFondo);
  }

  return (
    <div>
      <div
        className="box"
        onMouseEnter={valorAleatorioRGB}
        onMouseLeave={detenerCambio}
        onDoubleClick={detenerCambio}
        style={{
          backgroundColor: `rgb(${colorFondo[0]}, ${colorFondo[1]}, ${colorFondo[2]})`,
        }}
      ></div>
    </div>
  );
};

export default Cuadrado;
