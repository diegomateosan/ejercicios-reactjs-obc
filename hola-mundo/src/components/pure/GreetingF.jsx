import React, { useState } from "react";
import PropTypes from "prop-types";

const GreetingF = (props) => {
  // Breve introduccióin a useState.
  // const [variable, método par actualizarlo] = useState(valor inicial).
  const [age, setAge] = useState(19);

  const birthday = () => {
    // actualizamos el state
    setAge(age + 1);
  };

  return (
    <div>
      <h1>Hola {props.name} desde componente funcional </h1>
      <h2>Tu edad es {age}</h2>
      <button onClick={birthday}>Cumplir años</button>
    </div>
  );
};

GreetingF.propTypes = {
  name: PropTypes.string,
};

export default GreetingF;
