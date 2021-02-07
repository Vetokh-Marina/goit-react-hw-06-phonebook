import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/phonebook-selectors';
import * as phonebookActions from '../../redux/phonebook-actions';
import s from './ContactForm.module.css';

export default function ContactForm() {
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();

    const onSubmit = (name, number) =>
        dispatch(phonebookActions.addContact(name, number));

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const contactValidation = () => {
        if (contacts.find(contact => name === contact.name)) {
            alert(`${name} is already in contacts`);
            return true;
        }

        if (name === '' || number === '') {
            alert('Please enter all data');
            return true;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();

        if (contactValidation()) {
            return;
        }

        onSubmit(name, number);
        reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

    return (
        <div className={s.container}>
            <form onSubmit={handleSubmit} className={s.form}>
                <label className={s.label}>
                    Name
        <input
                        type="text"
                        name="name"
                        value={name}
                        placeholder="Сontact name"
                        onChange={e => setName(e.currentTarget.value)}
                        className={s.input}
                    />
                </label>

                <label className={s.label}>
                    Number
        <input
                        type="tel"
                        name="number"
                        value={number}
                        placeholder="Сontact number"
                        onChange={e => setNumber(e.currentTarget.value)}
                        className={s.input}
                    />
                </label>
                <button type="submit" className={s.button}>
                    Add contact
      </button>
            </form>
        </div>

    );
}