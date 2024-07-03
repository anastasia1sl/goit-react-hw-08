import { Formik, Form, Field } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./RegisterForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2, "Too short").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(7, "Too short").required("Required"),
});

const RegisterForm = ({ submit }) => {
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values, "values");
    submit(values);
    actions.resetForm();
  };
  return (
    <div className={css.formBox}>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.form}>
          <label htmlFor={nameId}>Name</label>
          <Field name="name" type="text" id={nameId} />
          <label htmlFor={emailId}>Email</label>
          <Field name="email" type="email" id={emailId} />
          <label htmlFor={passwordId}>Password</label>
          <Field name="password" type="password" id={passwordId} />
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
