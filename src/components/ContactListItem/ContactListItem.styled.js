import styled from 'styled-components';

export const StyledItem = styled.li`
  font-size: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & button {
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
  }
`;
