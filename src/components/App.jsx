import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import styles from './App.module.scss';
// import { useDispatch, useSelector } from 'react-redux';
// import { getContacts } from 'redux/selectors';
// import { useEffect } from 'react';
// import { fetchContacts } from 'redux/operations';

export const App = () => {
  // const dispatch = useDispatch();
  // const { items, isLoading, error } = useSelector(getContacts);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <div className={styles.box}>
      <div className={styles.box_forForm}>
        <h2>Phonebook</h2>
        <ContactForm />
      </div>
      <div className={styles.box_forForm}>
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
      {/* {isLoading && <b>Loading tasks...</b>}
      {error && <b>{error}</b>}
      <p>{items.length > 0 && JSON.stringify(items)}</p> */}
    </div>
  );
};
