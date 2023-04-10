import styles from './ContactsList.module.scss';

import { deleteContact } from 'redux/contactsSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getFilteredContacts } from '../../redux/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilteredContacts);

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <ul className={styles.list}>
      {filteredContacts.map(contact => (
        <li className={styles.item} key={contact.id}>
          <p>
            {contact.name}: {contact.number}
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
