import React from 'react';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { StyledWrapper } from './ContactList.Styled';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

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
      {filteredContacts().map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </StyledWrapper>
  );
};
