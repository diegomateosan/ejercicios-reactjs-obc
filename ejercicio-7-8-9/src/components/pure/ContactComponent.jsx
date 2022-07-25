import React from "react";
import PropTypes from "prop-types";
import { Contacto } from "../../models/contact.class";

const ContactComponent = ({ contacto, cambiarEstado, eliminar }) => {
  return (
    <tr>
      <td> Nombre: {contacto.name}</td>
      <td> Apellido: {contacto.lastname}</td>
      <td> Email: {contacto.email}</td>
      <td>{contacto.online ? "Conectado" : "Desconectado"}</td>
      <td>
        <button onClick={() => cambiarEstado(contacto)}>Cambiar Estado</button>
        <button onClick={() => eliminar(contacto)}>Eliminar Contacto</button>
      </td>
    </tr>
  );
};

ContactComponent.propTypes = {
  contacto: PropTypes.instanceOf(Contacto),
};

export default ContactComponent;
