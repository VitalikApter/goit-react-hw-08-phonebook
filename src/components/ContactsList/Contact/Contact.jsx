import css from './Contact.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsOperations';
import { getIsLoading } from '../../../redux/selectors';

const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsLoading);
  const onDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.li}>
      <p>
        {name}: {phone}
      </p>
      <button
        className={css.button}
        type="button"
        onClick={() => onDelete(id)}
        disabled={isLoading}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};