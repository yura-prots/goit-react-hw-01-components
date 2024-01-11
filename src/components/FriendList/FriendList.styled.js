import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: min-content;

  @media screen and (max-width: 425px) {
    display: flex;
    margin: auto;
  }
`;
