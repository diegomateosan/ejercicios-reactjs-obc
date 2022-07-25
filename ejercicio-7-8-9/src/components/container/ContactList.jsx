import React, { useState } from "react";
import ContactoComponent from "../pure/ContactComponent";
import { Contacto } from "../../models/contact.class";
import ContactForm from "../pure/forms/ContactForm";

const ContactList = () => {
  const contacto1 = new Contacto("Diego", "Mateo", "diego@gmail.com", false);

  const contacto2 = new Contacto("Erick", "Villa", "erick@gmail.com", false);

  const contacto3 = new Contacto("Julian", "Meza", "julian@gmail.com", false);

  const initialState = [contacto1, contacto2, contacto3];

  const [contactos, setContactos] = useState(initialState);

  function cambiarEstado(contacto) {
    const index = contactos.indexOf(contacto);
    const tempContactos = [...contactos];
    tempContactos[index].online = !tempContactos[index].online;
    setContactos(tempContactos);
  }

  function mostrarContactos(contacto, index) {
    return (
      <ContactoComponent
        key={index}
        contacto={contacto}
        cambiarEstado={cambiarEstado}
        eliminar={eliminarContacto}
      ></ContactoComponent>
    );
  }
  function crearContacto(contacto) {
    const tempContactos = [...contactos];
    tempContactos.push(contacto);
    setContactos(tempContactos);
  }
  function eliminarContacto(contacto) {
    const index = contactos.indexOf(contacto);
    const tempContactos = [...contactos];
    tempContactos.splice(index, 1);
    setContactos(tempContactos);
  }

  return (
    <div>
      <h1>Tus Contactos </h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {contactos.map((contacto, index) =>
            mostrarContactos(contacto, index)
          )}
        </tbody>
      </table>
      <ContactForm añadir={crearContacto}></ContactForm>
    </div>
  );
};

export default ContactList;
