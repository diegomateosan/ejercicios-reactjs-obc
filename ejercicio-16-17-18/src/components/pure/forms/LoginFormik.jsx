import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../../hooks/auth/useAuth";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginFormik = () => {
  const initialCredentials = {
    email: "",
    password: "",
  };

  const { login } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleClick = () => {
    login();
    navigate(state?.location?.pathname ?? "/");
  };

  return (
    <div>
      <h1>Login Formik</h1>
      <Formik
        // *** Initial values that the form will take
        initialValues={initialCredentials}
        // *** Yup Validation Schema ***
        validationSchema={loginSchema}
        // ** onSubmit Event
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
          // We save the data in the localstorage
          localStorage.setItem("credentials", values);
          navigate("/profile");
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
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" placeholder="example@email.com" />
            {/* Email Errors */}
            {errors.email && touched.email && (
              <ErrorMessage name="email" component={"div"} />
            )}
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              placeholder="password"
              type="password"
            />
            {/* Password Errors */}
            {errors.password && touched.password && (
              <div>
                <ErrorMessage name="password" />
              </div>
            )}
            <button type="submit" onClick={handleClick}>
              Login
            </button>
            {isSubmitting ? <p>Login your credentials ...</p> : null}
          </Form>
        )}
      </Formik>
      <button onClick={() => navigate("/register")}>Register here.</button>
    </div>
  );
};

export default LoginFormik;
