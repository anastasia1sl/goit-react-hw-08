import { useDispatch } from "react-redux";
import { useEffect } from "react";

import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";

import { fetchContactsOperation } from "../../redux/contacts/operations";
import css from "./ContactsPage.module.css";

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsOperation());
  }, [dispatch]);

  return (
    <div className={css.contactsBox}>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
