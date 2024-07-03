import { Formik, Form, Field } from "formik";
import { useId } from "react";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(7, "Too short").required("Required"),
});

const LoginForm = ({ submit }) => {
  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values, "values");
    submit(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <label htmlFor={emailId}>Email</label>
        <Field name="email" type="email" id={emailId} />
        <label htmlFor={passwordId}>Password</label>
        <Field name="password" type="password" id={passwordId} />
        <button type="submit">Log in</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
