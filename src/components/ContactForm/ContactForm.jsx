import React, { useState } from 'react';
import {
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledBtn,
} from './ContactForm.styled';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsSlice';
import { selectContacts } from '../../redux/contacts/selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleInput = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`Contact with name ${name} already exists!`);
      return;
    }
    dispatch(addContact(newContact));
    setName('');
    setNumber('');
  };

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <StyledLabel>
        Name
        <StyledInput
          onChange={handleInput}
          name="name"
          type="text"
          value={name}
          required
        />
      </StyledLabel>
      <StyledLabel>
        Number
        <StyledInput
          onChange={handleInput}
          name="number"
          type="tel"
          value={number}
          required
        />
      </StyledLabel>
      <StyledBtn type="submit">Add to contact</StyledBtn>
    </StyledForm>
  );
};
