import css from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContactOperation } from "../../redux/contacts/operations";

const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContactOperation(id));
  };

  return (
    <div className={css.contactBox}>
      <div className={css.contactText}>
        <p>
          <IoPerson /> {name}
        </p>
        <p>
          <FaPhoneAlt /> {number}
        </p>
      </div>
      <button
        type="button"
        className={css.button}
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
