// import IconButton from '../IconButton';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import * as phonebookActions from '../../redux/phonebook-actions';
import { getVisibleContacts } from '../../redux/phonebook-selectors';
// import { ReactComponent as DeleteIcon } from '../../icons/delete.svg';

import s from './ContactList.module.css';

export default function ContactList() {
    const contacts = useSelector(getVisibleContacts);
    const dispatch = useDispatch();
    const onDeleteContact = id => dispatch(phonebookActions.deleteContact(id));

    return (
        <div className={s.container}>
            <ul className={s.list}>
                {contacts.map(({ id, name, number }) => (
                    <li key={id} className={s.item}>
                        <p className={s.text}>
                            {name}: {number}
                        </p>
                        <button
                            type="button"
                            onClick={() => onDeleteContact(id)}
                            className={s.button}
                        >
                            Delete
          </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}