import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Model
import { Task } from "../Models/Task.class";
import { LEVELS } from "../Models/Levels.enum";

const TaskFormik = () => {
  const initialValues = {
    name: "",
    description: "",
    completed: false,
    level: LEVELS.NORMAL,
  };

  const taskSchema = Yup.object().shape({
    name: Yup.string().max(100, "Name too long").required("Name required"),
    description: Yup.string()
      .min(10, "Description too long")
      .max(280, "Description too long")
      .required("Description require"),
    level: Yup.string().required("Level required"),
  });

  return (
    <div>
      <h4>Register Task</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={taskSchema}
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
            <label htmlFor="name">Name</label>
            <Field
              id="name"
              type="text"
              name="name"
              placeholder="Your task name"
            />
            {/* Task Name Errors */}
            {errors.name && touched.name && (
              <ErrorMessage name="name" component={"div"} />
            )}

            <label htmlFor="description">Description</label>
            <Field
              id="description"
              as="textarea"
              name="description"
              placeholder="Your description"
            />
            {/* Description Error */}
            {errors.description && touched.description && (
              <ErrorMessage name="description" component={"div"} />
            )}

            <label htmlFor="level">Level</label>
            <Field id="level" name="level" as="select">
              <option value={LEVELS.NORMAL}>NORMAL</option>
              <option value={LEVELS.URGENT}>URGENT</option>
              <option value={LEVELS.BLOCKING}>BLOCKING</option>
            </Field>
            {/* Level Error */}
            {errors.level && touched.level && (
              <ErrorMessage name="level" component={"div"} />
            )}
            <button type="submit">Register Task</button>
            {isSubmitting ? <p>Sending task...</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TaskFormik;
