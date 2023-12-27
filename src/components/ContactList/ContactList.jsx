import React, { useEffect } from 'react';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { StyledWrapper } from './ContactList.Styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectLoading,
} from '../../redux/contacts/selectors';
import { fetchContactsThunk } from '../../redux/contacts/operations';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  function filteredContacts() {
    if (filter) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      return contacts;
    }
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
      {error && <h1>{error}</h1>}
      {loading && <h1>Loading...</h1>}
      {filteredContacts().map(({ id, name, phone }) => (
        <ContactListItem key={id} id={id} name={name} number={phone} />
      ))}
    </StyledWrapper>
  );
};
