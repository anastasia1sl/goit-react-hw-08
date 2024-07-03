import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./ContactForm.module.css";
import { useId } from "react";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { addContactOperation } from "../../redux/contacts/operations";

import { useDispatch } from "react-redux";

const initialValues = {
  name: "",
  number: "",
};

const ValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "This name is too short")
    .max(50, "This name is too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^[0-9-]+$/, "Phone number is not valid")
    .min(3, "This number is too short")
    .max(50, "This number is too Long!")
    .required("Required"),
});

const ContactForm = () => {
  const nameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = { ...values, id: nanoid() };
    dispatch(addContactOperation(newContact));
    actions.resetForm();
  };

  return (
    <div className={css.formBox}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ValidationSchema}
      >
        <Form className={css.form}>
          <div className={css.formName}>
            <label htmlFor="nameId">Name</label>
            <Field type="text" name="name" id={nameId} className={css.field} />
            <ErrorMessage name="name" component="span" />
          </div>
          <div className={css.formNumber}>
            <label htmlFor="numberId">Number</label>
            <Field
              type="tel"
              name="number"
              id={numberId}
              className={css.field}
            />
            <ErrorMessage name="number" component="span" />
          </div>
          <button type="submit" className={css.button}>
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
