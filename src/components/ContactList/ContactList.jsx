import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactsList}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={css.contactsItem}>
          <Contact key={contact.id} contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
