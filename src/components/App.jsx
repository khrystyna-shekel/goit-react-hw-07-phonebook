import React from 'react';
import { StyledWrapper } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';
import { selectError, selectLoading } from '../redux/contacts/selectors';

export const App = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px 50px',
        flexDirection: 'column',
        fontSize: 28,
        color: '#010101',
      }}
    >
      <StyledWrapper>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter>{loading && <h1>is loading...</h1>}</Filter>
        <ContactList> {error && <h1>{error}</h1>}</ContactList>
      </StyledWrapper>
    </div>
  );
};
