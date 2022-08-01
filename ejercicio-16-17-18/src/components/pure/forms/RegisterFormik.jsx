import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// Model
import { User } from "../../../models/User.class";
import { ROLES } from "../../../models/Roles.enum";
import { useNavigate } from "react-router-dom";

const RegisterFormik = () => {
  const navigate = useNavigate();
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirm: "",
    role: ROLES.USER,
  };

  const registerSchema = Yup.object().shape({
    username: Yup.string()
      .min(6, "Nombre de usuario muy corto")
      .max(12, "Nombre de usuario muy largo")
      .required("Nombre de usuario obligatorio"),
    email: Yup.string()
      .email("Fomato de correo electrónico inválido")
      .required("Correo electrónico obligatorio"),
    password: Yup.string()
      .min(8, "Contraseña muy corta")
      .required("Contraseña obligatoria"),
    confirm: Yup.string()
      .when("password", {
        is: (value) => (value && value.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Las contraseñas deben coincidir"
        ),
      })
      .required("Debes confirmar tu contraseña"),
    role: Yup.string()
      .oneOf(
        [ROLES.USER, ROLES.ADMIN],
        "Debe elegir un rol: Usuario / Administrador"
      )
      .required("Rol obligatorio"),
  });

  const submit = (values) => {
    alert("Register user");
  };

  return (
    <div>
      <h4>Register Formik</h4>
      <Formik
        initialValues={initialValues}
        // *** Yup Validation Schema ***
        validationSchema={registerSchema}
        // ** onSubmit Event
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form>
            <label htmlFor="username">Nombre de usuario</label>
            <Field
              id="username"
              type="text"
              name="username"
              placeholder="Tu nombre de usuario"
            />
            {/* Username Errors */}
            {errors.username && touched.username && (
              <ErrorMessage name="username" component={"div"} />
            )}

            <label htmlFor="email">Correo Electrónico</label>
            <Field id="email" name="email" placeholder="ejemplo@email.com" />
            {/* Email Errors */}
            {errors.email && touched.email && (
              <ErrorMessage name="email" component={"div"} />
            )}

            <label htmlFor="password">Contraseña</label>
            <Field
              id="password"
              name="password"
              placeholder="Tu contraseña"
              type="password"
            />
            {/* Confirm Errors */}
            {errors.password && touched.password && (
              <div>
                <ErrorMessage name="password" />
              </div>
            )}

            <label htmlFor="confirm">Confirmar contraseña</label>
            <Field
              id="confirm"
              name="confirm"
              placeholder="Ingresar nuevamente su contraseña"
              type="password"
            />
            {/* Confirm Pasword Errors */}
            {errors.confirm && touched.confirm && (
              <div>
                <ErrorMessage name="confirm" />
              </div>
            )}

            <button type="submit">Registrar cuenta</button>
            {isSubmitting ? <p>Enviando credenciales...</p> : null}
          </Form>
        )}
      </Formik>
      <button onClick={() => navigate("/login")}>Go to Login Page</button>
    </div>
  );
};

export default RegisterFormik;
