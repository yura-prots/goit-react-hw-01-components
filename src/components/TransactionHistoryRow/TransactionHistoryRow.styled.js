import styled from '@emotion/styled';

export const TableRow = styled.tr`
  :nth-of-type(even) {
    background-color: lightblue;
  }

  :hover {
    background-color: lightyellow;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  text-align: center;
  border-bottom: 1px solid black;
`;
