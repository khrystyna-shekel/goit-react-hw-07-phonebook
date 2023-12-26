import styled from 'styled-components';

export const StyledForm = styled.form`
  border: 2px solid rgb(204, 203, 203);
  border-radius: 10px;
  padding: 10px;
  box-shadow: 1px 2px 4px rgb(204, 203, 203);
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 350px;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-weight: 700;
  color: rgb(161, 161, 218);
`;

export const StyledInput = styled.input`
  width: 240px;
  height: 20px;
  font-weight: 500;
  font-size: 16px;
  border: 1px solid black;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:focus {
    border-color: rgb(204, 203, 203);
    box-shadow: 1px 2px 4px rgb(204, 203, 203);
    border-radius: 4px;
    outline: none;
  }
`;

export const StyledBtn = styled.button`
  cursor: pointer;
  border: none;

  width: 120px;
  height: 30px;
  padding: 4px 6px;
  border-radius: 5px;
  box-shadow: 1px 2px 4px rgb(204, 203, 203);

  font-weight: 700;
  background-color: bisque;
  color: black;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgb(161, 161, 218);
    color: bisque;
  }
`;
