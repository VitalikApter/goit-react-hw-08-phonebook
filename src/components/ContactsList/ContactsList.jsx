import css from './ContactsList.module.css';
import Contact  from './Contact/Contact';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from '../../redux/selectors';


const ContactsList = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  return (
    <ul className={css.contacts}>
      {filteredContacts.map(({ id, name, number }) => {
        return <Contact key={id} name={name} phone={number} id={id} />;
      })}
    </ul>
  );
};

export default ContactsList;