import React, { useState, useEffect } from "react";
/* import ‘../../styles/clock.scss’; */

const Clock = () => {
  const initialState = {
    fecha: new Date(),
    edad: 0,
    nombre: "Martín",
    apellidos: "San José",
  };

  const [data, setData] = useState(initialState);

  useEffect(() => {
    let timerID = setInterval(
      () =>
        setData({
          ...data,
          fecha: new Date(),
          edad: data.edad + 1,
        }),
      1000
    );
    return () => {
      clearInterval(timerID);
    };
  }, [data]);

  return (
    <div>
      <h2>
        Hora Actual:
        {data.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {data.nombre} {data.apellidos}
      </h3>
      <h1>Edad: {data.edad}</h1>
    </div>
  );
};

export default Clock;
