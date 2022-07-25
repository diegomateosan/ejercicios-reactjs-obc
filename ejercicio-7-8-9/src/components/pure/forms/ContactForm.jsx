import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Contacto } from "../../../models/contact.class";

const ContactForm = ({ añadir }) => {
  const nombreRef = useRef("");
  const apellidoRef = useRef("");
  const emailRef = useRef("");

  function añadirContacto(e) {
    e.preventDefault();
    const nuevoContacto = new Contacto(
      nombreRef.current.value,
      apellidoRef.current.value,
      emailRef.current.value,
      false
    );
    añadir(nuevoContacto);
  }

  return (
    <form onSubmit={añadirContacto}>
      <div>
        <input
          ref={nombreRef}
          id="inputNombre"
          type="text"
          placeholder="Inserte el nombre"
        />
        <input
          ref={apellidoRef}
          id="inputApellido"
          type="text"
          placeholder="Inserte el apellido"
        />
        <input
          ref={emailRef}
          id="inputEmail"
          type="email"
          placeholder="Inserte el email"
        />
      </div>
      <button type="submit">Añadir Contacto</button>
    </form>
  );
};

ContactForm.propTypes = {
  añadir: PropTypes.func.isRequired,
};

export default ContactForm;
