import React from "react";
import ContactoComponent from "../pure/ContactoComponent";
import { Contacto } from "../../models/Contacto.class";

const ContactoList = () => {
  const defaultContacto = new Contacto(
    "Diego",
    "Mateo",
    "diego@gmail.com",
    false
  );

  return (
    <div>
      <h1>Tus Contactos: </h1>
      <ContactoComponent contacto={defaultContacto} />
    </div>
  );
};

export default ContactoList;
