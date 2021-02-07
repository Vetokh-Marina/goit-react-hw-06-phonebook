import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/phonebook-selectors';
import * as phonebookActions from '../../redux/phonebook-actions';
import s from './Filter.module.css';

export default function Filter() {
    const value = useSelector(getFilter);
    const dispatch = useDispatch();
    const onChange = e => dispatch(phonebookActions.changeFilter(e.target.value));



    return (
        <label>
            <input className={s.input} type="text" value={value} onChange={onChange}
                placeholder=" Fined contacts by name"
            ></input>
        </label>
    );
}