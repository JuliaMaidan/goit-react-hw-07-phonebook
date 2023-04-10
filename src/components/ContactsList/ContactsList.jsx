import styles from './ContactsList.module.scss';

import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { deleteContact } from 'redux/operations';
import { getFilteredContacts } from '../../redux/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(getContacts);
  const filtered = useSelector(getFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <ul className={styles.list}>
      {isLoading && <b>Loading contacts...</b>}
      {error && <b>{error}</b>}
      {filtered.map(contact => (
        <li className={styles.item} key={contact.id}>
          <p>
            {contact.name}: {contact.phone}
          </p>
          <button
            className={styles.btn}
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
