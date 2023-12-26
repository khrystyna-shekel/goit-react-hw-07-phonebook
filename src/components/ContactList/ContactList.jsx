import React, { useEffect } from 'react';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { StyledWrapper } from './ContactList.Styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/contacts/selectors';
import { fetchContactsThunk } from '../../redux/contacts/operations';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  // const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  function filteredContacts() {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  if (!contacts?.length) {
    return (
      <h4 style={{ marginTop: '15px', textAlign: 'center' }}>
        Your phonebook is empty!
      </h4>
    );
  }

  return (
    <StyledWrapper>
      {filteredContacts().map(({ id, name, phone }) => (
        <ContactListItem key={id} id={id} name={name} number={phone} />
      ))}
    </StyledWrapper>
  );
};
