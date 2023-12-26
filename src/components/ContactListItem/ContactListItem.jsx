import React from 'react';
import { StyledItem } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contactsSlice';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <StyledItem>
      <h3>
        {name}: {number}
      </h3>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </StyledItem>
  );
};
