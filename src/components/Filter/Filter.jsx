import React from 'react';
import {
  StyledLabel,
  StyledInput,
} from 'components/ContactForm/ContactForm.styled';

import { StyledWrapper } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contactsSlice';
import { selectFilter } from '../../redux/contacts/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterState = useSelector(selectFilter);

  const handleFilterInput = e => {
    const { value } = e.target;
    dispatch(changeFilter(value));
  };

  return (
    <StyledWrapper>
      <StyledLabel>
        Find contact
        <StyledInput
          type="text"
          name="filter"
          value={filterState}
          placeholder="Enter contact's name"
          onChange={handleFilterInput}
        />
      </StyledLabel>
    </StyledWrapper>
  );
};
