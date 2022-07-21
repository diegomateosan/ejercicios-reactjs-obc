import React from "react";
import PropTypes from "prop-types";
import { Contacto } from "../../models/Contacto.class";

const ContactoComponent = ({ contacto }) => {
  return (
    <div>
      <h2> Nombre: {contacto.name}</h2>
      <h2> Apellido: {contacto.lastname}</h2>
      <h3> Email: {contacto.email}</h3>
      <h4>
        Conectado:
        {contacto.online ? " Contacto En Línea" : " Contacto No Disponible"}
      </h4>
    </div>
  );
};

ContactoComponent.propTypes = {
  contacto: PropTypes.instanceOf(Contacto),
};

export default ContactoComponent;
