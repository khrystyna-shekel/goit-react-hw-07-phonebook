import React from 'react';
import { StyledItem } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from '../../redux/contacts/operations';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <StyledItem>
      <h3>
        {name}: {number}
      </h3>
      <button type="button" onClick={() => dispatch(deleteContactThunk(id))}>
        Delete
      </button>
    </StyledItem>
  );
};
