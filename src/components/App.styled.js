import styled from 'styled-components';

export const StyledWrapper = styled.div`
  border: 3px solid bisque;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 1px 2px 4px rgb(204, 203, 203);
  width: 400px;
  height: auto;

  & h1 {
    margin-bottom: 15px;
    font-size: 36px;
  }

  & h2 {
    margin-top: 15px;
    margin-bottom: 15px;
    font-size: 32px;
  }
`;
